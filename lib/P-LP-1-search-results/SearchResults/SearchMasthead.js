"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchMasthead;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SearchMasthead(props) {
  const [term, setTerm] = (0, _react.useState)(props.defaultValue || '');
  const searchRef = (0, _react.useRef)();
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
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results-masthead"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results-masthead__inner"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "search-results-masthead__title"
  }, props.heading), /*#__PURE__*/_react.default.createElement("p", {
    className: "search-results-masthead__copy"
  }, copy), props.suggestion && /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleSuggestionClick,
    type: "button",
    className: "search-results-masthead__suggestion btn btn--primary btn--outline"
  }, props.suggestionLabel.replace('{keyword}', props.suggestion)), /*#__PURE__*/_react.default.createElement("form", {
    className: "search-results-masthead__form",
    onReset: handleReset,
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("input", {
    "aria-label": props.placeholder,
    ref: searchRef,
    onChange: handleChange,
    type: "serach",
    className: "search-results-masthead__input",
    placeholder: props.placeholder,
    value: term
  }), term && /*#__PURE__*/_react.default.createElement("button", {
    type: "reset",
    className: "search-results-masthead__clear"
  }, props.clearLabel), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "search-results-masthead__submit",
    "aria-label": props.submitLabel
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.81 18.93l-4.98-5.024c2.845-3.306 2.683-8.298-.454-11.442A8.333 8.333 0 008.426 0C6.257 0 4.123.81 2.473 2.464a8.425 8.425 0 000 11.928 8.337 8.337 0 005.951 2.464c1.94 0 3.914-.681 5.466-2.042l4.98 4.992a.64.64 0 00.454.194.639.639 0 00.452-.194c.292-.227.292-.616.033-.876zM3.412 13.485a7.133 7.133 0 010-10.081C4.771 2.042 6.55 1.329 8.458 1.329c1.908 0 3.687.746 5.045 2.075a7.132 7.132 0 010 10.08c-1.358 1.362-3.137 2.075-5.045 2.075a7.11 7.11 0 01-5.046-2.074z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
}

SearchMasthead.defaultProps = {
  suggestion: '',
  defaultValue: ''
};
SearchMasthead.propTypes = {
  heading: _propTypes.default.string.isRequired,
  suggestionLabel: _propTypes.default.string.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  submitLabel: _propTypes.default.string.isRequired,
  clearLabel: _propTypes.default.string.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  suggestion: _propTypes.default.string,
  defaultValue: _propTypes.default.string
};