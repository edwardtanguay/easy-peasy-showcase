/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, action, Thunk, thunk } from "easy-peasy";
import { Flashcard, LoadingStatus } from "./types";
import axios from "axios";
import * as config from "../../config";

export interface FlashcardModel {
	flashcards: Flashcard[];
	flashcardLoadingStatus: LoadingStatus;

	// actions
	setFlashcards: Action<this, Flashcard[]>;
	setFlashcardLoadingStatus: Action<this, LoadingStatus>;
	deleteFlashcard: Action<this, number>;

	// thunks
	loadAllFlashcardsThunk: Thunk<this>;
	deleteFlashcardThunk: Thunk<this, number>;
}

export const flashcardModel: FlashcardModel = {
	flashcards: [],
	flashcardLoadingStatus: "loading",
	setFlashcards: action((state, flashcards) => {
		state.flashcards = structuredClone(flashcards);
	}),
	setFlashcardLoadingStatus: action((state, loadingStatus) => {
		state.flashcardLoadingStatus = loadingStatus;
	}),
	deleteFlashcard: action((state, flashcardId) => {
		const index = state.flashcards.findIndex((m) => m.id === flashcardId);
		if (index !== -1) {
			state.flashcards.splice(index, 1);
		}
	}),
	loadAllFlashcardsThunk: thunk((actions) => {
		actions.setFlashcardLoadingStatus("loading");
		setTimeout(async () => {
			try {
				const response = await axios.get(
					`http://localhost:3760/flashcards`
				);
				if (response.status === 200) {
					const flashcards: Flashcard[] = response.data;
					actions.setFlashcards(flashcards);
				}
				actions.setFlashcardLoadingStatus("loaded");
			} catch (e: any) {
				console.log(`ERROR: ${e.message}`);
				actions.setFlashcardLoadingStatus("failed");
			}
		}, config.uxLoadingSeconds() * 1000);
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
