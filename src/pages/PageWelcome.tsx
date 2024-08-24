import { State, useStoreActions, useStoreState } from "easy-peasy"
import { Flashcard } from "../types";
import { StoreModel } from "../store";

export const PageWelcome = () => {
	const flashcards: Flashcard[] = useStoreState((state: State<StoreModel>) => state.flashcards);
	const deleteFlashcard = useStoreActions((actions: { deleteFlashcard: (state: State<StoreModel>, payload: number) => void }) => actions.deleteFlashcard);

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li key={index}>{flashcard.front} - {flashcard.back} <button onClick={() => deleteFlashcard(state, flashcard.id)}>delete</button></li>
					)
				})}
			</ul>
		</>
	)
}