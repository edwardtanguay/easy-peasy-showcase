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
	buttons: { title: string, func: () => Promise<unknown> }[];
};

export type StatusButtonInfo = {
	color: string;
	buttons: { title: string, value: string }[];
};

export type TestUser = {
	firstName: string;
	age: number;
}

export type Employee = {
	id: number;
	dpodId: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	department: string;
	isActive: boolean;
	yearsOfExperience: number;
}

export type LoadingStatus = "readyToLoad" | "loading" | "finished";