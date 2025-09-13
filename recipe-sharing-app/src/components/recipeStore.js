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

// import { create } from 'zustand';

// export const useRecipeStore = create((set, get) => ({
//   recipes: [
//     {
//       id: 1,
//       title: "Classic Chocolate Chip Cookies",
//       description: "Delicious homemade cookies with chocolate chips. Perfect for any occasion!",
//       ingredients: ["2 cups flour", "1 cup butter", "1/2 cup brown sugar", "1/2 cup white sugar", "2 eggs", "1 tsp vanilla", "1 cup chocolate chips"],
//       instructions: "1. Preheat oven to 375°F\n2. Mix dry ingredients\n3. Cream butter and sugars\n4. Add eggs and vanilla\n5. Combine wet and dry ingredients\n6. Fold in chocolate chips\n7. Bake for 10-12 minutes",
//       cookTime: "12 minutes",
//       servings: 24
//     },
//     {
//       id: 2,
//       title: "Spaghetti Carbonara",
//       description: "Creamy Italian pasta dish with eggs, cheese, and pancetta.",
//       ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Parmesan cheese", "Black pepper", "Salt"],
//       instructions: "1. Cook spaghetti al dente\n2. Fry pancetta until crispy\n3. Whisk eggs with cheese\n4. Combine hot pasta with pancetta\n5. Add egg mixture off heat\n6. Toss quickly to create creamy sauce",
//       cookTime: "20 minutes",
//       servings: 4
//     }
//   ],
//   selectedRecipe: null,
//   currentView: 'list',

//   addRecipe: (newRecipe) => set((state) => ({
//     recipes: [...state.recipes, {
//       ...newRecipe,
//       id: Date.now(),
//       ingredients: newRecipe.ingredients || [],
//       instructions: newRecipe.instructions || "",
//       cookTime: newRecipe.cookTime || "",
//       servings: newRecipe.servings || 1
//     }]
//   })),

//   updateRecipe: (id, updatedRecipe) => set((state) => ({
//     recipes: state.recipes.map(recipe =>
//       recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
//     )
//   })),

//   deleteRecipe: (id) => set((state) => ({
//     recipes: state.recipes.filter(recipe => recipe.id !== id),
//     selectedRecipe: state.selectedRecipe?.id === id ? null : state.selectedRecipe,
//     currentView: state.selectedRecipe?.id === id ? 'list' : state.currentView
//   })),

//   setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
//   setCurrentView: (view) => set({ currentView: view }),

//   getRecipeById: (id) => {
//     const state = get();
//     return state.recipes.find(recipe => recipe.id === parseInt(id));
//   }
// }));

