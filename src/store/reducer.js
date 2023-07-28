import { combineReducers } from "redux";
import { dataReducer } from "./data/slice";
import { searchTermReducer } from "./search/slice";

export const rootReducer = combineReducers({
  data: dataReducer,
  searchTerm: searchTermReducer,
});
