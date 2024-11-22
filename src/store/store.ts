import { createStore } from "easy-peasy";
import { flashcardModel, FlashcardModel } from "./models/flashcardModel";
import { settingsModel, SettingsModel } from "./models/settingsModel";
import { testMessageModel, TestMessageModel } from "./models/testMessageModel";
import { employeeModel, EmployeeModel } from "./models/employeeModel";

export type StoreModel = {
	settingsModel: SettingsModel;
	flashcardModel: FlashcardModel;
	testMessageModel: TestMessageModel;
	employeeModel: EmployeeModel;
};

export const store = createStore<StoreModel>({
	settingsModel,
	flashcardModel,
	testMessageModel,
	employeeModel
});
