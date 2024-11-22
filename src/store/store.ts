import { createStore } from "easy-peasy";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import { settingsModel, SettingsModel } from "./models/settingsModel";
import { showcaseModel, ShowcaseModel } from "./models/showcaseModel";

export type StoreModel = {
	settingsModel: SettingsModel;
	flashcardModel: FlashcardModel;
	showcaseModel: ShowcaseModel;
};

export const store = createStore<StoreModel>({
	settingsModel,
	flashcardModel,
	showcaseModel,
});
