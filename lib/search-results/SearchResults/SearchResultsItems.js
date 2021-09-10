"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _html = _interopRequireDefault(require("react-lines-ellipsis/lib/html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchResultsItems({
  keys,
  items
}) {
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "search-results__items container"
  }, items.map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item[keys.id],
    className: "search-results-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "search-results-item__link",
    href: item[keys.url]
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "search-results-item__heading"
  }, item[keys.heading]), item[keys.description] && /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results-item__description rtf"
  }, /*#__PURE__*/_react.default.createElement(_html.default, {
    unsafeHTML: item[keys.description],
    maxLine: 2,
    ellipsis: "...",
    basedOn: "letters"
  }))))));
}

SearchResultsItems.propTypes = {
  keys: _propTypes.default.shape({
    url: _propTypes.default.string.isRequired,
    heading: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired
  }).isRequired,
  items: _propTypes.default.array.isRequired
};
var _default = SearchResultsItems;
exports.default = _default;