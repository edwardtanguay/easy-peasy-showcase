import { useTypedStoreState } from "../../store/hooks";
import { Example } from "../Example"
import { WaitSpinner } from "../WaitSpinner";
import './styles.scss'

export const EmployeesArea = () => {
	const { employees, loadingStatus } = useTypedStoreState((state) => state.employeeModel);

	return (
		<section className="pageEasyPeasy">
			<Example title="employee objects loaded via API with full CRUD functionality">
				{loadingStatus !== "finished" && (
					<WaitSpinner />
				)}
				<table className={`employees ${loadingStatus === 'finished' ? 'fadeIn' : 'fadeOut'}`}>
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
									<td className="dpLine">{employee.firstName}</td>
									<td className="dpLine">{employee.lastName}</td>
									<td className="dpDate">{employee.dateOfBirth}</td>
									<td className="dpLine">{employee.department}</td>
									<td className="dpYesNo">{employee.isActive ? 'yes' : 'no'}</td>
									<td className="dpWholeNumber">{employee.yearsOfExperience}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</Example>
		</section>
	)
}