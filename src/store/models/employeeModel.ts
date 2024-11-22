/* eslint-disable @typescript-eslint/no-explicit-any */
import { action, Action, computed, Computed, Thunk, thunk } from "easy-peasy";
import { Employee, LoadingStatus } from "../../types";
import * as config from "../../config";
import axios from "axios";

export interface EmployeeModel {
	// state
	employees: Employee[];
	loadingStatus: LoadingStatus;
	searchText: string;

	// computed state
	filteredEmployees: Computed<this, Employee[]>;

	// actions
	_setEmployees: Action<this, Employee[]>;
	_setLoadingStatus: Action<this, LoadingStatus>;

	// thunk
	loadEmployees: Thunk<this>;
}

export const employeeModel: EmployeeModel = {
	// state
	employees: [],
	loadingStatus: "readyToLoad",
	searchText: "",

	// computed state
	filteredEmployees: computed((state) => {
		if (state.searchText.trim() === "") {
			return state.employees;
		} else {
			return state.employees.filter((m) =>
				m.lastName
					.toLowerCase()
					.includes(state.searchText.toLowerCase())
			);
		}
	}),

	// actions
	_setEmployees: action((store, employees) => {
		store.employees = employees;
	}),
	_setLoadingStatus: action((store, loadindStatus) => {
		store.loadingStatus = loadindStatus;
	}),

	// thunks
	loadEmployees: thunk(async (actions) => {
		setTimeout(async () => {
			try {
				actions._setLoadingStatus("loading");
				const response = await axios.get(
					`http://localhost:3760/employees`
				);
				actions._setLoadingStatus("finished");
				if (response.status === 200) {
					const employees = response.data as Employee[];
					actions._setEmployees(employees);
				} else {
					actions._setLoadingStatus("error");
				}
			} catch (e: any) {
				actions._setLoadingStatus("error");
			}
		}, config.uxLoadingSeconds() * 1000);
	}),
};
