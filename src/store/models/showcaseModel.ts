import { Action, action } from "easy-peasy";

const testMessageInitialState = ["original001", "original002"];

export interface ShowcaseModel {
	// state
	testMessages: string[];

	// actions
	addTestMessage: Action<this, string>;
	deleteTestMessage: Action<this>;
	resetTestMessages: Action<this>;

	// thunk
}

export const showcaseModel: ShowcaseModel = {
	// state
	testMessages: testMessageInitialState,

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

	// thunks
};
