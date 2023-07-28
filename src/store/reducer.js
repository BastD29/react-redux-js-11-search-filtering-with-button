import { combineReducers } from "redux";
import { allRecipesReducer } from "./data/slice";
import { searchTermReducer } from "./search/slice";

export const rootReducer = combineReducers({
  allRecipes: allRecipesReducer,
  searchTerm: searchTermReducer,
});
