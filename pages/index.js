import { Section } from '../components/Section.js';
import { Slide } from '../components/Slide.js';
import { initialPresents } from '../data/presents.js';
import {
  sectionSelector,templateSelector

} from '../utils/constans.js';


const slideList = new Section(
  {
    items: initialPresents,
    renderer: (data) => {
      const slideElement = getSlide(data);
      slideList.addItem(slideElement);
    },
  },
  sectionSelector
);

// рендер слайдов:
slideList.renderItems();

// генерация слайдов:
function getSlide(data) {
  const slide = new Slide(data, templateSelector, handleCardClick);
  return slide.getSlide();
}

//обработка клика по кнопке "помочь"
function handleCardClick(_id, _name) {
  id = _id;
  // popup.open(_name);
}

// инициализация слайдера:
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  // loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: false,
  speed: 800,
  // simulateTouch: true,
 
});

