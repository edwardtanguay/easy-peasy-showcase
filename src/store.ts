import { createStore } from 'easy-peasy';
import { StoreModel } from './types';

export const store = createStore<StoreModel>({
  flashcards: [
    {
      front: "the paper",
      back: "das Papier"
    },
    {
      front: "the fork",
      back: "die Gabel"
    }
  ],
});
