import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactDetailsReducer } from "./contactsReducer";




const rootReducer = combineReducers({
    contacts: contactDetailsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

