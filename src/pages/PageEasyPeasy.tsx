import { Example } from "../components/Example"
import { useTypedStoreState } from "../store/hooks";

export const PageEasyPeasy = () => {
	const { testMessages } = useTypedStoreState((state) => state.showcaseModel);
	
	return (
		<>
		<h2 className="text-2xl">Easy Peasy Showcase</h2>
		<p className="mt-2 mb-3">This page is shows examples of using Easy-Peasy Redux in various ways.</p>
			<Example title="array of strings">
				<p>There are {testMessages.length} test messages.</p>
		</Example>
		</>
	)
}