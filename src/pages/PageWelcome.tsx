import { useStoreState, useStoreActions } from "../store/hooks"
import { FaRegTrashCan } from "react-icons/fa6";

export const PageWelcome = () => {

	const { title, flashcards } = useStoreState((state) => state.flashcardModel);
	const { setTitle, deleteFlashcard } = useStoreActions((actions) => actions.flashcardModel);

	const handleChangeTitle = () => {
		setTitle("new title");
	}

	return (
		<>
			<h1>{title}</h1>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li>
							<div className="mt-2 flex gap-2" key={index}>{flashcard.front} - {flashcard.back} <FaRegTrashCan className="mt-1 hover:text-red-800 cursor-pointer" onClick={() => deleteFlashcard(flashcard.id)} /></div>
						</li>
					)
				})}
			</ul>

			<section className="mt-3">
				<button onClick={handleChangeTitle}>change title</button>
			</section>
		</>
	)
}