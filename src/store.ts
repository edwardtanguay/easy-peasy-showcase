import { Action, action, createStore } from "easy-peasy";
import { Flashcard } from "./types";
import _db from "./data/db.json";

const flashcards = _db.flashcards;

export type StoreModel = {
	flashcards: Flashcard[];
	deleteFlashcard: Action<StoreModel, number>;
};

export const store = createStore<StoreModel>({
	flashcards,
	deleteFlashcard: action((state, payload) => {
		const index = state.flashcards.findIndex((m) => m.id === payload);
		if (index !== -1) {
			state.flashcards.splice(index, 1);
		}
	}),
});
