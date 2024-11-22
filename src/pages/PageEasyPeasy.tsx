import { Example } from "../components/Example"
import { useTypedStoreActions, useTypedStoreState } from "../store/hooks";

export const PageEasyPeasy = () => {
	const { testMessages, testMessagesSearchText } = useTypedStoreState((state) => state.showcaseModel);
	const { addTestMessage, deleteTestMessage, resetTestMessages, handleChangeTestMessageSearchText } = useTypedStoreActions((actions) => actions.showcaseModel);

	return (
		<>
			<h2 className="text-2xl">Easy Peasy Showcase</h2>
			<p className="mt-2 mb-3">This page shows examples of using Easy-Peasy Redux in various ways.</p>
			<Example title="array of strings">
				<form>
					<div className="flex gap-3">
						<button className="mb-3" onClick={() => addTestMessage('nnn' + Math.random())}>add test message</button>
						<button className="mb-3" onClick={() => deleteTestMessage()}>add test message</button>
						<button className="mb-3" onClick={() => resetTestMessages()}>reset</button>
					</div>
					<div className="mb-3">
						<input onChange={(e) => handleChangeTestMessageSearchText(e.target.value)} value={testMessagesSearchText} />
					</div>
				</form>
				<p className="mb-2">There are {testMessages.length} test messages.</p>
				<ul className="list-disc ml-6">
					{testMessages.map((testMessage, index) => {
						return (
							<li key={index}>{testMessage}</li>
						)
					})}
				</ul>
			</Example>
		</>
	)
}