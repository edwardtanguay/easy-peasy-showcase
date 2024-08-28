import { Action, action } from "easy-peasy";

export interface GeneralModel {
	isOnline: boolean;

	toggleIsOnline: Action<this>;
}

export const generalModel: GeneralModel = {
	isOnline: false,
	toggleIsOnline: action((state) => {
		state.isOnline = !state.isOnline;
	}),
};
