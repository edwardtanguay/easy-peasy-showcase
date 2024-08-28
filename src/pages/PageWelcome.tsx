/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useStoreState, useStoreActions } from "../store/hooks"
import { FaRegTrashCan } from "react-icons/fa6";

export const PageWelcome = () => {

	const { title, flashcards } = useStoreState((state) => state.flashcardModel);
	const { setTitle, deleteFlashcardThunk } = useStoreActions((actions) => actions.flashcardModel);

	const handleChangeTitle = () => {
		setTitle("new title");
	}

	const deleteTheFlashcard = async (flashcardId: number) => {
		console.log('deleting ' + flashcardId);
		try {
			const response = await axios.delete(
				`http://localhost:3760/flashcards/${flashcardId}`
			);
			if (response.status === 200) {
				console.log(`database deletion of id=${flashcardId} was successful`);
			}
		} catch (e: any) {
			console.log(`ERROR: ${e.message}`);
		}
	}

	return (
		<>
			<h1>{title}</h1>
			<p>There are {flashcards.length} flashcards.</p>
			<ul className="list-disc ml-6">
				{flashcards.map((flashcard, index) => {
					return (
						<li key={index}>
							<div className="mt-2 flex gap-2">{flashcard.front} - {flashcard.back} <FaRegTrashCan className="mt-1 hover:text-red-800 cursor-pointer" onClick={() => deleteFlashcardThunk(flashcard.id)} />
								<span onClick={() => { deleteTheFlashcard(flashcard.id) }}>DELETE</span>
							</div>
						</li>
					)
				})}
			</ul>

			<section className="mt-3">

				<button type="button" onClick={handleChangeTitle}>change title</button>
			</section>
		</>
	)
}