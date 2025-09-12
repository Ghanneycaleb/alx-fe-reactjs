// import RecipeList from "./components/RecipeList";
// import AddRecipeForm from "./components/AddRecipeForm";
// import { useRecipeStore } from "./components/recipeStore";
// import "./App.css";

// function App() {
//   const recipeCount = useRecipeStore((state) => state.recipes.length);

//   return (
//     <div className="app">
//       <header className="app-header">
//         <h1>Recipe Sharing App</h1>
//         <p>{recipeCount} recipes in collection</p>
//       </header>

//       <main className="app-main">
//         <div className="app-grid">
//           <AddRecipeForm />
//           <RecipeList />
//         </div>
//       </main>
//     </div>
//   );
// }


// export default App;
import { useRecipeStore } from './components/recipeStore';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import './App.css';

function App() {
  const { currentView, selectedRecipe } = useRecipeStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'details':
        return selectedRecipe ? (
          <RecipeDetails recipeId={selectedRecipe.id} />
        ) : (
          <div>Recipe not found</div>
        );
      case 'add':
        return <AddRecipeForm />;
      case 'edit':
        return selectedRecipe ? (
          <EditRecipeForm recipe={selectedRecipe} />
        ) : (
          <div>Recipe not found</div>
        );
      default:
        return <RecipeList />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Sharing App</h1>
        <p>Share and discover amazing recipes</p>
      </header>
      
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;