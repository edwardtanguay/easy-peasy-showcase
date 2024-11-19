import { Action, action, thunk, Thunk } from "easy-peasy";
import { TestUser } from "../../types";

export interface SettingsModel {
	// state
	showInfoPage: boolean;
	testMessage: string;
	testUser: TestUser;

	// actions
	toggleIsOnline: Action<this>;
	setTestMessage: Action<this, string>;
	setTestUser: Action<this, TestUser>;

	// thunk
	setTestMessageWithThunk: Thunk<this>;
}

export const settingsModel: SettingsModel = {
	// state
	showInfoPage: false,
	testMessage: 'ORIGINAL MESSAGE',
	testUser: {
		firstName: 'James',
		age: 45
	},

	// actions
	toggleIsOnline: action((state) => {
		state.showInfoPage = !state.showInfoPage;
	}),
	setTestMessage: action((state, message) => {
		state.testMessage = message;
	}),
	setTestUser: action((state, testUser) => {
		state.testUser = testUser;
	}),

	// thunks
	setTestMessageWithThunk: thunk((_, __, { getState }) => {
		getState().testMessage = 'CHANGE WITH THUNK';
	})
};
