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
  },
  {
    name: 'video',
    loader: () => import('./video/video')
  },
  {
    name: 'vimeo',
    loader: () => import('./vimeo/vimeo')
  },
  {
    name: 'youtube',
    loader: () => import('./youtube/youtube')
  },
  {
    name: 'column-row',
    loader: () => import('./column-row/column-row')
  }
]

document.addEventListener('DOMContentLoaded', () => {
  create(components)
})
