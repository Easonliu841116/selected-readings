import './src/styles/index.scss';
import './src/components/common-script.js';
import Splide from '@splidejs/splide';

const registrationArea = document.querySelector(".registration-area");

const banner = new Splide(".splide-banner", {
    type: "loop",
    breakpoints: {
        767: {
            arrows: false,
        },
    },
});

const news = new Splide(".splide-news", {
    type: "loop",
    pagination: false,
    perPage: 4,
    fixedWidth: "300px",
    fixedHeight: "346px",
    gap: "20px",
    breakpoints: {
        1297: {
            perPage: 3,

        },
        1023: {
            destroy: true,
        },
    },
});

const guide = new Splide(".splide-guide", {
    type: "loop",
    pagination: false,
    perPage: 6,
    fixedWidth: "190px",
    fixedHeight: "356px",
    gap: "20px",
    breakpoints: {
        1297: {
            perPage: 4,
        },
        1023: {
            arrows: false,
            perPage: 2,
            fixedWidth: "165px",
            fixedHeight: "316px",
            gap: "15px",
        },
    },
});

const registration = new Splide(".splide-registration", {
    type: "slide",
    drag: false,
    autoWidth: true,
    arrows: false,
    pagination: false,
    breakpoints: {
        767: {
            drag: 'free',
        },
    },
});

banner.mount();
news.mount();
guide.mount();
registration.mount();

registrationArea.querySelector('.next').addEventListener('click', () => {
    registration.go('+${1}');
});

registration.on('click', (e) => {
    registration.go(e.index);
});

