import { createStore } from "easy-peasy";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";

export type StoreModel = {
	flashcardModel: FlashcardModel,
};

export const store = createStore<StoreModel>({
	flashcardModel
});
