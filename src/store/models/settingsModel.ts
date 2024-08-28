import { Action, action } from "easy-peasy";

export interface SettingsModel {
	isOnline: boolean;

	toggleIsOnline: Action<this>;
}

export const settingsModel: SettingsModel = {
	isOnline: false,
	toggleIsOnline: action((state) => {
		state.isOnline = !state.isOnline;
	}),
};
