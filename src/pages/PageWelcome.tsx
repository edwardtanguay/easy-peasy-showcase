import { useStoreState, useStoreActions } from "../hooks";

export const PageWelcome = () => {

	const flashcards = useStoreState((state) => state.flashcards);
	const deleteFlashcard = useStoreActions((actions) => actions.deleteFlashcard);

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li className="mt-2" key={index}>{flashcard.front} - {flashcard.back} <button onClick={() => deleteFlashcard(flashcard.id)}>delete</button></li>
					)
				})}
			</ul>
		</>
	)
}