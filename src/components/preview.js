import create from '@verndale/core'

const components = [
  {
    name: 'accordion',
    loader: () => import('./accordion/Accordion')
  },
  {
    name: 'alert',
    loader: () => import('./alert/Alert')
  }
]

document.addEventListener('DOMContentLoaded', () => {
  create(components)
})
