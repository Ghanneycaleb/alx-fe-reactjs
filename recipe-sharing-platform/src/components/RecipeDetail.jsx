import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">
          {recipe.title}
        </h1>
        <p className="text-gray-700 mb-6 text-center">{recipe.summary}</p>

        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Cooking Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Step 1: Prepare ingredients.</li>
            <li>Step 2: Follow the recipe steps carefully.</li>
            <li>Step 3: Serve and enjoy your meal!</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-pink-600 font-semibold hover:underline hover:text-pink-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
