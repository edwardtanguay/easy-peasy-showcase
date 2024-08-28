import { Action, action } from "easy-peasy";

export interface SettingsModel {
	showInfoPage: boolean;

	toggleIsOnline: Action<this>;
}

export const settingsModel: SettingsModel = {
	showInfoPage: false,
	toggleIsOnline: action((state) => {
		state.showInfoPage = !state.showInfoPage;
	}),
};
