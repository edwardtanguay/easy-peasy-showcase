import { NavLink } from "react-router-dom";

export const PageWelcome = () => {
	return (
		<section className="page pageWelcome">
			<p className="mb-3">This site is a showcase for new tech I am learning:</p>
			<ul className="list-disc ml-6">
				<li><b>easy-peasy</b> - <i>Redux-like state management simplified</i>
					<ul className="list-disc ml-6">
						<li>see pages <NavLink className="underline" to='/settings'>Settings</NavLink> and <NavLink className="underline" to='/flashcards'>Flashcards</NavLink></li>
						<li>see examples of thunks</li>
						<li>also: store is split up into two models</li>
						<li><a target="_blank" href="https://easy-peasy.vercel.app/" className="underline">easy-peasy documentation</a></li>
					</ul>

				</li>
			</ul>
			<h2>Todo</h2>
			<ul className="list-disc ml-6">
				<li>MUI - make burger menu for responsive view</li>
				<li>connect the React Flow site: https://showcase-react-flow.vercel.app</li>
				<li>easy-peasy persist()</li>
			</ul>
		</section>
	)
}