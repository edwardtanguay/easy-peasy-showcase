import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Page404 } from "./pages/Page404.tsx";
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store.ts';
import { PageFlashcards } from "./pages/PageFlashcards.tsx";
import { PageGeneral } from "./pages/PageGeneral.tsx";
import { PageLearniverse } from "./pages/PageLearniverse.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/general",
				element: <PageGeneral />,
			},
			{
				path: "flashcards",
				element: <PageFlashcards />,
			},
			{
				path: "learniverse",
				element: <PageLearniverse />,
			},
			{
				path: "/",
				element: <Navigate to="/general" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StoreProvider store={store}>
		<RouterProvider router={router} />
	</StoreProvider>
);
