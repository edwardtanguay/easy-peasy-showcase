import { useStoreState, useStoreActions } from "../store/hooks"

export const PageGeneral = () => {

	const { title } = useStoreState((state) => state.generalModel);
	const { setTitle } = useStoreActions((actions) => actions.generalModel);

	const handleChangeTitle = () => {
		setTitle("new title");
	}

	return (
		<>
			<h1>{title}</h1>

			<section className="mt-3">

				<button onClick={handleChangeTitle}>change title</button>
			</section>
		</>
	)
}