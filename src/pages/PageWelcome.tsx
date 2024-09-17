import { NavLink } from "react-router-dom";

export const PageWelcome = () => {
	return (
		<section className="page pageWelcome">
			<p className="mb-1">This site is a showcase for new tech I am learning:</p>
			<ul className="list-disc ml-6">
				<li>notes are here: <a href="https://tanguay-eu.vercel.app/forays/321" target="_blank" className="underline">https://tanguay-eu.vercel.app/forays/321</a></li>
				<li>repo is here: <a href="https://github.com/edwardtanguay/newtech2024" target="_blank" className="underline">https://github.com/edwardtanguay/newtech2024</a></li>
			</ul>

			<p className="mb-1 mt-6">New tech:</p>
			<ul className="list-disc ml-6">
				<li><b>easy-peasy</b> - <i>Redux-like state management without the boilerplate, created 2019</i>
					<ul className="list-disc ml-6">
						<li>see pages <NavLink className="underline" to='/settings'>Settings</NavLink> and <NavLink className="underline" to='/flashcards'>Flashcards</NavLink> (flashcard site only works offline since it runs on json-server)</li>
						<li>see examples of thunks</li>
						<li>also: store is split up into two models</li>
						<li><a target="_blank" href="https://easy-peasy.vercel.app/" className="underline">easy-peasy documentation</a></li>
						<li>TODO: persist()</li>
					</ul>

				</li>
			</ul>

			<ul className="list-disc ml-6">
				<li><b>MUI</b> - <i>Material-UI, React component library from Google, created 2014</i>
					<ul className="list-disc ml-6">
						<li>see page <NavLink className="underline" to='/mui'>MUI</NavLink></li>
					</ul>
				</li>
			</ul>

			<h2>Todo</h2>
			<ul className="list-disc ml-6">
				<li>MUI - make burger menu for responsive view</li>
				<li>connect the React Flow site: https://showcase-react-flow.vercel.app</li>
			</ul>
		</section>
	)
}