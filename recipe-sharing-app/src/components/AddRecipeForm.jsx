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

import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      addRecipe({ 
        title: title.trim(), 
        description: description.trim() 
      });
      setTitle('');
      setDescription('');
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="title">Recipe Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title..."
            disabled={isSubmitting}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your recipe..."
            rows={4}
            disabled={isSubmitting}
          />
        </div>
        
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? 'Adding Recipe...' : 'Add Recipe'}
        </button>
      </div>
    </div>
  );
};

export default AddRecipeForm;