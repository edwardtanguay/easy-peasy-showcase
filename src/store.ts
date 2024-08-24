import { createStore } from "easy-peasy";
import { Flashcard } from "./types";
import _db from "./data/db.json";

const flashcards = _db.flashcards;

export type StoreModel = {
	flashcards: Flashcard[];
};

export const store = createStore<StoreModel>({
	flashcards,
});
