module.exports = {
    title: 'Large Image Carousel',
    status: 'ready',
    context: {
        definition: "Lorem ipsum dolor sit amet",
        title: "Lorem ipsum dolor sit amet",
        slides: [
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: "/"
            },
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: null,
                link: "/"
            },
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: null
            },
            {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: null,
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
                slides: [
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: "Lorem ipsum dolor sit amet",
                        link: "/"
                    },
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: null,
                        link: "/"
                    },
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: "Lorem ipsum dolor sit amet",
                        link: null
                    },
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: null,
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
                slides: [
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: "Lorem ipsum dolor sit amet",
                        link: "/"
                    },
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: null,
                        link: "/"
                    },
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: "Lorem ipsum dolor sit amet",
                        link: null
                    },
                    {
                        image: "https://via.placeholder.com/883x890",
                        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                        title: "Lorem ipsum dolor sit amet",
                        description: null,
                        link: null
                    }
                ],
                previousSlideLabel: "Previous Slide",
                nextSlideLabel: "Next Slide"
            }
        },
    ]
}