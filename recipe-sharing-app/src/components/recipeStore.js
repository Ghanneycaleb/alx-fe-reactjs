// import { create } from 'zustand';

// export const useRecipeStore = create((set) => ({
//   recipes: [
//     {
//       id: 1,
//       title: "Classic Chocolate Chip Cookies",
//       description: "Delicious homemade cookies with chocolate chips. Perfect for any occasion!"
//     },
//     {
//       id: 2,
//       title: "Spaghetti combo", 
//       description: " dish with eggs, cheese, and pancetta."
//     }
//   ],
//   addRecipe: (newRecipe) => set((state) => ({ 
//     recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
//   })),
//   setRecipes: (recipes) => set({ recipes }),
//   deleteRecipe: (id) => set((state) => ({
//     recipes: state.recipes.filter(recipe => recipe.id !== id)
//   }))
// }));

import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Chocolate Chip Cookies",
      description: "Delicious homemade cookies with chocolate chips. Perfect for any occasion!",
      ingredients: ["2 cups flour", "1 cup butter", "1/2 cup brown sugar", "1/2 cup white sugar", "2 eggs", "1 tsp vanilla", "1 cup chocolate chips"],
      instructions: "1. Preheat oven to 375°F\n2. Mix dry ingredients\n3. Cream butter and sugars\n4. Add eggs and vanilla\n5. Combine wet and dry ingredients\n6. Fold in chocolate chips\n7. Bake for 10-12 minutes",
      cookTime: "12 minutes",
      servings: 24
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Creamy Italian pasta dish with eggs, cheese, and pancetta.",
      ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Parmesan cheese", "Black pepper", "Salt"],
      instructions: "1. Cook spaghetti al dente\n2. Fry pancetta until crispy\n3. Whisk eggs with cheese\n4. Combine hot pasta with pancetta\n5. Add egg mixture off heat\n6. Toss quickly to create creamy sauce",
      cookTime: "20 minutes",
      servings: 4
    }
  ],
  selectedRecipe: null,
  currentView: 'list', // 'list', 'details', 'add', 'edit'
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { 
      ...newRecipe, 
      id: Date.now(),
      ingredients: newRecipe.ingredients || [],
      instructions: newRecipe.instructions || "",
      cookTime: newRecipe.cookTime || "",
      servings: newRecipe.servings || 1
    }] 
  })),
  
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    selectedRecipe: state.selectedRecipe?.id === id ? null : state.selectedRecipe,
    currentView: state.selectedRecipe?.id === id ? 'list' : state.currentView
  })),
  
  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
  setCurrentView: (view) => set({ currentView: view }),
  
  getRecipeById: (id) => {
    const state = get();
    return state.recipes.find(recipe => recipe.id === parseInt(id));
  }
}));