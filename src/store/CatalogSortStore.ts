import { createEvent, createStore, Store, Event } from 'effector';
import { CatalogStore } from './CatalogItemsStore';

export type SortOption = 'min-price' | 'max-price' |'popularity' | 'count';

export interface CatalogSortData {
  option: SortOption
}

interface CatalogSortStore extends Store<CatalogSortData> {
  setOption: Event<SortOption>
}

export const CatalogSortStore = (() => {
  const store = createStore<CatalogSortData>({ option: 'popularity' }) as CatalogSortStore;

  store.setOption = createEvent<SortOption>();
  store.on(store.setOption, (s, option) => {
    const data = CatalogStore.getState().filtered;

    switch (option) {
      case ('min-price'):
        CatalogStore.setFiltered(data.sort((a, b) => Math.sign(a.price - b.price)));
        break;
      case ('max-price'):
        CatalogStore.setFiltered(data.sort((a, b) => Math.sign(b.price - a.price)));
        break;
      case ('popularity'):
        CatalogStore.setFiltered(data.sort((a, b) => Math.sign(b.popularity - a.popularity)));
        break;
      case ('count'):
        CatalogStore.setFiltered(data.sort((a, b) => Math.sign(b.amount - a.amount)));
        break;
    }

    return { option };
  });

  return store;
})();
