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
    name: 'animatedCardCarousel',
    loader: () => import('./animated-card-carousel/AnimatedCardCarousel')
  },
  {
    name: 'cardCarousel',
    loader: () => import('./cards/animated-carousel-card/AnimatedCarouselCard')
  },
  {
    name: 'column-row',
    loader: () => import('./column-row/column-row')
  },
  {
    name: 'fullWidthVideo',
    loader: () => import('./full-width-video-row/full-width-video-row')
  },
  {
    name: 'search-results',
    loader: () => import('./search-results/SearchResults'),
    render(Component, nodeList) {
      const React = require('react');
      const { render } = require('react-dom');
      nodeList.forEach(node =>
        render(React.createElement(Component, node.dataset), node)
      );
    }
  }
]

document.addEventListener('DOMContentLoaded', () => {
  create(components)
})
