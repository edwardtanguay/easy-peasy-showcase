import { useTypedStoreState } from "../../store/easy-peasy-hooks";
import { Example } from "../Example"
import { WaitSpinner } from "../WaitSpinner";
import './styles.scss'

export const EmployeesArea = () => {
	const {filteredEmployees, loadingStatus } = useTypedStoreState((state) => state.employeeModel);

	return (
		<section className="pageEasyPeasy">
			<Example title="employee objects via API with full CRUD functionality">
				{(loadingStatus === "readyToLoad" || loadingStatus === "loading") && (
					<WaitSpinner />
				)}
				{loadingStatus === "error" && (
					<p className="text-red-800 italic">Sorry, the data couldn't be loaded, please contact the website administrator.</p>
				)}
				<table className={`employees ${loadingStatus === 'finished' ? 'fadeIn' : 'fadeOut'}`}>
					{loadingStatus === "finished" && (
						<>
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
								{filteredEmployees.map(employee => {
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
						</>
					)}
				</table>
			</Example>
		</section>
	)
}