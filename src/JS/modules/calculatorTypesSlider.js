import Swiper from "swiper";
import { Navigation } from "swiper/modules";

function calculateRange() {
    const calculatorTypesSlider1 = new Swiper('.calculator__types-slider_1', {
        slidesPerView: 1,
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.calculator__types-slider-arrow_next',
            prevEl: '.calculator__types-slider-arrow_prev',
        }
    });

    const calculatorTypesSlider2 = new Swiper('.calculator__types-slider_2', {
        slidesPerView: 1,
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.calculator__types-slider-arrow_next',
            prevEl: '.calculator__types-slider-arrow_prev',
        }
    });
}

export default calculateRange;