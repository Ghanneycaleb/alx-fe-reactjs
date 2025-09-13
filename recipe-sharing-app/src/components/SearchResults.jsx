import { useRecipeStore } from '../components/recipeStore';

const SearchResults = ({ filteredRecipes }) => {
  const { searchTerm, selectedCategory, selectedDifficulty, maxCookTime } = useRecipeStore();
  
  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || 
                          selectedDifficulty !== 'All' || maxCookTime;

  if (!hasActiveFilters) {
    return null;
  }

  const getFilterSummary = () => {
    const filters = [];
    if (searchTerm) filters.push(`"${searchTerm}"`);
    if (selectedCategory !== 'All') filters.push(selectedCategory);
    if (selectedDifficulty !== 'All') filters.push(selectedDifficulty);
    if (maxCookTime) filters.push(`≤${maxCookTime} min`);
    return filters;
  };

  const filterSummary = getFilterSummary();

  return (
    <div className="search-results">
      <div className="results-info">
        <span className="results-count">
          {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
        </span>
        {filterSummary.length > 0 && (
          <div className="active-filters">
            <span className="filter-label">Filters:</span>
            {filterSummary.map((filter, index) => (
              <span key={index} className="filter-tag">
                {filter}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;