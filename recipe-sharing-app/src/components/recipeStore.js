import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Chocolate Chip Cookies",
      description: "Delicious homemade cookies with chocolate chips. Perfect for any occasion!"
    },
    {
      id: 2,
      title: "Spaghetti combo", 
      description: " dish with eggs, cheese, and pancetta."
    }
  ],
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
}));