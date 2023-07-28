import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectFilteredAllRecipes } from "../store/data/slice";

export default function Data() {
  const dispatch = useDispatch();

  const allRecipes = useSelector(selectFilteredAllRecipes);

  console.log("allRecipes", allRecipes);

  const onFirstRender = () => {
    dispatch(fetchData());
  };

  useEffect(onFirstRender, [dispatch]);

  return (
    <>
      {allRecipes.map((recipe) => (
        <div key={recipe.uuid}>
          <p>{recipe.title}</p>
        </div>
      ))}
    </>
  );
}
