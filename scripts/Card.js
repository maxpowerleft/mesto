import { openPopup, popupFullscreen } from './index.js';

export default class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.template-elements')
      .content
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });
    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._likeCard(evt);
    });
    this._element.querySelector('.element__image').addEventListener('click', (evt) => {
      this._openFullscreen(evt);
    });
  }

  _deleteCard(evt) {
    this._element = evt.target.closest('.element');
    this._element.remove();
  }

  _likeCard(evt) {
    evt.target.classList.toggle('element__like-button_active');
  }

  _openFullscreen = () => {
    openPopup(popupFullscreen);
    document.querySelector('.popup__fullscreen-image').src = this._link;
    document.querySelector('.popup__fullscreen-text').textContent = this._name;
  }
}
