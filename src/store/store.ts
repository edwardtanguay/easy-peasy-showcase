import { createStore } from "easy-peasy";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import { settingsModel, SettingsModel } from "./models/settingsModel";

export type StoreModel = {
	settingsModel: SettingsModel,
	flashcardModel: FlashcardModel,
};

export const store = createStore<StoreModel>({
	settingsModel,
	flashcardModel
});
