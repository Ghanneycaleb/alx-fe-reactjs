import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import { useRecipeStore } from './components/recipeStore';
import './App.css';

const RecipeDetailsRoute = () => {
  const { id } = useParams();
  const recipeId = isNaN(Number(id)) ? id : Number(id);
  return <RecipeDetails recipeId={recipeId} />;
};

const EditRecipeFormRoute = () => {
  const { id } = useParams();
  const recipeId = isNaN(Number(id)) ? id : Number(id);
  const { getRecipeById } = useRecipeStore();
  const recipe = getRecipeById(recipeId);
  if (!recipe) return <div>Recipe not found</div>;
  return <EditRecipeForm recipe={recipe} />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Recipe Sharing App</h1>
          <p>Share and discover amazing recipes</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipes/:id" element={<RecipeDetailsRoute />} />
            <Route path="/edit/:id" element={<EditRecipeFormRoute />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
