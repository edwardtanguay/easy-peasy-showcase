export type Flashcard = {
	id: number;
	front: string;
	back: string;
};

export type ProcessStatus = "inProcess" | "finished" | "failed";
