import { Action, action } from "easy-peasy";

const testMessageInitialState = ["original001", "original002"];

export interface ShowcaseModel {
	// state
	testMessages: string[];
	testMessagesSearchText: string;

	// actions
	addTestMessage: Action<this, string>;
	deleteTestMessage: Action<this>;
	resetTestMessages: Action<this>;
	handleChangeTestMessageSearchText: Action<this, string>;

	// thunk
}

export const showcaseModel: ShowcaseModel = {
	// state
	testMessages: testMessageInitialState,
	testMessagesSearchText: "",

	// actions
	addTestMessage: action((state, testMessage) => {
		state.testMessages.push(testMessage);
	}),
	deleteTestMessage: action((state) => {
		state.testMessages.pop();
	}),
	resetTestMessages: action((state) => {
		state.testMessages = testMessageInitialState;
	}),
	handleChangeTestMessageSearchText: action((state, searchText) => {
		state.testMessages.push(searchText);
	}),

	// thunks
};
