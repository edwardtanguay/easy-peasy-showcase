/* eslint-disable @typescript-eslint/no-explicit-any */
import { action, Action, computed, Computed, Thunk, thunk } from "easy-peasy";
import { Employee, LoadingStatus, RawEmployee, SortField } from "../../types";
import * as config from "../../config";
import axios from "axios";
import { convertRawEmployeesToEmployees } from "../dataManager";
import { SortDirection } from "@mui/material";

export interface EmployeeModel {
	// state
	employees: Employee[];
	loadingStatus: LoadingStatus;
	searchText: string;
	isSorted: boolean;
	sortField: SortField;
	sortDirection: SortDirection;
	showIds: boolean;

	// computed state
	filteredEmployees: Computed<this, Employee[]>;

	// actions
	_setEmployees: Action<this, Employee[]>;
	_setLoadingStatus: Action<this, LoadingStatus>;
	handleSearchTextChange: Action<this, string>;
	handleChangeSort: Action<this, SortField>;
	handleCancelSearch: Action<this>;
	handleToggleShowIds: Action<this>;

	// thunk
	loadEmployeesThunk: Thunk<this>;
}

export const employeeModel: EmployeeModel = {
	// state
	employees: [],
	loadingStatus: "readyToLoad",
	searchText: "",
	isSorted: false,
	sortField: "firstName",
	sortDirection: "asc",
	showIds: false,

	// computed state
	filteredEmployees: computed((state) => {
		let _filteredEmployees: Employee[] = [];

		//filter
		if (state.searchText.trim() === "") {
			_filteredEmployees = state.employees;
		} else {
			_filteredEmployees = state.employees.filter((m) =>
				m.bulkSearchText
					.toLowerCase()
					.includes(state.searchText.toLowerCase())
			);
		}

		//sort
		if (state.isSorted) {
			const sortField = state.sortField as keyof Employee;
			if (state.sortDirection === "asc") {
				_filteredEmployees.sort((a, b) =>
					a[sortField] > b[sortField] ? 1 : -1
				);
			} else {
				_filteredEmployees.sort((a, b) =>
					a[sortField] < b[sortField] ? 1 : -1
				);
			}
		}

		return _filteredEmployees;
	}),

	// actions
	_setEmployees: action((state, employees) => {
		state.employees = employees;
	}),
	_setLoadingStatus: action((state, loadingStatus) => {
		state.loadingStatus = loadingStatus;
	}),
	handleSearchTextChange: action((state, searchText) => {
		state.searchText = searchText;
	}),
	handleChangeSort: action((state, sortField) => {
		if (state.sortField === sortField) {
			state.sortDirection =
				state.sortDirection === "asc" ? "desc" : "asc";
		} else {
			state.sortField = sortField;
			state.sortDirection = "asc";
		}

		// override if it's the first click
		if (!state.isSorted) {
			state.sortDirection = "asc";
		}
		state.isSorted = true;
	}),
	handleCancelSearch: action((state) => {
		state.searchText = "";
	}),
	handleToggleShowIds: action((state) => {
		state.showIds = !state.showIds;
	}),

	// thunks
	loadEmployeesThunk: thunk(async (actions) => {
		setTimeout(async () => {
			try {
				actions._setLoadingStatus("loading");
				const response = await axios.get(
					`http://localhost:3760/employees`
				);
				actions._setLoadingStatus("finished");
				if (response.status === 200) {
					const rawEmployees = response.data as RawEmployee[];
					const employees =
						convertRawEmployeesToEmployees(rawEmployees);
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
