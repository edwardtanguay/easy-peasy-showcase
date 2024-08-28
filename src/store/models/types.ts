export type Flashcard = {
	id: number;
	front: string;
	back: string;
};

export type LoadingStatus = "pending" | "loading" | "loaded" | "failed";
