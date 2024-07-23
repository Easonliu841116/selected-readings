import './styles/style.scss';
import './components/common-script.js';
import './components/header.js';
import './components/footer.js';

const bannerSplide = document.querySelector(".slider-banner");
const newsSplide = document.querySelector(".splide-news");
const guideSplide = document.querySelector(".splide-guide");

const banner = new Splide(".splide-banner", {
    type: "loop",
    //drag: false,
    //focus: "center",
    //arrows: false,
    //pagination: false,
    //perPage: 4,
    //fixedWidth: "230px",
    //fixedHeight: "230px",
    gap: "12px",
    breakpoints: {
        //1297: {
        //    perPage: 4,
        //},
        1023: {
            //perPage: 3,
            //fixedWidth: "205px",
            //fixedHeight: "205px",
            gap: "10px",
        },
        767: {
            //perPage: 2,
            //fixedWidth: "119.56px",
            //fixedHeight: "119.56px",
            gap: "10px",
        },
    },
});

const news = new Splide(".splide-news", {
    type: "loop",
    //drag: false,
    //focus: "center",
    //arrows: false,
    //pagination: false,
    perPage: 4,
    //fixedWidth: "230px",
    //fixedHeight: "230px",
    gap: "12px",
    breakpoints: {
        //1297: {
        //    perPage: 4,
        //},
        1023: {
            //perPage: 3,
            //fixedWidth: "205px",
            //fixedHeight: "205px",
            gap: "10px",
        },
        767: {
            //perPage: 2,
            //fixedWidth: "119.56px",
            //fixedHeight: "119.56px",
            gap: "10px",
        },
    },
});

const guide = new Splide(".splide-guide", {
    type: "loop",
    //drag: false,
    //focus: "center",
    //arrows: false,
    //pagination: false,
    perPage: 6,
    //fixedWidth: "230px",
    //fixedHeight: "230px",
    gap: "12px",
    breakpoints: {
        //1297: {
        //perPage: 4,
        //},
        1023: {
            //perPage: 3,
            //fixedWidth: "205px",
            //fixedHeight: "205px",
            gap: "10px",
        },
        767: {
            //perPage: 2,
            //fixedWidth: "119.56px",
            //fixedHeight: "119.56px",
            gap: "10px",
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    banner.mount();
    news.mount();
    guide.mount();
});