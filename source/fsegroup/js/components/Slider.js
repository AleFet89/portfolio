//slide - slider
export default class Slider {
    static startWatched() {
        let carousels = document.querySelectorAll('[slider-watched]');
        carousels.forEach((carousel) => {
            new Splide(carousel, {
                destroy: 'completely',
                type: 'loop',
                // padding: '5rem',
                // perPage: 3,
                // perMove: 1,
                rewind : true,
                autoWidth: true,
                pagination: false,
                arrows: true,
                // arrowPath: 'm15.5 0.932-4.3 4.38...',
                classes: {
                    // Add classes for arrows.
                    arrows: 'splide__arrows carousel-buttons flex',
                    arrow : 'splide__arrow',
                },
                breakpoints: {
                    1024: {
                        arrows: true,
                        destroy: false
                    },
            }
            }).mount();
        });
    }
    static startAttributes() {
        let carousels = document.querySelectorAll('[slider-attributes]');
        carousels.forEach((carousel) => {
            new Splide(carousel, {
                destroy: 'completely',
                // autoplay: true,
                interval: 5000,
                // speed: 1000,
                // rewindSpeed: 1000,
                pauseOnHover: true,
                // pauseOnFocus: true,
                type: 'loop',
                // padding: '5rem',
                // perPage: 3,
                // perMove: 1,
                rewind : true,
                autoWidth: true,
                pagination: false,
                arrows: false,
                // arrowPath: 'm15.5 0.932-4.3 4.38...',
                classes: {
                    // Add classes for arrows.
                    arrows: 'splide__arrows carousel-buttons flex',
                    arrow : 'splide__arrow',
                },
                breakpoints: {
                    480: {
                        arrows: true,
                        destroy: false
                    },
            }
            }).mount();
        });
    }
    static startGoods() {
        let carousels = document.querySelectorAll('[slider-goods]');
        carousels.forEach((carousel) => {
            new Splide(carousel, {
                destroy: 'completely',
                type: 'loop',
                // padding: '5rem',
                // perPage: 3,
                // perMove: 1,
                rewind : true,
                autoWidth: true,
                pagination: false,
                arrows: false,
                // arrowPath: 'm15.5 0.932-4.3 4.38...',
                classes: {
                    // Add classes for arrows.
                    arrows: 'splide__arrows carousel-buttons flex',
                    arrow : 'splide__arrow',
                },
                breakpoints: {
                    480: {
                        // arrows: true,
                        destroy: false,
                    },
            }
            }).mount();
        });
    }
}