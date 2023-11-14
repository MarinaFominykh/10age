import { Section } from '../components/Section.js';
import { Slide } from '../components/Slide.js';
import { Popup } from '../components/Popup.js';
import { FormValues } from '../components/FormValues.js';
import { initialPresents } from '../data/presents.js';
import {
  sectionSelector,
  templateSelector,
  donationsFormSelector,
  openPopupReccurentPayButton,
  MERCHANT_CAMPAIGN_ID,
  KEY,
  shareLink,
} from '../utils/constans.js';
import { copyURL } from '../utils/functions.js';

let id = '';

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

const popup = new Popup();

//открытие и закрытие модального окна:
popup.setEventListeners(id);
openPopupReccurentPayButton.addEventListener('click', () => popup.open());

//обработка клика по кнопке 'присоединиться'
function handleCardClick(_id) {
  id = _id;
  popup.open();
}
//Форма
const formDonations = new FormValues(
  {
    submitForm: (data) => {
      sendPay(data);
      formDonations.reset();
    },
  },
  donationsFormSelector
);
// Отправка формы:
formDonations.setEventListeners();

// инициализация слайдера:
const swiper = new Swiper('.swiper', {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  centeredSlides: false,
  speed: 800,
  simulateTouch: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoHeight: false,
    },
  },
});
// Приведение суммы к минорным единицам:
function addTwoZeros(string) {
  let number = parseInt(string);
  number = number * 100;
  return number;
}
function sendPay(data) {
  const { name, email, company, otherSum, sum: selectedSum } = data;
  const sum = addTwoZeros(otherSum || selectedSum);
  const reccurentPay = id ? 0 : 1;
  let options = {
    widget_key: KEY,
    amount: sum,
    payment_scheme: 'single',
    recurrent_payment: reccurentPay,
    merchant_fields: {
      name,
      email,
      company,
    },
    merchant_campaign_id: MERCHANT_CAMPAIGN_ID,
    user_fundraising_program_id: id || MERCHANT_CAMPAIGN_ID,
    user_email: email,
  };
 
  let M = new Mixplat(options);
  
  M.build();
  M.setSuccessCallback(function (o, i) {
    popup.close();
    id = '';
  });
  M.setCloseCallback(function (o, i) {
    popup.close();
    id = '';
  });
  M.setFailCallback(function(o, i){
  popup.close();
    id = '';
});
}
// Копирование ссылки на страницу в буфер:
shareLink.addEventListener('click', () => copyURL(shareLink));
