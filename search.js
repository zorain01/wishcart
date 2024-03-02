const items = [
    'Apple',
    'Shirts',
    'Watch',
    'Pants',
    // ... other items
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Filter items based on search query
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(query)
    );

    // Display filtered results
    resultsContainer.innerHTML = '';
    filteredItems.forEach((item) => {
        const resultItem = document.createElement('div');
        resultItem.textContent = item;
        if (query) {
            const highlightIndex = item.toLowerCase().indexOf(query);
            if (highlightIndex !== -1) {
                const highlightedText = item.substring(0, highlightIndex) +
                    `<span class="highlight">${item.substring(highlightIndex, highlightIndex + query.length)}</span>` +
                    item.substring(highlightIndex + query.length);
                resultItem.innerHTML = highlightedText;
            }
        }
        resultsContainer.appendChild(resultItem);
    });
});
