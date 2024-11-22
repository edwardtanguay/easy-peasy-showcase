/* eslint-disable @typescript-eslint/no-explicit-any */
import { action, Action, Thunk, thunk } from "easy-peasy";
import { Employee } from "../../types";
import * as config from "../../config";
import axios from "axios";

export interface EmployeeModel {
	// state
	employees: Employee[];

	// computed state

	// actions
	_setEmployees: Action<this, Employee[]>;

	// thunk
	loadEmployees: Thunk<this>;
}

export const employeeModel: EmployeeModel = {
	// state
	employees: [],

	// computed state

	// actions
	_setEmployees: action((store, employees) => {
		store.employees = employees;
	}),

	// thunks
	loadEmployees: thunk(async (actions) => {
		setTimeout(async () => {
			try {
				const response = await axios.get(
					`http://localhost:3760/employees`
				);
				if (response.status === 200) {
					const employees = response.data as Employee[];
					actions._setEmployees(employees);
				}
			} catch (e: any) {
				// TODO: record error
			}
		}, config.uxLoadingSeconds() * 1000);
	}),
};
