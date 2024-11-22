import { useTypedStoreState } from "../store/hooks";
import { Example } from "./Example"

export const EmployeesArea = () => {
	const { employees } = useTypedStoreState((state) => state.employeeModel);

	return (
			<Example title="employee objects loaded via API with full CRUD functionality">
				<p>{employees.length} employees</p>
			</Example>
	)
}