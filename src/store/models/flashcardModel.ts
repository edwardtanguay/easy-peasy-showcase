/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, action, Thunk, thunk } from "easy-peasy";
import { DataFlashcard, Flashcard, ProcessStatus } from "../../types";
import axios from "axios";
import * as config from "../../config";

export interface FlashcardModel {
	flashcards: Flashcard[];
	flashcardsLoadingStatus: ProcessStatus;

	// actions
	setFlashcards: Action<this, Flashcard[]>;
	setFlashcardsLoadingStatus: Action<this, ProcessStatus>;
	deleteFlashcard: Action<this, number>;

	// thunks
	loadFrontendFlashcardsThunk: Thunk<this>;
	deleteFlashcardThunk: Thunk<this, number>;
}

export const flashcardModel: FlashcardModel = {
	flashcards: [],
	flashcardsLoadingStatus: "inProcess",
	setFlashcards: action((state, flashcards) => {
		state.flashcards = structuredClone(flashcards);
	}),
	setFlashcardsLoadingStatus: action((state, loadingStatus) => {
		state.flashcardsLoadingStatus = loadingStatus;
	}),
	deleteFlashcard: action((state, flashcardId) => {
		const index = state.flashcards.findIndex(
			(m) => m.dataItem.id === flashcardId
		);
		if (index !== -1) {
			state.flashcards.splice(index, 1);
		}
	}),
	loadFrontendFlashcardsThunk: thunk((actions) => {
		actions.setFlashcardsLoadingStatus("inProcess");
		setTimeout(async () => {
			try {
				const response = await axios.get(
					`http://localhost:3760/flashcards`
				);
				if (response.status === 200) {
					const dataFlashcards: DataFlashcard[] = response.data;
					const flashcards = decorateDataFlascards(dataFlashcards);
					actions.setFlashcards(flashcards);
				}
				actions.setFlashcardsLoadingStatus("finished");
			} catch (e: any) {
				console.log(`ERROR: ${e.message}`);
				actions.setFlashcardsLoadingStatus("failed");
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

export const decorateDataFlascards = (
	dataFlashcards: DataFlashcard[]
): Flashcard[] => {
	const flashcards: Flashcard[] = [];
	for (const dataFlashcard of dataFlashcards) {
		const flashcard: Flashcard = {
			dataItem: dataFlashcard,
			deletingStatus: "pending",
		};
		flashcards.push(flashcard);
	}
	return flashcards;
};
