import { useTypedStoreActions, useTypedStoreState } from "../store/easy-peasy-hooks";

export const PageChangeState = () => {
	const { testMessage, testUser } = useTypedStoreState((state) => state.settingsModel);
	const { setTestMessage, setTestUser, setTestMessageWithThunkGetState, setTestMessageWithThunkAction } = useTypedStoreActions((actions) => actions.settingsModel);

	const handleChangeMessage = () => {
		setTestMessage('CHANGED MESSAGE')
	}
	const handleChangeTestUser = () => {
		setTestUser({ firstName: 'CHANGED FIRST NAME', age: 999 });
	}
	const handleChangeMessageWithThunkGetState = () => {
		setTestMessageWithThunkGetState()
	}

	const handleChangeMessageWithThunkAction = () => {
		setTestMessageWithThunkAction()
	}

	return (
		<>
			<p className="mt-3">test message: {testMessage}</p>
			<div className="mt-3"><button onClick={handleChangeMessage}>change message</button></div>
			<p className="mt-3">user: {testUser.firstName} is {testUser.age}</p>
			<div className="mt-3"><button onClick={handleChangeTestUser}>change message</button></div>
			<div className="mt-3"><button onClick={handleChangeMessageWithThunkGetState}>change message with getState() in thunk (lags behind)</button></div>
			<div className="mt-3"><button onClick={handleChangeMessageWithThunkAction}>change message with action</button></div>
		</>
	)
}