import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    {
      id: 1,
      title: "Classic Chocolate Chip Cookies",
      description:
        "Delicious homemade cookies with chocolate chips. Perfect for any occasion!",
      ingredients: [
        "2 cups flour",
        "1 cup butter",
        "1/2 cup brown sugar",
        "1/2 cup white sugar",
        "2 eggs",
        "1 tsp vanilla",
        "1 cup chocolate chips",
      ],
      instructions:
        "1. Preheat oven to 375°F\n2. Mix dry ingredients\n3. Cream butter and sugars\n4. Add eggs and vanilla\n5. Combine wet and dry ingredients\n6. Fold in chocolate chips\n7. Bake for 10-12 minutes",
      cookTime: "12 minutes",
      servings: 24,
      category: "Desserts",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Spaghetti Carbonara",
      description: "Creamy Italian pasta dish with eggs, cheese, and pancetta.",
      ingredients: [
        "400g spaghetti",
        "200g pancetta",
        "4 eggs",
        "100g Parmesan cheese",
        "Black pepper",
        "Salt",
      ],
      instructions:
        "1. Cook spaghetti al dente\n2. Fry pancetta until crispy\n3. Whisk eggs with cheese\n4. Combine hot pasta with pancetta\n5. Add egg mixture off heat\n6. Toss quickly to create creamy sauce",
      cookTime: "20 minutes",
      servings: 4,
      category: "Main Course",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Caesar Salad",
      description:
        "Fresh crispy romaine lettuce with creamy Caesar dressing and croutons.",
      ingredients: [
        "2 heads romaine lettuce",
        "1/2 cup Parmesan cheese",
        "1 cup croutons",
        "Caesar dressing",
        "Anchovies",
        "Lemon juice",
      ],
      instructions:
        "1. Wash and chop romaine lettuce\n2. Make Caesar dressing\n3. Toss lettuce with dressing\n4. Add croutons and Parmesan\n5. Serve immediately",
      cookTime: "15 minutes",
      servings: 4,
      category: "Salads",
      difficulty: "Easy",
    },
    {
      id: 4,
      title: "Beef Stew",
      description: "Hearty beef stew with vegetables, perfect for cold days.",
      ingredients: [
        "2 lbs beef chuck",
        "4 carrots",
        "3 potatoes",
        "2 onions",
        "beef broth",
        "tomato paste",
        "herbs",
      ],
      instructions:
        "1. Brown beef in pot\n2. Add vegetables\n3. Pour in broth\n4. Simmer for 2 hours\n5. Season and serve",
      cookTime: "2 hours 30 minutes",
      servings: 6,
      category: "Main Course",
      difficulty: "Hard",
    },
  ],
  selectedRecipe: null,
  currentView: "list",
  favorites: [],
  recommendations: [],
  lastRecommendationUpdate: null,

  // Search and Filter State
  searchTerm: "",
  selectedCategory: "All",
  selectedDifficulty: "All",
  maxCookTime: "",
  sortBy: "title", // 'title', 'cookTime', 'servings', 'difficulty'
  sortOrder: "asc", // 'asc', 'desc'

  // Search and Filter Actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().applyFilters();
  },

  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
    get().applyFilters();
  },

  setSelectedDifficulty: (difficulty) => {
    set({ selectedDifficulty: difficulty });
    get().applyFilters();
  },

  setMaxCookTime: (time) => {
    set({ maxCookTime: time });
    get().applyFilters();
  },

  setSortBy: (sortBy) => {
    set({ sortBy });
    get().applyFilters();
  },

  setSortOrder: (order) => {
    set({ sortOrder: order });
    get().applyFilters();
  },

  clearFilters: () => {
    set({
      searchTerm: "",
      selectedCategory: "All",
      selectedDifficulty: "All",
      maxCookTime: "",
      sortBy: "title",
      sortOrder: "asc",
    });
    get().applyFilters();
  },

  // Get filtered and sorted recipes
  getFilteredRecipes: () => {
    const state = get();
    let filtered = [...state.recipes];

    // Apply search filter
    if (state.searchTerm) {
      const term = state.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term) ||
          recipe.description.toLowerCase().includes(term) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(term)
          )
      );
    }

    // Apply category filter
    if (state.selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.category === state.selectedCategory
      );
    }

    // Apply difficulty filter
    if (state.selectedDifficulty !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.difficulty === state.selectedDifficulty
      );
    }

    // Apply cook time filter
    if (state.maxCookTime) {
      const maxMinutes = parseInt(state.maxCookTime);
      filtered = filtered.filter((recipe) => {
        const cookTimeStr = recipe.cookTime.toLowerCase();
        const timeMatch = cookTimeStr.match(/(\d+)/);
        if (timeMatch) {
          const recipeTime = parseInt(timeMatch[1]);
          if (cookTimeStr.includes("hour")) {
            return recipeTime * 60 <= maxMinutes;
          }
          return recipeTime <= maxMinutes;
        }
        return true;
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aVal, bVal;

      switch (state.sortBy) {
        case "cookTime":
          aVal = parseInt(a.cookTime.match(/(\d+)/)?.[1] || "0");
          bVal = parseInt(b.cookTime.match(/(\d+)/)?.[1] || "0");
          break;
        case "servings":
          aVal = a.servings;
          bVal = b.servings;
          break;
        case "difficulty": {
          const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
          aVal = difficultyOrder[a.difficulty] || 0;
          bVal = difficultyOrder[b.difficulty] || 0;
          break;
        }
        default:
          aVal = a.title.toLowerCase();
          bVal = b.title.toLowerCase();
      }

      if (state.sortOrder === "desc") {
        return bVal > aVal ? 1 : bVal < aVal ? -1 : 0;
      }
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });

    return filtered;
  },

  applyFilters: () => {
    // This function is called to trigger re-renders when filters change
    set({ lastFilterUpdate: Date.now() });
  },

  // Get unique categories for filter dropdown
  getCategories: () => {
    const state = get();
    const categories = [
      ...new Set(state.recipes.map((recipe) => recipe.category)),
    ];
    return categories.sort();
  },

  // Get unique difficulties for filter dropdown
  getDifficulties: () => {
    const state = get();
    const difficulties = [
      ...new Set(state.recipes.map((recipe) => recipe.difficulty)),
    ];
    return difficulties.sort();
  },

  // Existing actions
  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [
        ...state.recipes,
        {
          ...newRecipe,
          id: Date.now(),
          ingredients: newRecipe.ingredients || [],
          instructions: newRecipe.instructions || "",
          cookTime: newRecipe.cookTime || "",
          servings: newRecipe.servings || 1,
          category: newRecipe.category || "Other",
          difficulty: newRecipe.difficulty || "Easy",
        },
      ],
    }));
    get().applyFilters();
    get().generateRecommendations();
  },

  updateRecipe: (id, updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    }));
    get().applyFilters();
    get().generateRecommendations();
  },

  deleteRecipe: (id) => {
  set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    selectedRecipe: state.selectedRecipe?.id === id ? null : state.selectedRecipe,
    currentView: state.selectedRecipe?.id === id ? 'list' : state.currentView,
    favorites: state.favorites.filter(favId => favId !== id) // ADD THIS LINE
  }));
  get().applyFilters();
  get().generateRecommendations(); // ADD THIS LINE
},

  setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
  setCurrentView: (view) => set({ currentView: view }),

  getRecipeById: (id) => {
    const state = get();
    return state.recipes.find((recipe) => recipe.id === parseInt(id));
  },

  // NEW: Favorites Actions
  addFavorite: (recipeId) => {
    set((state) => {
      if (state.favorites.includes(recipeId)) return state;
      return { favorites: [...state.favorites, recipeId] };
    });
    get().generateRecommendations();
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().generateRecommendations();
  },

  isFavorite: (recipeId) => {
    const state = get();
    return state.favorites.includes(recipeId);
  },

  toggleFavorite: (recipeId) => {
    const state = get();
    if (state.isFavorite(recipeId)) {
      state.removeFavorite(recipeId);
    } else {
      state.addFavorite(recipeId);
    }
  },

  getFavoriteRecipes: () => {
    const state = get();
    return state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  },

  generateRecommendations: () => {
    const state = get();

    if (state.favorites.length === 0) {
      set({ recommendations: [], lastRecommendationUpdate: Date.now() });
      return;
    }

    const favoriteRecipes = state.getFavoriteRecipes();
    const nonFavoriteRecipes = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id)
    );

    const scoredRecipes = nonFavoriteRecipes.map((recipe) => {
      let score = 0;

      const categoryMatches = favoriteRecipes.filter(
        (fav) => fav.category === recipe.category
      ).length;
      score += categoryMatches * 3;

      const difficultyMatches = favoriteRecipes.filter(
        (fav) => fav.difficulty === recipe.difficulty
      ).length;
      score += difficultyMatches * 2;

      const avgFavCookTime =
        favoriteRecipes.reduce((sum, fav) => {
          const time = parseInt(fav.cookTime.match(/(\d+)/)?.[1] || "0");
          return sum + (fav.cookTime.includes("hour") ? time * 60 : time);
        }, 0) / favoriteRecipes.length;

      const recipeCookTime = parseInt(
        recipe.cookTime.match(/(\d+)/)?.[1] || "0"
      );
      const recipeTimeInMinutes = recipe.cookTime.includes("hour")
        ? recipeCookTime * 60
        : recipeCookTime;

      const timeDiff = Math.abs(avgFavCookTime - recipeTimeInMinutes);
      if (timeDiff <= 15) score += 2;
      else if (timeDiff <= 30) score += 1;

      const ingredientMatches = favoriteRecipes.reduce((matches, fav) => {
        return (
          matches +
          recipe.ingredients.filter((ingredient) =>
            fav.ingredients.some(
              (favIng) =>
                ingredient
                  .toLowerCase()
                  .includes(favIng.toLowerCase().split(" ").pop()) ||
                favIng
                  .toLowerCase()
                  .includes(ingredient.toLowerCase().split(" ").pop())
            )
          ).length
        );
      }, 0);
      score += ingredientMatches * 0.5;

      return { recipe, score };
    });

    const recommendations = scoredRecipes
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.recipe);

    set({
      recommendations,
      lastRecommendationUpdate: Date.now(),
    });
  },

  getRecommendations: () => {
    const state = get();
    return state.recommendations;
  },
}));
