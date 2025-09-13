// // RecipeDetails Component
// const RecipeDetails = ({ recipeId }) => {
//   const { getRecipeById, setCurrentView, setSelectedRecipe } = useRecipeStore();
//   const recipe = getRecipeById(recipeId);

//   if (!recipe) {
//     return (
//       <div className="recipe-details error">
//         <h2>Recipe Not Found</h2>
//         <p>The recipe you're looking for doesn't exist.</p>
//         <button onClick={() => setCurrentView('list')} className="back-btn">
//           ← Back to Recipes
//         </button>
//       </div>
//     );
//   }

//   const handleEdit = () => {
//     setSelectedRecipe(recipe);
//     setCurrentView('edit');
//   };

//   return (
//     <div className="recipe-details">
//       <div className="recipe-header">
//         <button onClick={() => setCurrentView('list')} className="back-btn">
//           ← Back to Recipes
//         </button>
//         <div className="recipe-actions">
//           <button onClick={handleEdit} className="edit-btn">
//              Edit
//           </button>
//           <DeleteRecipeButton recipeId={recipe.id} />
//         </div>
//       </div>
      
//       <h1>{recipe.title}</h1>
//       <p className="recipe-description">{recipe.description}</p>
      
//       <div className="recipe-meta">
//         <div className="meta-item">
//           <strong>Cook Time:</strong> {recipe.cookTime}
//         </div>
//         <div className="meta-item">
//           <strong>Servings:</strong> {recipe.servings}
//         </div>
//       </div>

//       <div className="recipe-content">
//         <div className="ingredients-section">
//           <h3>Ingredients</h3>
//           <ul>
//             {recipe.ingredients?.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             )) || <li>No ingredients listed</li>}
//           </ul>
//         </div>

//         <div className="instructions-section">
//           <h3>Instructions</h3>
//           <div className="instructions">
//             {recipe.instructions?.split('\n').map((step, index) => (
//               <p key={index}>{step}</p>
//             )) || <p>No instructions provided</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import FavoriteButton from './FavoriteButton';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const { getRecipeById } = useRecipeStore();
  const navigate = useNavigate();
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    return (
      <div className="recipe-details error">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Recipes
        </button>
      </div>
    );
  }

  const handleEdit = () => {
    navigate(`/edit/${recipe.id}`);
  };

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Recipes
        </button>
        <div className="recipe-actions">
          <button onClick={handleEdit} className="edit-btn">
            ✏️ Edit
          </button>
          <DeleteRecipeButton recipeId={recipe.id} />
          {/* 🆕 ADD THIS: */}
  <FavoriteButton recipeId={recipe.id} />
        </div>
      </div>
      
      <h1>{recipe.title}</h1>
      <p className="recipe-description">{recipe.description}</p>
      
      <div className="recipe-meta">
        <div className="meta-item">
          <strong>Cook Time:</strong> {recipe.cookTime}
        </div>
        <div className="meta-item">
          <strong>Servings:</strong> {recipe.servings}
        </div>
      </div>

      <div className="recipe-content">
        <div className="ingredients-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            )) || <li>No ingredients listed</li>}
          </ul>
        </div>

        <div className="instructions-section">
          <h3>Instructions</h3>
          <div className="instructions">
            {recipe.instructions?.split('\n').map((step, index) => (
              <p key={index}>{step}</p>
            )) || <p>No instructions provided</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;