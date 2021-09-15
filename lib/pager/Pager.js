"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pager = props => {
  const {
    page,
    total,
    onChange
  } = props;
  const pages = (0, _utils.getPages)(page, total);
  if (pages.length <= 1) return null;
  const isPrevDisabled = page === 1;
  const isNextDisabled = page === total;

  const previous = /*#__PURE__*/_react.default.createElement("li", {
    key: "prev",
    className: `pager__page pager__page--prev ${isPrevDisabled ? 'pager__page--disabled' : ''}`
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => onChange(page - 1),
    className: "pager__button",
    disabled: isPrevDisabled,
    title: 'prev'
  }, props.prevLabel, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 320 202",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "currentColor",
    d: "M70.356 82.67l56.762-56.641L101.217 0 0 101l101.217 101 25.901-26.029-56.762-56.64 249.644.183V82.853z",
    fillRule: "nonzero"
  }))));

  const next = /*#__PURE__*/_react.default.createElement("li", {
    key: "next",
    className: `pager__page pager__page--next ${isNextDisabled ? 'pager__page--disabled' : ''}`
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => onChange(page + 1),
    className: "pager__button",
    disabled: isNextDisabled,
    title: 'next'
  }, props.nextLabel, /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 320 202",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "currentColor",
    d: "M249.644 119.33l-56.762 56.641L218.783 202 320 101 218.783 0l-25.901 26.029 56.762 56.64L0 82.487v36.661z",
    fillRule: "nonzero"
  }))));

  return /*#__PURE__*/_react.default.createElement("ol", {
    className: "pager"
  }, previous, pages.map(p => /*#__PURE__*/_react.default.createElement("li", {
    key: `${p.page}-${p.isEllipses ? 'ellipses' : ''}`,
    className: `pager__page ${p.isCurrent ? 'pager__page--current' : ''} ${p.isEllipses ? 'pager__page--ellipses' : ''}`
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: p.isCurrent,
    onClick: () => onChange(p.page),
    className: "pager__button"
  }, p.isEllipses ? '...' : p.page))), next);
};

var _default = Pager;
exports.default = _default;