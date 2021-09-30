module.exports = {
  title: 'P-LP-1: Search Results',
  status: 'wip',
  context: {
    endpoint: 'https://www.haemonetics.com/search?json=true',
    searchQueryKey: 'query',
    sortQueryKey: 'sort',
    pageQueryKey: 'page',
    resultsPerPage: 10,
    labels: JSON.stringify({
      heading: 'Search Results',
      copy: 'Perform a search to see some results',
      summary: 'Your search for "{query}" provided {count} result(s)',
      suggestion: 'Did you mean: {keyword}',
      searchPlaceholder: 'Search term',
      searchSubmit: 'Perform search',
      searchClear: 'Clear',
      info: 'Showing {from} - {to} of {total} results',
      sort: 'Sort',
      noResultsRtf: 'No results found, please refine your search',
      prev: 'Previous page',
      next: 'Next page'
    }),
    resultsKeys: JSON.stringify({
      items: 'results',
      totalItems: 'resultsCount',
      suggestion: 'resultsSuggestion',
      id: 'id',
      description: 'description',
      heading: 'header',
      url: 'url'
    }),
    sortOptions: JSON.stringify([
      { value: 'relevance', label: 'Sort by Relevance' },
      { value: 'date', label: 'Sort by Date' },
      { value: 'az', label: 'Sort A-Z' },
      { value: 'za', label: 'Sort Z-A' }
    ])
  }
}
