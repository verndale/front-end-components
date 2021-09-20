import React from 'react'
import PropTypes from 'prop-types'
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'

function SearchResultsItems({ keys, items }) {
  return (
    <ul className="search-results__items container">
      {items.map(item => (
        <li key={item[keys.id]} className="search-results-item">
          <a className="search-results-item__link" href={item[keys.url]}>
            <h2 className="search-results-item__heading">{item[keys.heading]}</h2>
            {item[keys.description] && (
              <div className="search-results-item__description rtf">
                <HTMLEllipsis
                  unsafeHTML={item[keys.description]}
                  maxLine={2}
                  ellipsis='...'
                  basedOn='letters'
                />
              </div>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}

SearchResultsItems.propTypes = {
  keys: PropTypes.shape({
    url: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  items: PropTypes.array.isRequired
}

export default SearchResultsItems
