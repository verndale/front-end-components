import { Component } from '@verndale/core';

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
class Accordion extends Component {
  constructor(el) {
    super(el);
  }

  setupDefaults(){
    console.log('defaults');
  }

  addListeners(){
    console.log('listeners');
  }
}

export default Accordion;
