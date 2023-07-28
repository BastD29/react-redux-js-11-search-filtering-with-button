import { selectSearchTerm } from "../search/slice";

export const fetchData = () => {
  return {
    type: "data/fetchData",
  };
};

const initialState = [];

export const dataReducer = (data = initialState, action) => {
  switch (action.type) {
    case "data/loadData":
      return action.payload;
    default:
      return data;
  }
};

export const selectAllData = (state) => state.data;

export const selectFilteredData = (state) => {
  const allData = selectAllData(state);
  const searchTerm = selectSearchTerm(state);

  // prettier-ignore
  return allData.filter((datum) => datum.name.toLowerCase().includes(searchTerm.toLowerCase()));
};
