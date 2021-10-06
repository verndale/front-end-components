import React from 'react'
import Pager from '../../N-DYN-2-pagination/Pager';
import SearchInfoSort from './SearchInfoSort';
import SearchMasthead from './SearchMasthead';
import SearchResultsItems from './SearchResultsItems';
import Spinner from './Spinner';
import useSearchResults from './useSearchResults'

export default function SearchResults(props) {
  const { labels, ...config } = useSearchResults(props);
  const copy = config.term
    ? labels.summary.replace('{query}', config.term).replace('{count}', config.totalItems)
    : labels.copy;

  const info = labels.info.replace('{from}', config.from).replace('{to}', config.to).replace('{total}', config.totalItems)

  return (
    <>
      <SearchMasthead
        heading={labels.heading}
        copy={copy}
        suggestionLabel={labels.suggestion}
        placeholder={labels.searchPlaceholder}
        submitLabel={labels.searchSubmit}
        clearLabel={labels.searchClear}
        suggestion={config.suggestion}
        defaultValue={config.term}
        onSubmit={config.handleSearch}
      />
      <div className="search-results__content">
        {!config.totalItems && !config.loading && !!config.term && <div className="search-results__no-results container" dangerouslySetInnerHTML={{ __html: labels.noResultsRtf }} />}
        {!!config.totalItems && (
          <>
            <SearchInfoSort
              info={info}
              sortLabel={labels.sort}
              options={config.sortOptions}
              value={config.sort}
              onChange={config.handleSort}
            />
            <SearchResultsItems
              keys={config.keys}
              items={config.items}
            />
            <Pager
              page={config.page}
              total={config.totalPages}
              onChange={config.handlePageChange}
              prevLabel={labels.prev}
              nextLabel={labels.next}
            />
          </>
        )}
        <Spinner loading={config.loading} />
      </div>
    </>
  )
}
