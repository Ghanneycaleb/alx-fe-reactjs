import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe, setCurrentView } = useRecipeStore();
  const [formData, setFormData] = useState({
    title: recipe?.title || '',
    description: recipe?.description || '',
    ingredients: recipe?.ingredients?.join('\n') || '',
    instructions: recipe?.instructions || '',
    cookTime: recipe?.cookTime || '',
    servings: recipe?.servings || 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in title and description');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      const updatedRecipe = {
        ...formData,
        ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
        servings: parseInt(formData.servings) || 1
      };
      
      updateRecipe(recipe.id, updatedRecipe);
      setCurrentView('details');
      setIsSubmitting(false);
    }, 300);
  };

  const handleCancel = () => {
    setCurrentView('details');
  };

  return (
    <div className="edit-recipe-form">
      <div className="form-header">
        <h2>Edit Recipe</h2>
        <div className="form-actions">
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          <button onClick={handleSubmit} disabled={isSubmitting} className="save-btn">
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-section">
          <div className="input-group">
            <label>Recipe Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter recipe title..."
            />
          </div>

          <div className="input-group">
            <label>Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Describe your recipe..."
              rows={3}
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Cook Time</label>
              <input
                type="text"
                value={formData.cookTime}
                onChange={(e) => handleChange('cookTime', e.target.value)}
                placeholder="e.g., 30 minutes"
              />
            </div>
            <div className="input-group">
              <label>Servings</label>
              <input
                type="number"
                value={formData.servings}
                onChange={(e) => handleChange('servings', e.target.value)}
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="input-group">
            <label>Ingredients (one per line)</label>
            <textarea
              value={formData.ingredients}
              onChange={(e) => handleChange('ingredients', e.target.value)}
              placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
              rows={8}
            />
          </div>

          <div className="input-group">
            <label>Instructions</label>
            <textarea
              value={formData.instructions}
              onChange={(e) => handleChange('instructions', e.target.value)}
              placeholder="Step-by-step cooking instructions..."
              rows={8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecipeForm;