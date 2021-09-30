module.exports = {
    title: 'Large Image Carousel',
    status: 'ready',
    context: {
        image: "https://via.placeholder.com/883x890",
        imageDescription: "Image descriptionLorem ipsum dolor sit amet",
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet",
        link: '/'
    },
    variants: [
        {
            name: "With Description",
            context: {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: '/'
            }
        },
        {
            name: "Without Description",
            context: {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: null,
                link: '/'
            }
        },
        {
            name: "With Link",
            context: {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                description: "Lorem ipsum dolor sit amet",
                link: '/'
            }
        },
        {
            name: "Without link",
            context: {
                image: "https://via.placeholder.com/883x890",
                imageDescription: "Image descriptionLorem ipsum dolor sit amet",
                title: "Lorem ipsum dolor sit amet",
                escription: "Lorem ipsum dolor sit amet",
                link: null
            }
        }
    ]
}