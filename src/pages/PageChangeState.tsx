import { useTypedStoreActions, useTypedStoreState } from "../store/hooks";

export const PageChangeState = () => {
	const { testMessage } = useTypedStoreState((state) => state.settingsModel);
	const { setTestMessage } = useTypedStoreActions((actions) => actions.settingsModel);

	const handleChangeMessage = () => {
		setTestMessage('CHANGED MESSAGE')
	}

	return (
		<>
			<p>test message: {testMessage}</p>
			<div className="mt-3"><button onClick={handleChangeMessage}>change message</button></div>
		</>
	)
}