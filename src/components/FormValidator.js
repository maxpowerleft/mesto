// КЛАСС ПРОВЕРКИ ВАЛИДНОСТИ ФОРМ

export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputList = config.inputList;
    this._buttonElement = config.buttonElement;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;

    this._allInputList = Array.from(this._formElement.querySelectorAll(this._inputList));
    this._submitButtonElement = this._formElement.querySelector(this._buttonElement);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  cleanInputErrorValidation = () => {
    this._allInputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
    this._toggleButtonState();
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._allInputList)) {
      this._submitButtonElement.setAttribute('disabled', true);
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButtonElement.removeAttribute('disabled');
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  _setEventListeners = () => {
    this._allInputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
      this._toggleButtonState();
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}