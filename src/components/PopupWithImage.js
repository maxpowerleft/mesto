import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, popupImage, popupText) {
    super(popupSelector);
    this._popupImage = document.querySelector(popupImage);
    this._popupText = document.querySelector(popupText);
  }

  open(name, link) {
    super.open();
    this._popupText.textContent = name; // look!!!!!
    this._popupImage.src = link;
  }

  _setEventListeners() {
    super.setEventListeners();
  }
}