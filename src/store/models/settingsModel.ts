import { Action, action } from "easy-peasy";
import { TestUser } from "../../types";

export interface SettingsModel {
	showInfoPage: boolean;
	testMessage: string;
	testUser: TestUser;

	toggleIsOnline: Action<this>;
	setTestMessage: Action<this, string>;
	setTestUser: Action<this, TestUser>;
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
};
