// import { useRecipeStore } from '../recipeStore';

// const RecipeList = () => {
//   const { recipes, deleteRecipe } = useRecipeStore();

//   return (
//     <div>
//       <h2>Recipe Collection</h2>
//       {recipes.length === 0 ? (
//         <p>No recipes yet. Add your first recipe!</p>
//       ) : (
//         recipes.map(recipe => (
//           <div key={recipe.id} className="recipe-card">
//             <h3>{recipe.title}</h3>
//             <p>{recipe.description}</p>
//             <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default RecipeList;

import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const { recipes, deleteRecipe } = useRecipeStore();

  if (recipes.length === 0) {
    return (
      <div className="recipe-list">
        <h2>Recipe Collection</h2>
        <p className="no-recipes">No recipes yet. Add your first recipe!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <h2>Recipe Collection</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <div className="recipe-content">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          {/* <button
            onClick={() => deleteRecipe(recipe.id)}
            className="delete-btn"
            title="Delete recipe"
          >
            ✕
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
