"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@verndale/core");

/**
 * `Accordion`
 *
 *
 * @example
 * import { Accordion } from '@verndale/front-end-components';
 *
 * class Foo {
 *   construction(el){
 *     super(el);
 *   }
 * }
 */
class Accordion extends _core.Component {
  constructor(el) {
    super(el);
  }

  setupDefaults() {
    console.log('defaults');
  }

  addListeners() {
    console.log('listeners');
  }

}

var _default = Accordion;
exports.default = _default;