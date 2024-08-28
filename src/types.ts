export type DataFlashcard = {
	id: number;
	front: string;
	back: string;
};

export type Flashcard = {
	dataItem: DataFlashcard,
	deletingStatus: ProcessStatus;
}

export type ProcessStatus = "pending" | "inProcess" | "finished" | "failed";
