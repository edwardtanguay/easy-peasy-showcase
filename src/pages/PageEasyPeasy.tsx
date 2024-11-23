import { EmployeesArea } from "../components/EmployeesArea/EmployeesArea";
// import { TestMessagesArea } from "../components/TestMessagesArea";

export const PageEasyPeasy = () => {
	return (
		<>
			<h2 className="text-2xl">Easy Peasy Showcase</h2>
			<p className="mt-2 mb-5">This page is an example of using Easy Peasy to build an CRUD data table.</p>
			<EmployeesArea />
			{/* <TestMessagesArea /> */}
		</>
	)
}