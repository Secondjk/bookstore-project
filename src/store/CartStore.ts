import { createStore, Store, Event, createEvent } from 'effector';
import { CatalogEntity } from './CatalogItemsStore';

export type CartStoreData = CatalogEntity[];

interface CartStore extends Store<CartStoreData> {
  addItem: Event<CatalogEntity>
  deleteItem: Event<number>
  clear: Event<void>
}

export const CartStore = (() => {
  const store = createStore<CartStoreData>([]) as CartStore;

  store.addItem = createEvent<CatalogEntity>();
  store.on(store.addItem, (s, p) => [...s, p]);

  store.deleteItem = createEvent<number>();
  store.on(store.deleteItem, (s, p) => s.filter(({ id }) => id !== p));

  store.clear = createEvent<void>();
  store.on(store.clear, () => []);

  return store;
})();