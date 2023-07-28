// import { selectSearchTerm } from "../SearchTerm/searchTermSlice";
import { selectSearchTerm } from "../search/slice";

export const fetchData = () => {
  return {
    type: "allRecipes/fetchData",
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
