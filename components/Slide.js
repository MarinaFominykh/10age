import { addSpaces } from '../utils/functions.js';
export class Slide {
    constructor (data, cardTemplateSelector, handleCardClick) {
    this._id = data.id;
    this._progressId= data.progressId;
    this._location = data.location; 
    this._title = data.title;
    this._src = data.src;
    this._description = data.description;
    this._currentSum = data.currentSum;
    this._limit = data.limit;
    this._limitMonth = data.limitMonth;
    this._preview = data.preview;
    this._template = document
      .querySelector(cardTemplateSelector)
      .content.querySelector('.swiper-slide');
    this._handleCardClick = handleCardClick;
    }

      _setEventListeners() {
   
    this._slideHelpButton.addEventListener('click', () => {
      this._handleCardClick(this._id);
    });
  }

  getSlide = () => {
    this._slideElement = this._template.cloneNode(true);
    this._slideImage = this._slideElement.querySelector('.presents__card-img');
    
    this._slideLocation = this._slideElement.querySelector('.presents__card-title');
    this._slideTitle = this._slideElement.querySelector('.presents__card-subtitle');
    this._slideDescription = this._slideElement.querySelector(
      '.presents__card-description'
    );
    this._slideProgress = this._slideElement.querySelector('.presents__progress');
    // this._slideSum = this._slideElement.querySelector('.presents__current');
    // this._slideLimit = this._slideElement.querySelector('.presents__limit');
    // this._slideLimitMonth= this._slideElement.querySelector('.presents__limit-month');
    this._slideHelpButton = this._slideElement.querySelector('.presents__button');
    this._slideImage.src=`./images/presents/${this._src}.png`;
    this._slideImage.alt=this._title;
    this._slideLocation.textContent = this._location;
    this._slideTitle.textContent = this._title;
     this._slideDescription.textContent = this._description;
    this._slideProgress.id = this._progressId;
    // this._slideSum.textContent = `${addSpaces(this._currentSum)} ₽`;
    // this._slideLimit.textContent = `${addSpaces(this._limit) } ₽`;
    this._setEventListeners();

    return this._slideElement;
  };

}
