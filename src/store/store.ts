import { createStore } from "easy-peasy";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import { generalModel, GeneralModel } from "./models/generalModel";

export type StoreModel = {
	generalModel: GeneralModel,
	flashcardModel: FlashcardModel,
};

export const store = createStore<StoreModel>({
	generalModel,
	flashcardModel
});
