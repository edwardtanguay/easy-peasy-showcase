import { Example } from "../components/Example"
import { useTypedStoreActions, useTypedStoreState } from "../store/hooks";

export const PageEasyPeasy = () => {
	const { testMessagesSearchText, filteredTestMessages } = useTypedStoreState((state) => state.showcaseModel);
	const { addTestMessage, deleteTestMessage, resetTestMessages, handleChangeTestMessageSearchText } = useTypedStoreActions((actions) => actions.showcaseModel);

	return (
		<>
			<h2 className="text-2xl">Easy Peasy Showcase</h2>
			<p className="mt-2 mb-3">This page shows examples of using Easy-Peasy Redux in various ways.</p>
			<Example title="array of strings">
				<form>
					<div className="flex gap-3">
						<button type="button" className="mb-3 normalButton" onClick={() => addTestMessage()}>add</button>
						<button type="button" className="mb-3 normalButton" onClick={() => deleteTestMessage()}>delete</button>
						<button type="button" className="mb-3 normalButton" onClick={() => resetTestMessages()}>reset</button>
					</div>
					<div className="mb-3">
						<input placeholder="search" onChange={(e) => handleChangeTestMessageSearchText(e.target.value)} value={testMessagesSearchText} />
					</div>
				</form>
				<p className="mb-2">There are {filteredTestMessages.length} test messages.</p>
				<ul className="list-disc ml-6">
					{filteredTestMessages.map((filteredTestMessage, index) => {
						return (
							<li key={index}>{filteredTestMessage}</li>
						)
					})}
				</ul>
			</Example>
		</>
	)
}