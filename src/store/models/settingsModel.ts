import { Action, action } from "easy-peasy";

export interface SettingsModel {
	showInfoPage: boolean;
	testMessage: string;

	toggleIsOnline: Action<this>;
	setTestMessage: Action<this, string>;
}

export const settingsModel: SettingsModel = {
	// state
	showInfoPage: false,
	testMessage: 'ORIGINAL MESSAGE',
	

	// actions
	toggleIsOnline: action((state) => {
		state.showInfoPage = !state.showInfoPage;
	}),
	setTestMessage: action((state, message) => {
		state.testMessage = message;
	}),
};
