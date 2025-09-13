// import React, { useEffect } from 'react';
// import { useRecipeStore } from '../components/recipeStore';
// import FavoriteButton from './FavoriteButton';


// const RecommendationsList = () => {
//   const { recommendations, generateRecommendations, favorites } = useRecipeStore();

//   useEffect(() => {
//     if (favorites.length > 0) {
//       generateRecommendations();
//     }
//   }, [favorites.length, generateRecommendations]);

//   if (favorites.length === 0) {
//     return (
//       <div className="recommendations-empty">
//         <h2>Recommended for You</h2>
//         <p>Add some favorites first to get personalized recommendations!</p>
//       </div>
//     );
//   }

//   if (recommendations.length === 0) {
//     return (
//       <div className="recommendations-empty">
//         <h2>Recommended for You</h2>
//         <p>No recommendations available right now. Try favoriting more recipes!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="recommendations-list">
//       <h2>Recommended for You</h2>
//       <div className="recipes-grid">
//         {recommendations.map(recipe => (
//           <div key={recipe.id} className="recipe-card recommended">
//             <div className="recommendation-badge">✨ Recommended</div>
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

// export default RecommendationsList;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const { getRecommendations, generateRecommendations, favorites } = useRecipeStore();
  const recommendations = getRecommendations();

  useEffect(() => {
    if (favorites.length > 0) {
      generateRecommendations();
    }
  }, [favorites.length, generateRecommendations]);

  if (favorites.length === 0) {
    return (
      <div className="recommendations-empty">
        <h2>Recommended for You</h2>
        <p>Add some favorites first to get personalized recommendations!</p>
        <p>Go to the "All Recipes" tab and click the heart icon on recipes you like.</p>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-empty">
        <h2>Recommended for You</h2>
        <p>No recommendations available right now. Try favoriting more recipes!</p>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h2>Recommended for You</h2>
      <p className="recommendations-subtitle">
        Based on your {favorites.length} favorite recipe{favorites.length !== 1 ? 's' : ''}
      </p>
      <div className="recipe-grid">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-card recommended">
            <div className="recommendation-badge">✨ Recommended</div>
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

export default RecommendationsList;