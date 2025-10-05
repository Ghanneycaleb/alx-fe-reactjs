import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from local JSON
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
  <Link
    to="/add"
    className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-200"
  >
    + Add Recipe
  </Link>
</div>

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Recipe Sharing Platform
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden text-center"
            >
              <div className="pt-5">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-40 h-32 rounded-md object-cover mx-auto"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm">{recipe.summary}</p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="mt-4 inline-block text-pink-600 hover:underline font-medium"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
