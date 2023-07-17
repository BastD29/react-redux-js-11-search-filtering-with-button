import { combineReducers, legacy_createStore as createStore } from "redux";
import { searchTermReducer } from "../features/SearchTerm/searchTermSlice";
import { allRecipesReducer } from "../features/AllRecipes/allRecipesSlice";

export const store = createStore(
  combineReducers({
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  })
);
