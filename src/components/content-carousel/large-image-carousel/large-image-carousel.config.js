module.exports = {
    title: 'Large Image Carousel',
    status: 'ready',
    context: {
        definition: "Lorem ipsum dolor sit amet",
        title: "Lorem ipsum dolor sit amet",
        slides: [{
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: '/'
            },
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: '/'
            },
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                link: '/'
            },
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: null
            }
        ],
        previousSlideLabel: "Previous Slide",
        nextSlideLabel: "Next Slide"
    },
    variants: [{
            name: 'with Subheader',
            context: {
                definition: "Lorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                slides: [{
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    },
                    {
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    },
                    {
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    },
                    {
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    }
                ],
                previousSlideLabel: "Previous Slide",
                nextSlideLabel: "Next Slide"
            }
        },
        {
            name: 'without Subheader',
            context: {
                title: "Lorem ipsum dolor sit amet",
                slides: [{
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    },
                    {
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    },
                    {
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    },
                    {
                        image: 'https://via.placeholder.com/282x159',
                        heading: 'Default',
                        copy: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum.',
                        ctaLabel: 'Action',
                        cta: '#',
                        icon: 'chevron-right'
                    }
                ],
                previousSlideLabel: "Previous Slide",
                nextSlideLabel: "Next Slide"
            }
        },
    ]
}