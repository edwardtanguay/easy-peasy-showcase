import { useTypedStoreActions, useTypedStoreState } from "../../store/easy-peasy-hooks";
import { WaitSpinner } from "../WaitSpinner";
import { MdOutlineCancel } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import './styles.scss'

export const EmployeesArea = () => {
	const { employees, filteredEmployees, loadingStatus, searchText, showIds } = useTypedStoreState((state) => state.employeeModel);
	const { handleSearchTextChange, handleChangeSort, handleCancelSearch, handleToggleShowIds } = useTypedStoreActions((actions) => actions.employeeModel);

	return (
		<section className="pageEasyPeasy w-fit p-6 rounded min-w-[50rem]">
			{(loadingStatus === "readyToLoad" || loadingStatus === "loading") && (
				<WaitSpinner />
			)}
			{loadingStatus === "error" && (
				<p className="italic">Sorry, the data couldn't be loaded, please contact the website administrator.</p>
			)}
			{loadingStatus === "finished" && (
				<>
					<form className="my-2 flex gap-1">
						<input placeholder="search" autoFocus={true} value={searchText} onChange={(e) => handleSearchTextChange(e.target.value)} className="bg-gray-300 rounded p-1 text-lg" />
						{searchText !== "" && (
							<div className="p-[.1rem]">
								<MdOutlineCancel className="text-slate-500 text-[2rem] hover:text-slate-600 cursor-pointer" onClick={() => handleCancelSearch()} />
							</div>
						)}
						<p className="ml-6 text-sm italic text-gray-900 w-full text-right -mt-1">
							{filteredEmployees.length === employees.length ? (
								<span>showing all {employees.length} records</span>
							) : (
								<span>showing {filteredEmployees.length} of {employees.length} records</span>
							)}
						</p>
					</form>
					{filteredEmployees.length === 0 && (
						<p className="mt-5 text-2xl text-gray-600 italic">No records match your search.</p>
					)}
					{filteredEmployees.length > 0 && (
						<table className={`employees ${loadingStatus === 'finished' ? 'fadeIn' : 'fadeOut'}`}>
							{loadingStatus === "finished" && (
								<>
									<thead>
										<tr>
											{showIds && (
												<th className="dpId">dpodid</th>
											)}
											<th onClick={() => handleChangeSort("firstName")}><span>First Name</span></th>
											<th onClick={() => handleChangeSort("lastName")}><span>Last Name</span></th>
											<th onClick={() => handleChangeSort("dateOfBirth")}><span>Date of Birth</span></th>
											<th onClick={() => handleChangeSort("department")}><span>Department</span></th>
											<th onClick={() => handleChangeSort("isActive")}><span>Is Active</span></th>
											<th onClick={() => handleChangeSort("yearsOfExperience")}><span>Years Experience</span></th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{filteredEmployees.map(employee => {
											return (
												<tr key={employee.id}>
													{showIds && (
														<td className="dpId">{employee.dpodId}</td>
													)}
													<td className="dpLine">{employee.firstName}</td>
													<td className="dpLine">{employee.lastName}</td>
													<td className="dpDate">{employee.dateOfBirth}</td>
													<td className="dpLine">{employee.department}</td>
													<td className="dpYesNo">{employee.isActive ? 'yes' : 'no'}</td>
													<td className="dpWholeNumber">{employee.yearsOfExperience}</td>
													<td><RiDeleteBin6Line className="cursor-pointer text-red-900 hover:text-red-700" /></td>
												</tr>
											)
										})}
									</tbody>
									<tfoot>
										<span className="text-xs ml-1 text-gray-700 hover:underline cursor-pointer" onClick={() => handleToggleShowIds()}>show ids</span>
									</tfoot>
								</>
							)}
						</table>
					)}
				</>
			)}
		</section>
	)
}