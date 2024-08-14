import { useStoreState } from "easy-peasy"

export const PageWelcome = () => {
	// const { flashcards } = useStoreState((state) => state.flashcards);
	const flashcards = []

	return (
		<p>There are {flashcards.length} flashcards.</p>
	)
}