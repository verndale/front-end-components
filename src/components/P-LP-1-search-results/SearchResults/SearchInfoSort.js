import React from 'react'
import PropTypes from 'prop-types'

function SearchInfoSort(props) {
  const handleChange = e => props.onChange(e.target.value);

  return (
    <div className="search-results__info-sort container">
      <p className="search-results__info">{props.info}</p>
      <div className="search-results__sort-wrapper">
        <select className="search-results__sort" onChange={handleChange} aria-label={props.sortLabel} value={props.value}>
          {props.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    </div>
  )
}

SearchInfoSort.propTypes = {
  info: PropTypes.string.isRequired,
  sortLabel: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchInfoSort
