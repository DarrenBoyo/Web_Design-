// Example Search Functionality for search.html
function searchRecipes() {
    const searchBar = document.getElementById('searchInput');
    const filter = searchBar.value.toUpperCase();
    const searchResultsDiv = document.getElementById('searchResults');
    // Example list of recipes for demonstration
    const recipes = [
        {name: "Chicken Fajitas", id: "recipe1", tags: ["chicken", "fajitas", "mexican"]},
        {name: "Vegetable Soup", id: "recipe2", tags: ["vegetable", "Vegetable", "soup", "healthy","Vegetarian"]},
        {name: "Pasta Carbonara", id: "recipe3", tags: ["pasta", "carbonara", "italian"]},
		{name: "African Gambas", id: "recipe4", tags: ["African", "Seafood", "Shrimp","Shrimpy"]},
		{name: "Chinese Dumplings", id: "recipe5", tags: ["Chinese", "Dumplings","Asian"]},
    ];

    // Generate HTML for matching recipes
    const searchTerms = filter.toUpperCase().split(' ');

    let resultHTML = '';
    recipes.forEach(recipe => {
        // Check if any search term matches the recipe name or its tags (case-insensitive)
        if (searchTerms.some(term => 
            recipe.name.toUpperCase().includes(term) || 
            recipe.tags.some(tag => tag.toUpperCase().includes(term))
        )) {
            resultHTML += `<ul><li><a href="recipes.html#${recipe.id}">${recipe.name}</a></li></ul>`;
        }
    });

    searchResultsDiv.innerHTML = resultHTML || '<p>No matching recipes found.</p>';
}
