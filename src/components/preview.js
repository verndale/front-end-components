import create from '@verndale/core';

const components = [
  {
    name: 'accordion',
    loader: () => import('./accordion/Accordion')
  }
];

document.addEventListener('DOMContentLoaded', () => {
  create(components);
});
