export type DataFlashcard = {
	id: number;
	front: string;
	back: string;
};

export type Flashcard = {
	dataItem: DataFlashcard;
	deletingStatus: ProcessStatus;
};

export type ProcessStatus = "notActive" | "inProcess" | "finished" | "failed";

export type ProcessButtonInfo = {
	color: string;
	buttons: { title: string; func: () => Promise<unknown> }[];
};

export type StatusButtonInfo = {
	color: string;
	buttons: { title: string; value: string }[];
};

export type TestUser = {
	firstName: string;
	age: number;
};

export type RawEmployee = {
	id: number;
	dpodId: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	department: string;
	isActive: boolean;
	yearsOfExperience: number;
};

export type Employee = RawEmployee & {
	bulkSearchText: string;
};

export type LoadingStatus = "readyToLoad" | "loading" | "error" | "finished";

export type SortField = "firstName" | "lastName" | "dateOfBirth" | "department" | "isActive" | "yearsOfExperience";

export type SortDirection = "ascending" | "descending";
