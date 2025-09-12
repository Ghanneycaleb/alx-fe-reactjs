import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe, setCurrentView } = useRecipeStore();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    setCurrentView('list');
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div className="delete-confirm">
        <span className="confirm-text">Delete this recipe?</span>
        <button onClick={handleDelete} className="confirm-delete-btn">Yes</button>
        <button onClick={() => setShowConfirm(false)} className="cancel-delete-btn">No</button>
      </div>
    );
  }

  return (
    <button onClick={() => setShowConfirm(true)} className="delete-btn">
       Delete
    </button>
  );
};

export default DeleteRecipeButton;