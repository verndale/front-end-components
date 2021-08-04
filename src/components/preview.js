import create from '@verndale/core';

const components = [
  {
    name: 'accordion',
    loader: () => import('./accordion/Accordion')
  },
  {
    name: 'peopleCard',
    loader: () => import('./people-card-grid/PeopleCard')
  }
];

document.addEventListener('DOMContentLoaded', () => {
  create(components);
});
