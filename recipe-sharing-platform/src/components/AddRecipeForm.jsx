import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !instructions) {
      setError("All fields are required!");
      return;
    }

    // Split ingredients into array (if needed)
    const ingredientList = ingredients.split(",").map((item) => item.trim());

    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions,
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Add a New Recipe
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Ingredients (separated by commas)
          </label>
          <textarea
            placeholder="e.g. rice, tomatoes, chicken"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Preparation Steps
          </label>
          <textarea
            placeholder="Describe how to prepare the dish..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
