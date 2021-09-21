"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchResults;

var _react = _interopRequireDefault(require("react"));

var _Pager = _interopRequireDefault(require("../../N-DYN-2-pagination/Pager"));

var _SearchInfoSort = _interopRequireDefault(require("./SearchInfoSort"));

var _SearchMasthead = _interopRequireDefault(require("./SearchMasthead"));

var _SearchResultsItems = _interopRequireDefault(require("./SearchResultsItems"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _useSearchResults = _interopRequireDefault(require("./useSearchResults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchResults(props) {
  const {
    labels,
    ...config
  } = (0, _useSearchResults.default)(props);
  console.log(config.term);
  const copy = config.term ? labels.summary.replace('{query}', config.term).replace('{count}', config.totalItems) : labels.copy;
  const info = labels.info.replace('{from}', config.from).replace('{to}', config.to).replace('{total}', config.totalItems);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchMasthead.default, {
    heading: labels.heading,
    copy: copy,
    suggestionLabel: labels.suggestion,
    placeholder: labels.searchPlaceholder,
    submitLabel: labels.searchSubmit,
    clearLabel: labels.searchClear,
    suggestion: config.suggestion,
    defaultValue: config.term,
    onSubmit: config.handleSearch
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results__content"
  }, !config.totalItems && !config.loading && !!config.term && /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results__no-results container",
    dangerouslySetInnerHTML: {
      __html: labels.noResultsRtf
    }
  }), !!config.totalItems && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInfoSort.default, {
    info: info,
    sortLabel: labels.sort,
    options: config.sortOptions,
    value: config.sort,
    onChange: config.handleSort
  }), /*#__PURE__*/_react.default.createElement(_SearchResultsItems.default, {
    keys: config.keys,
    items: config.items
  }), /*#__PURE__*/_react.default.createElement(_Pager.default, {
    page: config.page,
    total: config.totalPages,
    onChange: config.handlePageChange,
    prevLabel: labels.prev,
    nextLabel: labels.next
  })), /*#__PURE__*/_react.default.createElement(_Spinner.default, {
    loading: config.loading
  })));
}