import { EmployeesArea } from "../components/EmployeesArea";
import { TestMessagesArea } from "../components/TestMessagesArea";

export const PageEasyPeasy = () => {
	return (
		<>
			<h2 className="text-2xl">Easy Peasy Showcase</h2>
			<p className="mt-2 mb-3">This page shows examples of using Easy-Peasy Redux in various ways.</p>
			<EmployeesArea />
			<TestMessagesArea />
		</>
	)
}