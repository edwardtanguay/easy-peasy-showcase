import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { Page404 } from "./pages/Page404.tsx";
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store.ts';
import { PageFlashcards } from "./pages/PageFlashcards.tsx";
import { PageLearniverse } from "./pages/PageLearniverse.tsx";
import { PageSettings } from "./pages/PageSettings.tsx";
import { PageInfo } from "./pages/PageInfo.tsx";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageMui } from "./pages/PageMui.tsx";
import { createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PageAbout } from "./pages/PageAbout.tsx";
import { PageResponsive } from "./pages/PageResponsive.tsx";
import { PageStateTest } from "./pages/pageStateTest.tsx";
import { PagePropTest } from "./pages/PagePropTest.tsx";
import { PageGitHubActions } from "./pages/PageGitHubActions.tsx";
import { PageChangeState } from "./pages/PageChangeState.tsx";
import { PageHooks } from "./pages/PageHooks.tsx";
import { PageEasyPeasy } from "./pages/PageEasyPeasy.tsx";

const theme = createTheme({
	palette: {
		primary: {
			main: '#2956a3'
		}
	}
})

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "/settings",
				element: <PageSettings />,
			},
			{
				path: "flashcards",
				element: <PageFlashcards />,
			},
			{
				path: "mui",
				element: <PageMui />,
			},
			{
				path: "learniverse",
				element: <PageLearniverse />,
			},
			{
				path: "responsive",
				element: <PageResponsive />
			},
			{
				path: "stateTest",
				element: <PageStateTest />
			},
			{
				path: "prop-test",
				element: <PagePropTest />
			},
			{
				path: "gitHubActions",
				element: <PageGitHubActions />
			},
			{
				path: "changeState",
				element: <PageChangeState />
			},
			{
				path: "hooks",
				element: <PageHooks/>
			},
			{
				path: "easyPeasy",
				element: <PageEasyPeasy/>
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "info",
				element: <PageInfo />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StoreProvider store={store}>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StoreProvider>
);
