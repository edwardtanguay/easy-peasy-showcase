export type Flashcard = {
	id: number;
	front: string;
	back: string;
};

export type LoadingStatus = "loading" | "loaded" | "failed";
