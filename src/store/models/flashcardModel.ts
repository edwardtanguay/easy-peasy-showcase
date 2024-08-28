import { Action, action } from "easy-peasy";
import { Flashcard } from "../../types";
import _db from "../../data/db.json";
const flashcards = _db.flashcards;

export interface FlashcardModel  {
	flashcards: Flashcard[];
	title: string;

	// actions
	setTitle: Action<this, string>;
	deleteFlashcard: Action<this, number>;

	// thunks
} 

export const flashcardModel: FlashcardModel = {
	title: "The Flashcards",
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