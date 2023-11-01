const sectionSelector = '.presents__list';
const templateSelector = '.template';
const donationsFormSelector = '.donation';
const personalFormSelector = '.personal-donation';
const shareLink = document.querySelector('.share-link');
const donations = document.querySelectorAll('.donations__item');
const slideButtons = document.querySelectorAll('.slide__button');
const openPopupReccurentPayButton = document.querySelector('.main-button');
const progressValue = document.querySelector('.progress__span_curent-sum');
const KEY = 'c07ea3d2-b1cf-4806-ac51-10ea6581e2f2';
const MERCHANT_CAMPAIGN_ID = '10LET';

export {
  sectionSelector,
  templateSelector,
  shareLink,
  donations,
  slideButtons,
  openPopupReccurentPayButton,
  donationsFormSelector,
  personalFormSelector,
  progressValue,
  KEY,
  MERCHANT_CAMPAIGN_ID,
};
