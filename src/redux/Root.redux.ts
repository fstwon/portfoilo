import { combineReducers } from "redux";
import { AppReducer } from "./App.redux";

export const rootReducer = combineReducers({
  AppReducer
});

export type RootState = ReturnType<typeof rootReducer>;