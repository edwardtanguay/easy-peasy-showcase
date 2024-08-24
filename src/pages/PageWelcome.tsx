import { useStoreState, useStoreActions } from "../hooks";
// import { Flashcard } from "../types";
// import { StoreModel } from "../store";

export const PageWelcome = () => {

	const flashcards = useStoreState((state) => state.flashcards);
	// const flashcards = useStoreState<StoreModel, Flashcard[]>((state) => state.flashcards);
	const deleteFlashcard = useStoreActions((actions) => actions.deleteFlashcard);
	// const deleteFlashcard = useStoreActions<StoreModel, (id: number) => void>;

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li key={index}>{flashcard.front} - {flashcard.back} <button onClick={() => deleteFlashcard(flashcard.id)}>delete</button></li>
					)
				})}
			</ul>
		</>
	)
}