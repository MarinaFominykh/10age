import { Section } from '../components/Section.js';
import { Slide } from '../components/Slide.js';
import { Popup } from '../components/Popup.js';
import { FormValues } from '../components/FormValues.js';
import { initialPresents } from '../data/presents.js';
import {
  sectionSelector,templateSelector, donationsFormSelector

} from '../utils/constans.js';

const openPopupButton = document.querySelector('.presents__button')

let id;


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


const popup = new Popup(id);

//открытие и закрытие модального окна:
popup.setEventListeners();
openPopupButton.addEventListener('click',handleCardClick)
//обработка клика по кнопке 'присоединиться'
function handleCardClick(_id, _name) {
  id = _id;
  popup.open(_name);
}
//Форма
const formDonations = new FormValues(
  {
    submitForm: (data) => {
      // sendPayTotal(data);
      // formDonations.reset();
    },
  },
  donationsFormSelector
);
// Отправка формы:
formDonations.setEventListeners();

// инициализация слайдера:
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
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
  breakpoints: {
 
    820: {
      slidesPerView: 2,
      spaceBetween: 20
    },
   
  }
});

