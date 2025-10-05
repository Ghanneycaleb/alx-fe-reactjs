import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Please provide ingredients (comma separated).";
    } else {
      const ingredientList = ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please include at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Please provide preparation steps.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      steps: steps.trim(),
    };

    const stored = JSON.parse(localStorage.getItem("recipes") || "[]");
    stored.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(stored));

    alert("Recipe submitted!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  const clearError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg md:max-w-2xl space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Add a New Recipe
        </h2>

        {/* Title */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Recipe Title
          </label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              clearError("title");
            }}
            type="text"
            placeholder="e.g. Jollof Rice"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-pink-400"
            }`}
            aria-invalid={errors.title ? "true" : "false"}
            aria-describedby={errors.title ? "title-error" : undefined}
          />
          {errors.title && (
            <p id="title-error" className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        {/* Ingredients */}
        <div className="md:grid md:grid-cols-1">
          <label className="block text-gray-700 mb-1 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value);
              clearError("ingredients");
            }}
            rows="3"
            placeholder="e.g. rice, tomato paste, onion"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 resize-none ${
              errors.ingredients
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-pink-400"
            }`}
            aria-invalid={errors.ingredients ? "true" : "false"}
            aria-describedby={
              errors.ingredients ? "ingredients-error" : undefined
            }
          />
          {errors.ingredients && (
            <p id="ingredients-error" className="text-red-500 text-sm mt-1">
              {errors.ingredients}
            </p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => {
              setSteps(e.target.value);
              clearError("steps");
            }}
            rows="5"
            placeholder="Describe the preparation steps..."
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 resize-y ${
              errors.steps
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-300 focus:ring-pink-400"
            }`}
            aria-invalid={errors.steps ? "true" : "false"}
            aria-describedby={errors.steps ? "steps-error" : undefined}
          />
          {errors.steps && (
            <p id="steps-error" className="text-red-500 text-sm mt-1">
              {errors.steps}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200 md:w-1/2 md:mx-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
