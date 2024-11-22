import { useTypedStoreState } from "../../store/hooks";
import { Example } from "../Example"
import './styles.scss'

export const EmployeesArea = () => {
	const { employees } = useTypedStoreState((state) => state.employeeModel);

	return (
		<section className="pageEasyPeasy">
			<Example title="employee objects loaded via API with full CRUD functionality">
				<table className="employees">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Birthdate</th>
							<th>Department</th>
							<th>Is Active</th>
							<th>Years Experience</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>James</td>
							<td>Smith</td>
							<td>29</td>
							<td>Sales</td>
						</tr>
						<tr>
							<td>Maria</td>
							<td>Garcia</td>
							<td>34</td>
							<td>Marketing</td>
						</tr>
						<tr>
							<td>Robert</td>
							<td>Johnson</td>
							<td>41</td>
							<td>Development</td>
						</tr>
					</tbody>
				</table>
			</Example>
		</section>
	)
}