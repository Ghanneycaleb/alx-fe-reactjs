// import React from 'react';
// import { useRecipeStore } from '../components/recipeStore';
// import FavoriteButton from './FavoriteButton';


// const FavoritesList = () => {
//   const { favorites, recipes } = useRecipeStore();
  
//   const favoriteRecipes = favorites
//     .map(id => recipes.find(recipe => recipe.id === id))
//     .filter(Boolean); 

//   if (favoriteRecipes.length === 0) {
//     return (
//       <div className="favorites-empty">
//         <h2>My Favorites</h2>
//         <p>No favorite recipes yet. Start adding some!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="favorites-list">
//       <h2>My Favorites ({favoriteRecipes.length})</h2>
//       <div className="recipes-grid">
//         {favoriteRecipes.map(recipe => (
//           <div key={recipe.id} className="recipe-card">
//             <img src={recipe.image} alt={recipe.title} />
//             <div className="recipe-info">
//               <h3>{recipe.title}</h3>
//               <p>{recipe.description}</p>
//               <div className="recipe-meta">
//                 <span>⏱️ {recipe.cookingTime}</span>
//                 <FavoriteButton recipeId={recipe.id} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FavoritesList;

import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  const { getFavoriteRecipes } = useRecipeStore();
  const favoriteRecipes = getFavoriteRecipes();

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>My Favorites</h2>
        <p>No favorite recipes yet. Start adding some!</p>
        <p>Click the heart icon on any recipe to add it to your favorites.</p>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <h2>My Favorites ({favoriteRecipes.length})</h2>
      <div className="recipe-grid">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-card-content">
              <div className="recipe-card-header">
                <h3>{recipe.title}</h3>
                <div className="recipe-badges">
                  <span className={`difficulty-badge ${recipe.difficulty.toLowerCase()}`}>
                    {recipe.difficulty}
                  </span>
                  <span className="category-badge">{recipe.category}</span>
                </div>
              </div>
              <p className="recipe-card-description">{recipe.description}</p>
              <div className="recipe-card-meta">
                {recipe.cookTime && <span>⏱️ {recipe.cookTime}</span>}
                {recipe.servings && <span>🍽️ {recipe.servings} servings</span>}
              </div>
            </div>
            <div className="recipe-card-actions">
              <Link 
                to={`/recipes/${recipe.id}`}
                className="view-details-btn"
              >
                View Details
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;