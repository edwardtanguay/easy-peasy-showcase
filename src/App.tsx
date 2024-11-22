/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useTypedStoreActions } from "./store/easy-peasy-hooks"
import { useEffect } from "react";
import { Container } from "@mui/material";

function App() {
	const initalize = useTypedStoreActions((actions) => actions.mainModel.initialize);

	useEffect(() => {
		initalize();
	}, [])
	return (
		<Container className="bg-gray-400 rounded-lg w-full py-4 md:w-[60rem] mt-0 md:mt-6">
			<Header />
			<main className="py-4">
				<Outlet />
			</main>
		</Container>
	);
}

export default App;
