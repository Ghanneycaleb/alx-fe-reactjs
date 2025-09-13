import { useRecipeStore } from '../components/recipeStore';

const FilterPanel = () => {
  const {
    selectedCategory,
    selectedDifficulty,
    maxCookTime,
    sortBy,
    sortOrder,
    setSelectedCategory,
    setSelectedDifficulty,
    setMaxCookTime,
    setSortBy,
    setSortOrder,
    clearFilters,
    getCategories,
    getDifficulties
  } = useRecipeStore();

  const categories = getCategories();
  
  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filters & Sort</h3>
        <button onClick={clearFilters} className="clear-filters-btn">
          Clear All
        </button>
      </div>
      
      <div className="filter-grid">
        {/* Category Filter */}
        <div className="filter-group">
          <label>Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="filter-group">
          <label>Difficulty</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Levels</option>
            {getDifficulties().map(difficulty => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>

        {/* Cook Time Filter */}
        <div className="filter-group">
          <label>Max Cook Time (minutes)</label>
          <input
            type="number"
            placeholder="e.g., 30"
            value={maxCookTime}
            onChange={(e) => setMaxCookTime(e.target.value)}
            className="filter-input"
            min="1"
          />
        </div>

        {/* Sort By */}
        <div className="filter-group">
          <label>Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="title">Name</option>
            <option value="cookTime">Cook Time</option>
            <option value="servings">Servings</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </div>

        {/* Sort Order */}
        <div className="filter-group">
          <label>Order</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="filter-select"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;