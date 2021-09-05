import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

export default function SearchMasthead(props) {
  const [term, setTerm] = useState(props.defaultValue || '');
  const searchRef = useRef();
  const copy = props.copy;
  const handleChange = e => setTerm(e.target.value);

  const handleReset = () => {
    setTerm('');
    searchRef.current.focus();
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(term);
  };

  const handleSuggestionClick = () => {
    setTerm(props.suggestion);
    props.onSubmit(props.suggestion);
  }

  return (
    <div className="search-results-masthead">
      <div className="container">
        <div className="search-results-masthead__inner">
          <h1 className="search-results-masthead__title">{props.heading}</h1>
          <p className="search-results-masthead__copy">{copy}</p>
          {props.suggestion && <button onClick={handleSuggestionClick} type="button" className="search-results-masthead__suggestion btn btn--primary btn--outline">
            {props.suggestionLabel.replace('{keyword}', props.suggestion)}
          </button>}
          <form className="search-results-masthead__form" onReset={handleReset} onSubmit={handleSubmit}>
            <input aria-label={props.placeholder} ref={searchRef} onChange={handleChange} type="serach" className="search-results-masthead__input" placeholder={props.placeholder} value={term} />
            {term && <button type="reset" className="search-results-masthead__clear">{props.clearLabel}</button>}
            <button type="submit" className="search-results-masthead__submit" aria-label={props.submitLabel}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M19.81 18.93l-4.98-5.024c2.845-3.306 2.683-8.298-.454-11.442A8.333 8.333 0 008.426 0C6.257 0 4.123.81 2.473 2.464a8.425 8.425 0 000 11.928 8.337 8.337 0 005.951 2.464c1.94 0 3.914-.681 5.466-2.042l4.98 4.992a.64.64 0 00.454.194.639.639 0 00.452-.194c.292-.227.292-.616.033-.876zM3.412 13.485a7.133 7.133 0 010-10.081C4.771 2.042 6.55 1.329 8.458 1.329c1.908 0 3.687.746 5.045 2.075a7.132 7.132 0 010 10.08c-1.358 1.362-3.137 2.075-5.045 2.075a7.11 7.11 0 01-5.046-2.074z" fill="currentColor" fillRule="nonzero"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

SearchMasthead.defaultProps = {
  suggestion: '',
  defaultValue: ''
}

SearchMasthead.propTypes = {
  heading: PropTypes.string.isRequired,
  suggestionLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  clearLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  suggestion: PropTypes.string,
  defaultValue: PropTypes.string
}
