import { useTypedStoreActions, useTypedStoreState } from "../store/hooks";

export const PageChangeState = () => {
	const { testMessage, testUser } = useTypedStoreState((state) => state.settingsModel);
	const { setTestMessage, setTestUser } = useTypedStoreActions((actions) => actions.settingsModel);

	const handleChangeMessage = () => {
		setTestMessage('CHANGED MESSAGE')
	}
	const handleChangeTestUser = () => {
		setTestUser({ firstName: 'CHANGED FIRST NAME', age: 999 });
	}

	return (
		<>
			<p className="mt-3">test message: {testMessage}</p>
			<div className="mt-3"><button onClick={handleChangeMessage}>change message</button></div>
			<p className="mt-3">user: {testUser.firstName} is {testUser.age}</p>
			<div className="mt-3"><button onClick={handleChangeTestUser}>change message</button></div>
		</>
	)
}