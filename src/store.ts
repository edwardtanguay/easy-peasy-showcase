import { createStore } from "easy-peasy";
import { Flashcard } from "./types";

export type StoreModel = {
	flashcards: Flashcard[];
}

export const store = createStore<StoreModel>({
	flashcards: [
		{
			front: "the paper",
			back: "das Papier",
		},
		{
			front: "the fork",
			back: "die Gabel",
		},
		{
			front: "the knife",
			back: "das Messer",
		},
	],
});
