import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const PageWelcome = () => {
	return (
		<section className="page pageWelcome">
			<p className="mb-1">This site is a showcase for new tech I am learning:</p>
			<ul className="list-disc ml-6">
				<li><span className="font-semibold">notes</span> are here <FaArrowRightLong className="inline-block" /> <a href="https://tanguay-eu.vercel.app/forays/321" target="_blank" className="underline">https://tanguay-eu.vercel.app/forays/321</a></li>
				<li><span className="font-semibold">repo</span> is here <FaArrowRightLong className="inline-block" />  <a href="https://github.com/edwardtanguay/newtech2024" target="_blank" className="underline">https://github.com/edwardtanguay/newtech2024</a></li>
				<li><span className="font-semibold">online site</span> is here <FaArrowRightLong className="inline-block" /> <a href="https://newtech2024.vercel.app" target="_blank" className="underline">https://newtech2024.vercel.app</a></li>
			</ul>

			<p className="mt-4 text-orange-900">The goal of this project is to learn these technologies in a real-world way by getting them all to work together on this site, with responsive UX, etc.</p>

			<p className="mb-1 mt-4">The technological line-up:</p>
			<ul className="list-disc ml-6">
				<li><b>easy-peasy</b> - <i>Redux-like state management without the boilerplate, created 2019</i>
					<ul className="list-disc ml-6">
						<li>see pages <NavLink className="underline" to='/settings'>Settings</NavLink> and <NavLink className="underline" to='/flashcards'>Flashcards</NavLink> (flashcard site only works offline since it runs on a json-server backend API)</li>
						<li>see examples of thunks</li>
						<li>also: store is split up into two models</li>
						<li><a target="_blank" href="https://easy-peasy.vercel.app/" className="underline">easy-peasy documentation</a></li>
						<li>TODO: persist()</li>
					</ul>

				</li>
			</ul>

			<ul className="list-disc ml-6 mt-3">
				<li><b>React Flow</b> - <i>a React library for building node-based diagrams and flowcharts, created 2019</i>
					<ul className="list-disc ml-6">
						<li>currently external here: <a href="https://showcase-react-flow.vercel.app" target="_blank" className="underline">https://showcase-react-flow.vercel.app</a></li>
					</ul>
				</li>
			</ul>


			<ul className="list-disc ml-6 mt-3">
				<li><b>MUI</b> - <i>Material-UI, React component library from Google, created 2014</i>
					<ul className="list-disc ml-6">
						<li>see page <NavLink className="underline" to='/mui'>MUI</NavLink></li>
					</ul>
				</li>
			</ul>

			<ul className="list-disc ml-6 mt-3">
				<li><b>ArangoDB</b> - <i>open-source NoSQL database that supports key-value, document, and graph data models, created 2011</i>
					<ul className="list-disc ml-6">
						<li>currently have it installed on Windows, next step use with Go: <a href="https://tanguay-eu.vercel.app/forays/319" target="_blank" className="underline">https://tanguay-eu.vercel.app/forays/319</a></li>
					</ul>
				</li>
			</ul>

			<ul className="list-disc ml-6 mt-3">
				<li><b>GraphQL</b> - <i>query language for APIs that allows clients to request exactly the data they need, released by Facebook 2015</i>
					<ul className="list-disc ml-6">
						<li>demonstration of GraphQL vs. REST : <a href="https://tanguay-eu.vercel.app/howtos/602" target="_blank" className="underline">https://tanguay-eu.vercel.app/howtos/602</a></li>
					</ul>
				</li>
			</ul>

			<ul className="list-disc ml-6 mt-3">
				<li><b>Go</b> - <i>statically typed, compiled programming language and designed for simplicity, efficiency, and scalability, released by Google in 2009</i>
					<ul className="list-disc ml-6">
						<li>Go API frontend/backend with MongoDB database running on a Hetzner cloud machine: <a href="https://showcase-go-use-api.vercel.app" target="_blank" className="underline">https://showcase-go-use-api.vercel.app</a></li>
					</ul>
				</li>
			</ul>

			<p className="mt-4 text-orange-900">More notes, links and technologies which will eventually be merged into this project: <a href="https://tanguay-eu.vercel.app" target="_blank" className="underline">https://tanguay-eu.vercel.app</a> </p>

		</section>
	)
}