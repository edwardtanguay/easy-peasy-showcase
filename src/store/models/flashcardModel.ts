/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, action, Thunk, thunk } from "easy-peasy";
import { Flashcard } from "../../types";
import axios from "axios";

export interface FlashcardModel {
	flashcards: Flashcard[];
	title: string;

	// actions
	setTitle: Action<this, string>;
	setFlashcards: Action<this, Flashcard[]>
	deleteFlashcard: Action<this, number>;

	// thunks
	loadAllFlashcardsThunk: Thunk<this>;
	deleteFlashcardThunk: Thunk<this, number>;
}

export const flashcardModel: FlashcardModel = {
	title: "The Flashcards",
	flashcards: [],
	setTitle: action((state, title) => {
		state.title = title;
	}),
	setFlashcards: action((state, flashcards) => {
		state.flashcards = structuredClone(flashcards);
	}),
	deleteFlashcard: action((state, flashcardId) => {
		const index = state.flashcards.findIndex((m) => m.id === flashcardId);
		if (index !== -1) {
			state.flashcards.splice(index, 1);
		}
	}),
	loadAllFlashcardsThunk: thunk(async (actions) => {
		console.log('getting');
		try {
			const response = await axios.get(`http://localhost:3760/flashcards`);
			if (response.status === 200) {
				const flashcards: Flashcard[] =  response.data;
				actions.setFlashcards(flashcards);
			}
		} catch (e: any) {
			console.log(`ERROR: ${e.message}`);
		}
	}),
	deleteFlashcardThunk: thunk(async (actions, flashcardId) => {
		try {
			const response = await axios.delete(
				`http://localhost:3760/flashcards/${flashcardId}`
			);
			if (response.status === 200) {
				console.log(
					`database deletion of id=${flashcardId} was successful`
				);
				actions.deleteFlashcard(flashcardId);
			}
		} catch (e: any) {
			console.log(`ERROR: ${e.message}`);
		}
	}),
};
