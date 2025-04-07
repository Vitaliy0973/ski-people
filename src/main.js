import 'normalize.css';
import './style.scss';

import { initRouter } from './js/router';

import { Navigation, Thumbs } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const init = () => {
    initRouter();

    const sliderThumbnails = new Swiper(".slider-thumbnails", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        // loop: true,
    });
    const productSwiper = new Swiper(".main-slider", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".main-slider__btn_next",
            prevEl: ".main-slider__btn_prev",
        },
        modules: [Navigation, Thumbs],
        thumbs: {
            swiper: sliderThumbnails,
        },
        // loop: true,
    });
}

init();
