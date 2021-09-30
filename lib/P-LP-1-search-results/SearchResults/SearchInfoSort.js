"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SearchInfoSort(props) {
  const handleChange = e => props.onChange(e.target.value);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results__info-sort container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "search-results__info"
  }, props.info), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results__sort-wrapper"
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "search-results__sort",
    onChange: handleChange,
    "aria-label": props.sortLabel,
    value: props.value
  }, props.options.map(o => /*#__PURE__*/_react.default.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)))));
}

SearchInfoSort.propTypes = {
  info: _propTypes.default.string.isRequired,
  sortLabel: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired
  })).isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = SearchInfoSort;
exports.default = _default;