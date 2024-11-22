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
							<th className="dpId">dpodid</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Birthdate</th>
							<th>Department</th>
							<th>Is Active</th>
							<th>Years Experience</th>
						</tr>
					</thead>
					<tbody>
						{employees.map(employee => {
							return (
								<tr>
									<td className="dpId">{employee.dpodId}</td>
									<td className="dpLine">James</td>
									<td className="dpLine">Smith</td>
									<td className="dpDate">2024-11-22</td>
									<td className="dpLine">Sales</td>
									<td className="dpYesNo">Yes</td>
									<td className="dpWholeNumber">12</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</Example>
		</section>
	)
}