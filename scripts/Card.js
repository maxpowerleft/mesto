export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
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
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _deleteCard(evt) {
    this._element = evt.target.closest('.element');
    this._element.remove();
    this._element = null;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('element__like-button_active');
  }

  // _openFullscreen = () => {
  //   // Я, честно говоря, не совсем понял как это реализовать, но я позднее пообщаюсь с наставником :)
  //   openPopup(popupFullscreen);
  //   document.querySelector('.popup__fullscreen-image').src = this._link;
  //   document.querySelector('.popup__fullscreen-text').textContent = this._name;
  // }
}
