import { WaitSpinner } from "../components/WaitSpinner";
import { useStoreState, useStoreActions } from "../store/hooks"
import { FaRegTrashCan } from "react-icons/fa6";

export const PageFlashcards = () => {

	const { flashcards, flashcardsLoadingStatus: flashcardLoadingStatus } = useStoreState((state) => state.flashcardModel);
	const { deleteFlashcardThunk } = useStoreActions((actions) => actions.flashcardModel);

	return (
		<>
			{flashcardLoadingStatus === "inProcess" ? (
				<WaitSpinner />
			) : (
				<>
					<p>There are {flashcards.length} flashcards:</p>
					<ul className="list-disc ml-6">
						{flashcards.map((flashcard, index) => {
							return (
								<li key={index} className={flashcard.deletingStatus === "inProcess" ? 'opacity-30' : ''}>
									<div className="mt-2 flex gap-2">
										{flashcard.dataItem.front} - {flashcard.dataItem.back}
										{flashcard.deletingStatus === "inProcess" ? (
											<span className="mt-1"><WaitSpinner fontSize="1rem" margin="0" /></span>
										) : (
											<span className="mt-1 hover:text-red-800 cursor-pointer"><FaRegTrashCan onClick={() => deleteFlashcardThunk(flashcard)} /></span>
										)}
									</div>
								</li>
							)
						})}
					</ul>
				</>
			)}
		</>
	)
}
