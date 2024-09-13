export const PageWelcome = () => {
	return (
		<section className="page pageWelcome">
			<h2>Welcome</h2>
			<p>This site is a showcase for new tech I am learning:</p>
			<ul className="list-disc ml-6">
				<li><a href="https://easy-peasy.vercel.app/" className="underline">easy-peasy</a> - state management - found throughout the application, e.g. the Settings and Flashcards pages</li>
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