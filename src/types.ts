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

export type ButtonInfo = {
	color: string;
	buttons: { title: string }[];
};
