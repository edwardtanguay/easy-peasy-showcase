import { State, useStoreState } from "easy-peasy"
import { Flashcard, StoreModel } from "../types";

export const PageWelcome = () => {
	const flashcards: Flashcard[] = useStoreState((state: State<StoreModel>) => state.flashcards);

	return (
		<p>There are {flashcards.length} flashcards.</p>
	)
}