/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useStoreActions } from "./store/hooks"
import { useEffect } from "react";


function App() {

	const { loadFrontendFlashcardsThunk: loadAllFlashcardsThunk } = useStoreActions((actions) => actions.flashcardModel);

	useEffect(() => {
		loadAllFlashcardsThunk()
	}, [])
	return (
		<main className="bg-gray-400 rounded-lg p-4 w-full md:w-[60rem] mt-0 md:mt-6">
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</main>
	);
}

export default App;
