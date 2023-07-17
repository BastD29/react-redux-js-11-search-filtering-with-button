import React from "react";
import SearchTerm from "./features/SearchTerm/SearchTerm";
import FavoriteRecipes from "./features/FavoriteRecipes/FavoriteRecipes";
import AllRecipes from "./features/AllRecipes/AllRecipes";

export default function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      {/* <section>
        <h2>Favorite recipes</h2>
        <FavoriteRecipes />
      </section> */}
      <section>
        <h2>All recipes</h2>
        <AllRecipes />
      </section>
    </main>
  );
}
