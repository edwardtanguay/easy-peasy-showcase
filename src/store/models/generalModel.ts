import { Action, action } from "easy-peasy";

export interface GeneralModel {
	title: string;

	// actions
	setTitle: Action<this, string>;
}

export const generalModel: GeneralModel = {
	title: "This is the title",
	setTitle: action((state, title) => {
		state.title = title;
	}),
};
