import Popup from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = document.querySelector('.popup__form');
  }

  handleDelete(formCase) {
    this._handleDeleteForm = formCase;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleDeleteForm();
    })
  }
}
