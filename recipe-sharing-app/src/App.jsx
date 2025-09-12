import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { useRecipeStore } from "./components/recipeStore";
import "./App.css";

function App() {
  const recipeCount = useRecipeStore((state) => state.recipes.length);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Recipe Sharing App</h1>
        <p>{recipeCount} recipes in collection</p>
      </header>

      <main className="app-main">
        <div className="app-grid">
          <AddRecipeForm />
          <RecipeList />
        </div>
      </main>
    </div>
  );
}

export default App;
