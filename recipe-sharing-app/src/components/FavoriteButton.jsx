import React from 'react';
import { useRecipeStore } from '../components/recipeStore';
// import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId, className = "" }) => {
  const { isFavorite, addFavorite, removeFavorite } = useRecipeStore();
  const favorited = isFavorite(recipeId);

  const handleToggleFavorite = () => {
    if (favorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`favorite-btn ${favorited ? 'favorited' : ''} ${className}`}
      title={favorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      {favorited ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;