/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, action } from "easy-peasy";

export interface FlashcardModel {
	title: string;

	// actions
	setTitle: Action<this, string>;
}

export const flashcardModel: FlashcardModel = {
	title: "This is the title",
	setTitle: action((state, title) => {
		state.title = title;
	}),
};
