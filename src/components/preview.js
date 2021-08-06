import create from '@verndale/core'

const components = [
  {
    name: 'accordion',
    loader: () => import('./accordion/Accordion')
  },
  {
    name: 'peopleCard',
    loader: () => import('./people-card-grid/PeopleCard')
  },
  {
    name: 'testimonials',
    loader: () => import('./testimonials/testimonials')
  },
  {
    name: 'alert',
    loader: () => import('./alert/Alert')
  }
]

document.addEventListener('DOMContentLoaded', () => {
  create(components)
})
