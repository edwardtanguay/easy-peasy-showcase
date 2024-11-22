import { Employee, RawEmployee } from "../types";

export const convertRawEmployeesToEmployees = (rawEmployees: RawEmployee[]) => {
	const employees: Employee[] = [];
	for (const rawEmployee of rawEmployees) {
		const employee: Employee = {
			...rawEmployee,
			bulkSearchText:
				rawEmployee.firstName +
				" | " +
				rawEmployee.lastName +
				" | " +
				rawEmployee.dateOfBirth +
				" | " +
				rawEmployee.department,
		};
		employees.push(employee);
	}
	return employees;
};
