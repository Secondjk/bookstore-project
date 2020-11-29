import { createStore, Store, Event, createApi, createEvent } from 'effector';
import { CatalogData } from 'db/CatalogData';

export type Tag = 'detectives' | 'fantasy' | 'adventure' | 'classic' | 'comic' | 'all';

export interface CatalogEntity {
  id: number
  title: string
  author: string
  price: number
  amount: number
  popularity: number
  img: string
  tags?: Tag[]
}

export interface CatalogStoreData {
  raw: CatalogEntity[]
  filtered: CatalogEntity[]
}

interface CatalogStore extends Store<CatalogStoreData> {
  filterTags: Event<Tag[]>
  filterPrice: Event<{ min: number; max: number }>
  filterTitle: Event<string>
}

interface CatalogEvents {
  setRaw: CatalogEntity[]
  setFiltered: CatalogEntity[]
}

export type Events<S, E extends object> = {
  [K in keyof E]: (store: S, e: E[K]) => S
};

const initialData: CatalogStoreData = {
  raw: CatalogData,
  filtered: CatalogData,
};

export const CatalogStore = (() => {
  const store = createStore<CatalogStoreData>(initialData) as CatalogStore;
  store.filterTags = createEvent<Tag[]>();
  store.filterPrice = createEvent<{ min: number; max: number }>();
  store.filterTitle = createEvent<string>();

  const api = createApi<CatalogStoreData, Events<CatalogStoreData, CatalogEvents>>(store, {
    setRaw: (s,p) => ({ ...s, raw: CatalogData }),
    setFiltered: (s, p) => ({ ...s, filtered: p }),
  });

  store.on(store.filterTags, (s, p) => ({ ...s,
    filtered: p.includes('all') ? initialData.filtered
      : initialData.raw.filter(({ tags }) => tags.some((tag) => p.includes(tag))),
  }));

  store.on(store.filterPrice, (s, { min, max }) => ({ ...s,
    filtered: s.filtered.filter(({ price }) => price >= min && price <= max),
  }));

  store.on(store.filterTitle, (s, p) => ({ ...s,
    filtered: p !== '' ? initialData.raw.filter(({ title }) => title.toLowerCase().includes(p.toLowerCase()))
      : initialData.raw,
  }));

  return { ...store, ...api };
})();

