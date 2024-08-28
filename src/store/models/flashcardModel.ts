/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, action, Thunk, thunk } from "easy-peasy";
import { Flashcard } from "../../types";
import _db from "../../data/db.json";
import axios from "axios";
const flashcards = _db.flashcards;

export interface FlashcardModel {
	flashcards: Flashcard[];
	title: string;

	// actions
	setTitle: Action<this, string>;
	deleteFlashcard: Action<this, number>;

	// thunks
	deleteFlashcardThunk: Thunk<this, number>;
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
	deleteFlashcardThunk: thunk(async (actions, flashcardId) => {
		console.log("in thunk");
		try {
			const response = await axios.delete(
				`http://localhost:3760/flashcards/${flashcardId}`
			);
			if (response.status === 200) {
				console.log(`database deletion of id=${flashcardId} was successful`);
				actions.deleteFlashcard(flashcardId);
			}
		} catch (e: any) {
			console.log(`ERROR: ${e.message}`);
		}
	}),
};
