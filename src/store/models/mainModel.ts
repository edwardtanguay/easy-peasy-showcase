import { Thunk, thunk } from "easy-peasy";
import { StoreModel } from "../store";

export interface MainModel {
	// state

	// actions

	// thunks
	initialize: Thunk<this, void, void, StoreModel>;
}

export const mainModel: MainModel = {
	// state

	// actions

	// thunks
	initialize: thunk((_, __, { getStoreActions }) => {
		getStoreActions().employeeModel.loadEmployeesThunk();
	}),
};
