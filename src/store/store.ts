import { createStore } from "easy-peasy";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import { settingsModel, SettingsModel } from "./models/settingsModel";
import { testMessageModel, TestMessageModel } from "./models/testMessageModel";

export type StoreModel = {
	settingsModel: SettingsModel;
	flashcardModel: FlashcardModel;
	testMessageModel: TestMessageModel
};

export const store = createStore<StoreModel>({
	settingsModel,
	flashcardModel,
	testMessageModel
});
