import { useStoreState } from "easy-peasy"
import { Flashcard } from "../types";
import { StoreModel } from "../store";

export const PageWelcome = () => {
	const flashcards = useStoreState<StoreModel, Flashcard[]>((state) => state.flashcards);
	// const deleteFlashcard = useStoreActions<StoreModel, (id: number) => void>;

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li key={index}>{flashcard.front} - {flashcard.back}</li>
						//  <button onClick={() => deleteFlashcard(state, flashcard.id)}>delete</button></li>
					)
				})}
			</ul>
		</>
	)
}