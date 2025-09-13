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

// import { useRecipeStore } from "./recipeStore";

// const RecipeList = () => {
//   const { recipes, deleteRecipe } = useRecipeStore();

//   if (recipes.length === 0) {
//     return (
//       <div className="recipe-list">
//         <h2>Recipe Collection</h2>
//         <p className="no-recipes">No recipes yet. Add your first recipe!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="recipe-list">
//       <h2>Recipe Collection</h2>
//       {recipes.map((recipe) => (
//         <div key={recipe.id} className="recipe-card">
//           <div className="recipe-content">
//             <h3>{recipe.title}</h3>
//             <p>{recipe.description}</p>
//           </div>
          // <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          // {/* <button
          //   onClick={() => deleteRecipe(recipe.id)}
          //   className="delete-btn"
          //   title="Delete recipe"
          // >
          //   ✕
          // </button> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;


// import { useNavigate } from 'react-router-dom';
// import { useRecipeStore } from '../components/recipeStore';

// const RecipeList = () => {
//   const { recipes } = useRecipeStore();

//   const navigate = useNavigate();

//   const handleViewDetails = (recipe) => {
//     navigate(`/recipes/${recipe.id}`);
//   };

//   if (recipes.length === 0) {
//     return (
//       <div className="recipe-list-empty">
//         <h2>No Recipes Yet</h2>
//         <p>Start by adding your first recipe!</p>
//         <button 
//           onClick={() => navigate('/add')} 
//           className="add-first-recipe-btn"
//         >
//           Add Your First Recipe
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="recipe-list">
//       <div className="list-header">
//         <h2>Recipe Collection ({recipes.length})</h2>
//         <button onClick={() => navigate('/add')} className="add-recipe-btn">
//           + Add Recipe
//         </button>
//       </div>
      
//       <div className="recipe-grid">
//         {recipes.map(recipe => (
//           <div key={recipe.id} className="recipe-card">
//             <div className="recipe-card-content">
//               <h3>{recipe.title}</h3>
//               <p className="recipe-card-description">{recipe.description}</p>
//               <div className="recipe-card-meta">
//                 {recipe.cookTime && <span>⏱️ {recipe.cookTime}</span>}
//                 {recipe.servings && <span>🍽️ {recipe.servings} servings</span>}
//               </div>
//             </div>
//             <div className="recipe-card-actions">
//               <button 
//                 onClick={() => handleViewDetails(recipe)}
//                 className="view-details-btn"
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeList;
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import SearchResults from './SearchResults';
// import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const { getFilteredRecipes } = useRecipeStore();
  const filteredRecipes = getFilteredRecipes();

  
  return (
    <div className="recipe-list">
      <div className="list-header">
        <h2>Recipe Collection</h2>
        <Link to="/add" className="add-recipe-btn">
          + Add Recipe
        </Link>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Filter Panel */}
      <FilterPanel />

      {/* Search Results Info */}
      <SearchResults filteredRecipes={filteredRecipes} />

      {/* Recipe Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="no-results">
          <h3>No recipes found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {filteredRecipes.map(recipe => (
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
                 {/* 🆕 ADD THIS: */}
  <FavoriteButton recipeId={recipe.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;