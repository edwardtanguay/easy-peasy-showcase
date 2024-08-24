import { Action, action, createStore, State } from "easy-peasy";
import { Flashcard } from "./types";
import _db from "./data/db.json";

const flashcards = _db.flashcards;

export type StoreModel = {
	flashcards: Flashcard[];
	deleteFlashcard: Action<StoreModel, number>;
};

export const store = createStore<StoreModel>({
	flashcards,
	deleteFlashcard: action((state: State<StoreModel>, payload: number) => {
		state.flashcards = flashcards.filter((m) => m.id != payload);
	}),
});
