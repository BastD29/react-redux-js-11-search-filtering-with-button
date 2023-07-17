import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData, selectFilteredAllRecipes } from "./allRecipesSlice";
import Recipe from "../../components/Recipe";

export default function AllRecipes() {
  const dispatch = useDispatch();

  const allRecipes = useSelector(selectFilteredAllRecipes);

  const onFirstRender = () => {
    dispatch(loadData());
  };

  // useEffect(() => {
  //   onFirstRender()
  // }, [dispatch])

  useEffect(onFirstRender, [dispatch]);

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
