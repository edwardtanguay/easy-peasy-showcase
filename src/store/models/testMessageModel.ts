import { Action, action, computed, Computed } from "easy-peasy";

const testMessageInitialState = ["original001", "original002"];

export interface TestMessageModel {
	// state
	testMessages: string[];
	testMessagesSearchText: string;

	// computed state
	filteredTestMessages: Computed<this, string[]>;

	// actions
	addTestMessage: Action<this>;
	deleteTestMessage: Action<this>;
	resetTestMessages: Action<this>;
	handleChangeTestMessageSearchText: Action<this, string>;

	// thunk
}

export const testMessageModel: TestMessageModel = {
	// state
	testMessages: testMessageInitialState,
	testMessagesSearchText: "",

	// computed state
	filteredTestMessages: computed((state) => state.testMessages.filter(m => m.includes(state.testMessagesSearchText))),

	// actions
	addTestMessage: action((state) => {
		const testMessage = String(Math.floor(Math.random() * 1000) + 1);
		state.testMessages.push(testMessage);
	}),
	deleteTestMessage: action((state) => {
		state.testMessages.pop();
	}),
	resetTestMessages: action((state) => {
		state.testMessages = testMessageInitialState;
	}),
	handleChangeTestMessageSearchText: action((state, newSearchText) => {
		state.testMessagesSearchText = newSearchText;

	}),

	// thunks
};
