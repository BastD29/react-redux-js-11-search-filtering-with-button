import allRecipesData from "../../data/data";
import { selectSearchTerm } from "../SearchTerm/searchTermSlice";

export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

const initialState = [];

export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return action.payload;
    default:
      return allRecipes;
  }
};

export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  // prettier-ignore
  return allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
