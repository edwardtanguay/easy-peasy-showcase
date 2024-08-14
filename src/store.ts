import { createStore } from 'easy-peasy';
import { StoreModel } from './types';

export const store = createStore<StoreModel>({
  flashcards: [
    {
      front: "fff",
      back: "bbb"
    }
  ],
});
