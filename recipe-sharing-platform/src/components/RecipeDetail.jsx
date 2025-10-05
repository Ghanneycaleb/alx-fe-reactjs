import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === Number(id));
        setRecipe(found || null);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <p className="text-gray-500">Loading recipe...</p>
      </div>
    );
  }

  // helpers to render instructions whether they're an array or a string
  const renderInstructions = () => {
    const instructions = recipe.instructions;
    if (!instructions) {
      return <p className="text-gray-700">No cooking instructions provided.</p>;
    }
    if (Array.isArray(instructions)) {
      return (
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      );
    }
    // assume string (possibly with newlines)
    return (
      <div className="text-gray-700">
        {String(instructions)
          .split(/\n+/)
          .map((line, idx) => (
            <p className="mb-2" key={idx}>
              {line}
            </p>
          ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-pink-600 mb-3 text-center">
            {recipe.title}
          </h1>
          <p className="text-gray-700 mb-6 text-center">{recipe.summary}</p>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h2>
            {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No ingredients listed.</p>
            )}
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Cooking Instructions</h2>
            {renderInstructions()}
          </section>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
