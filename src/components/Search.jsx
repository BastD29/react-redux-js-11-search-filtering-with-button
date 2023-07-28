import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearchTerm, setSearchTerm } from "../store/search/slice";

export default function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log("e", e);
  };

  // !in the case we want to reuse the search in several components through the app,
  // !we should pass this function from outside of this component
  const onSearchHandler = () => {
    dispatch(setSearchTerm(inputValue));
  };

  const onClearSearchTermHandler = () => {
    setInputValue("");
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <input
        type="text"
        id="search"
        value={inputValue}
        onChange={onInputChangeHandler}
        placeholder="Search recipes"
      />

      {inputValue.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          X
        </button>
      )}

      <button onClick={onSearchHandler} type="button" id="search-button">
        Search
      </button>
    </div>
  );
}
