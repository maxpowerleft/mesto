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
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputList));
    const buttonElement = this._formElement.querySelector(this._buttonElement);
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      this._toggleButtonState(inputList, buttonElement);
    })
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

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  _setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputList));
    const buttonElement = this._formElement.querySelector(this._buttonElement);
    // У меня все ломается :/
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}