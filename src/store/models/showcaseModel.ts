import { Action, action } from "easy-peasy";

export interface ShowcaseModel {
	// state
	testMessages: string[];

	// actions
	addTestMessage: Action<this, string>;
	deleteTestMessage: Action<this>;

	// thunk
}

export const showcaseModel: ShowcaseModel = {
	// state
	testMessages: ["original001", "original002", "original003"],

	// actions
	addTestMessage: action((state, testMessage) => {
		state.testMessages.push(testMessage);
	}),
	deleteTestMessage: action((state) => {
		state.testMessages.pop();
	}),

	// thunks
};
