import { Action, action } from "easy-peasy";
import { Flashcard } from "../../types";
import _db from "../../data/db.json";
const flashcards = _db.flashcards;

export type FlashcardModel = {
	flashcards: Flashcard[];
	title: string;

	// actions
	deleteFlashcard: Action<FlashcardModel, number>;

	// thunks
} 

export const flashcardModel: FlashcardModel = {
	title: "The Flashcards222",
	flashcards,
	deleteFlashcard: action((state, payload) => {
		const index = state.flashcards.findIndex((m) => m.id === payload);
		if (index !== -1) {
			state.flashcards.splice(index, 1);
		}
	}),
}