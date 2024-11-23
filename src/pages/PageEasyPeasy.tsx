import { EmployeesArea } from "../components/EmployeesArea/EmployeesArea";
// import { TestMessagesArea } from "../components/TestMessagesArea";

export const PageEasyPeasy = () => {
	return (
		<>
			<h2 className="text-2xl">Easy Peasy Showcase</h2>
			<p className="mt-2 mb-[2rem]">This page is an example of using Easy Peasy to build a data table with CRUD functionality.</p>
			<EmployeesArea />
			{/* <TestMessagesArea /> */}
		</>
	)
}