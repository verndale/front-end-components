import create from '@verndale/core'

const components = [
  {
    name: 'accordion',
    loader: () => import('./C-FMT-1-accordions-module/Accordion')
  },
  {
    name: 'peopleCard',
    loader: () => import('./C-GRD-6-people-card-grid/PeopleCard')
  },
  {
    name: 'testimonials',
    loader: () => import('./C-CSL-5-testimonials-carousel/testimonials')
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
    loader: () => import('./C-CSL-6-animated-card-carousel/AnimatedCardCarousel')
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
    loader: () => import('./C-FMT-11-full-width-video-row/full-width-video-row')
  },
  {
    name: 'search-results',
    loader: () => import('./P-LP-1-search-results/SearchResults'),
    render(Component, nodeList) {
      const React = require('react');
      const { render } = require('react-dom');
      nodeList.forEach(node =>
        render(React.createElement(Component, node.dataset), node)
      );
    }
  },
  {
    name: 'contentCarousel',
    loader: () => import('./content-carousel/content-carousel')
  },
  {
    name: 'tabbed-content',
    loader: () => import('./C-FMT-10-tabbed-content/tabbed-content')
  }
]

document.addEventListener('DOMContentLoaded', () => {
  create(components)
})
