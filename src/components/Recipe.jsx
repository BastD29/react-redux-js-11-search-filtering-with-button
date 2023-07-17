import React from "react";

export default function Recipe({ recipe /* children */ }) {
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <p className="recipe-name">{recipe.name}</p>
        {/* <div className="image-container">
          <img src={recipe.img} alt="" className="recipe-image" />
        </div> */}
      </span>
      {/* {children} */}
    </div>
  );
}
