import { useRecipeStore } from '../components/recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search recipes, ingredients, or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon"></span>
      </div>
    </div>
  );
};

export default SearchBar;