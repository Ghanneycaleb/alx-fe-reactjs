// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import AddRecipeForm from './components/AddRecipeForm';
// import EditRecipeForm from './components/EditRecipeForm';
// import { useRecipeStore } from './components/recipeStore';
// import './App.css';

// const RecipeDetailsRoute = () => {
//   const { id } = useParams();
//   const recipeId = isNaN(Number(id)) ? id : Number(id);
//   return <RecipeDetails recipeId={recipeId} />;
// };

// const EditRecipeFormRoute = () => {
//   const { id } = useParams();
//   const recipeId = isNaN(Number(id)) ? id : Number(id);
//   const { getRecipeById } = useRecipeStore();
//   const recipe = getRecipeById(recipeId);
//   if (!recipe) return <div>Recipe not found</div>;
//   return <EditRecipeForm recipe={recipe} />;
// };

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <header className="app-header">
//           <h1>Recipe Sharing App</h1>
//           <p>Share and discover amazing recipes</p>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<RecipeList />} />
//             <Route path="/add" element={<AddRecipeForm />} />
//             <Route path="/recipes/:id" element={<RecipeDetailsRoute />} />
//             <Route path="/edit/:id" element={<EditRecipeFormRoute />} />
//             <Route path="*" element={<div>Not Found</div>} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// import { useState } from 'react';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import AddRecipeForm from './components/AddRecipeForm';
// import EditRecipeForm from './components/EditRecipeForm';
// import FavoritesList from './components/FavoritesList';
// import RecommendationsList from './components/RecommendationsList';
// import { useRecipeStore } from './components/recipeStore';
// import './App.css';

// const RecipeDetailsRoute = () => {
//   const { id } = useParams();
//   const recipeId = isNaN(Number(id)) ? id : Number(id);
//   return <RecipeDetails recipeId={recipeId} />;
// };

// const EditRecipeFormRoute = () => {
//   const { id } = useParams();
//   const recipeId = isNaN(Number(id)) ? id : Number(id);
//   const { getRecipeById } = useRecipeStore();
//   const recipe = getRecipeById(recipeId);
//   if (!recipe) return <div>Recipe not found</div>;
//   return <EditRecipeForm recipe={recipe} />;
// };


// const MainContent = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const { favorites } = useRecipeStore();

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'favorites':
//         return <FavoritesList />;
//       case 'recommendations':
//         return <RecommendationsList />;
//       default:
//         return <RecipeList />;
//     }
//   };

//   return (
//     <div>
//       {/* 🆕 NEW: Tab Navigation */}
//       <nav className="tab-navigation">
//         <button 
//           className={activeTab === 'all' ? 'active' : ''}
//           onClick={() => setActiveTab('all')}
//         >
//           All Recipes
//         </button>
//         <button 
//           className={activeTab === 'favorites' ? 'active' : ''}
//           onClick={() => setActiveTab('favorites')}
//         >
//           My Favorites {favorites.length > 0 && `(${favorites.length})`}
//         </button>
//         <button 
//           className={activeTab === 'recommendations' ? 'active' : ''}
//           onClick={() => setActiveTab('recommendations')}
//         >
//           Recommended
//         </button>
//       </nav>
      
//       {/* Content */}
//       {renderContent()}
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <header className="app-header">
//           <h1>Recipe Sharing App</h1>
//           <p>Share and discover amazing recipes</p>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<MainContent />} />
//             <Route path="/add" element={<AddRecipeForm />} />
//             <Route path="/recipes/:id" element={<RecipeDetailsRoute />} />
//             <Route path="/edit/:id" element={<EditRecipeFormRoute />} />
//             <Route path="*" element={<div>Not Found</div>} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
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

// Fixed MainContent component with error handling
const MainContent = () => {
  const [activeTab, setActiveTab] = useState('all');
  const store = useRecipeStore();
  
  // Safe access to favorites with fallback
  const favorites = store.favorites || [];

  const renderContent = () => {
    switch (activeTab) {
      case 'favorites':
        return <FavoritesList />;
      case 'recommendations':
        return <RecommendationsList />;
      default:
        return <RecipeList />;
    }
  };

  return (
    <div>
      {/* Tab Navigation with error handling */}
      <nav className="tab-navigation">
        <button 
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          All Recipes
        </button>
        <button 
          className={activeTab === 'favorites' ? 'active' : ''}
          onClick={() => setActiveTab('favorites')}
        >
          My Favorites {favorites.length > 0 ? `(${favorites.length})` : ''}
        </button>
        <button 
          className={activeTab === 'recommendations' ? 'active' : ''}
          onClick={() => setActiveTab('recommendations')}
        >
          Recommended
        </button>
      </nav>
      
      {/* Content */}
      {renderContent()}
    </div>
  );
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
            <Route path="/" element={<MainContent />} />
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