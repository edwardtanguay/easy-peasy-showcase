import { State, useStoreState } from "easy-peasy"
import { Flashcard } from "../types";
import { StoreModel } from "../store";

export const PageWelcome = () => {
	const flashcards: Flashcard[] = useStoreState((state: State<StoreModel>) => state.flashcards);

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li key={index}>{flashcard.front} - {flashcard.back}</li>
					)
				})}
			</ul>
		</>
	)
}