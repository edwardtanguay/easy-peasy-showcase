import { Action, action } from "easy-peasy";
import { Flashcard } from "../../types";
import _db from "../../data/db.json";
const flashcards = _db.flashcards;

export type FlashcardModel = {
	flashcards: Flashcard[];
	title: string;

	// actions
	setTitle: Action<FlashcardModel, string>;
	deleteFlashcard: Action<FlashcardModel, number>;

	// thunks
} 

export const flashcardModel: FlashcardModel = {
	title: "The Flashcards222",
	flashcards,
	setTitle: action((state, title) => {
		state.title = title;
	}),
	deleteFlashcard: action((state, flashcardId) => {
		const index = state.flashcards.findIndex((m) => m.id === flashcardId);
		if (index !== -1) {
			state.flashcards.splice(index, 1);
		}
	}),
}