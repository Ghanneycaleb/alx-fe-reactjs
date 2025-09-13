// import { useState } from 'react';
// import { useRecipeStore } from '../recipeStore';

// const AddRecipeForm = () => {
//   const addRecipe = useRecipeStore(state => state.addRecipe);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!title.trim() || !description.trim()) {
//       alert('Please fill in both fields');
//       return;
//     }

//     addRecipe({
//       title: title.trim(),
//       description: description.trim()
//     });

//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <div>
//       <h2>Add New Recipe</h2>
//       <div>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Recipe Title"
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Recipe Description"
//         />
//         <button onClick={handleSubmit}>Add Recipe</button>
//       </div>
//     </div>
//   );
// };

// export default AddRecipeForm;

// import { useState } from "react";
// import { useRecipeStore } from "./recipeStore";

// const AddRecipeForm = () => {
//   const addRecipe = useRecipeStore((state) => state.addRecipe);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!title.trim() || !description.trim()) {
//       alert("Please fill in both title and description");
//       return;
//     }

//     setIsSubmitting(true);

    
//     setTimeout(() => {
//       addRecipe({
//         title: title.trim(),
//         description: description.trim(),
//       });
//       setTitle("");
//       setDescription("");
//       setIsSubmitting(false);
//     }, 300);
//   };

//   return (
//     <div className="add-recipe-form">
//       <h2>Add New Recipe</h2>
//       <div className="form-container">
//         <div className="input-group">
//           <label htmlFor="title">Recipe Title</label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter recipe title..."
//             disabled={isSubmitting}
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Describe your recipe..."
//             rows={4}
//             disabled={isSubmitting}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//           className="submit-btn"
//         >
//           {isSubmitting ? "Adding Recipe..." : "Add Recipe"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddRecipeForm;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useRecipeStore } from '../components/recipeStore';

// const AddRecipeForm = () => {
//   const { addRecipe } = useRecipeStore();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     ingredients: '',
//     instructions: '',
//     cookTime: '',
//     servings: 1
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!formData.title.trim() || !formData.description.trim()) {
//       alert('Please fill in title and description');
//       return;
//     }

//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       const newRecipe = {
//         ...formData,
//         ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
//         servings: parseInt(formData.servings) || 1
//       };
      
//       addRecipe(newRecipe);
//       setIsSubmitting(false);
//       navigate('/');
//     }, 300);
//   };

//   const handleCancel = (event) => {
//     event.preventDefault?.();
//     navigate('/');
//   };

//   return (
//     <div className="add-recipe-form">
//       <div className="form-header">
//         <h2>Add New Recipe</h2>
//         <div className="form-actions">
//           <button onClick={handleCancel} className="cancel-btn">Cancel</button>
//           <button onClick={handleSubmit} disabled={isSubmitting} className="save-btn">
//             {isSubmitting ? 'Adding...' : 'Add Recipe'}
//           </button>
//         </div>
//       </div>

//       <div className="form-grid">
//         <div className="form-section">
//           <div className="input-group">
//             <label>Recipe Title *</label>
//             <input
//               type="text"
//               value={formData.title}
//               onChange={(e) => handleChange('title', e.target.value)}
//               placeholder="Enter recipe title..."
//             />
//           </div>

//           <div className="input-group">
//             <label>Description *</label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => handleChange('description', e.target.value)}
//               placeholder="Describe your recipe..."
//               rows={3}
//             />
//           </div>

//           <div className="form-row">
//             <div className="input-group">
//               <label>Cook Time</label>
//               <input
//                 type="text"
//                 value={formData.cookTime}
//                 onChange={(e) => handleChange('cookTime', e.target.value)}
//                 placeholder="e.g., 30 minutes"
//               />
//             </div>
//             <div className="input-group">
//               <label>Servings</label>
//               <input
//                 type="number"
//                 value={formData.servings}
//                 onChange={(e) => handleChange('servings', e.target.value)}
//                 min="1"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <div className="input-group">
//             <label>Ingredients (one per line)</label>
//             <textarea
//               value={formData.ingredients}
//               onChange={(e) => handleChange('ingredients', e.target.value)}
//               placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
//               rows={8}
//             />
//           </div>

//           <div className="input-group">
//             <label>Instructions</label>
//             <textarea
//               value={formData.instructions}
//               onChange={(e) => handleChange('instructions', e.target.value)}
//               placeholder="Step-by-step cooking instructions..."
//               rows={8}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddRecipeForm;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

const AddRecipeForm = () => {
  const { addRecipe, getCategories, getDifficulties } = useRecipeStore();
  const navigate = useNavigate();
  const categories = getCategories();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    cookTime: '',
    servings: 1,
    category: 'Other',
    difficulty: 'Easy'
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
      const newRecipe = {
        ...formData,
        ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
        servings: parseInt(formData.servings) || 1
      };
      
      addRecipe(newRecipe);
      setIsSubmitting(false);
      navigate('/');
    }, 300);
  };

  const handleCancel = (event) => {
    event.preventDefault?.();
    navigate('/');
  };

  return (
    <div className="add-recipe-form">
      <div className="form-header">
        <h2>Add New Recipe</h2>
        <div className="form-actions">
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          <button onClick={handleSubmit} disabled={isSubmitting} className="save-btn">
            {isSubmitting ? 'Adding...' : 'Add Recipe'}
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

          <div className="form-row">
            <div className="input-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
              >
                <option value="Other">Other</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label>Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => handleChange('difficulty', e.target.value)}
              >
                {getDifficulties().map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
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

export default AddRecipeForm;