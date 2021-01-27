import { initialCards } from './utils.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//  ВСЕ НЕОБХОДИМЫЕ НАСТРОЙКИ ДЛЯ ВАЛИДАЦИИ ФОРМ

const config = {
  formSelector: '.popup__form',
  inputList: '.popup__input',
  buttonElement: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

// ПЕРЕМЕННЫЕ ПОПАПА ПРОФИЛЯ

const popupProfile = document.querySelector('.popup_type_profile');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
const popupOpenButtonProfile = document.querySelector('.profile__edit-button');
const popupCloseButtonProfile = document.querySelector('.popup__close');
const popupUserName = document.querySelector('.popup__user-name');
const popupUserDescription = document.querySelector('.popup__user-description');
const popupFormProfile = document.querySelector('.popup__profile-form');

// ПЕРЕМЕННЫЕ ПОПАПА ЭЛЕМЕНТОВ

const popupElements = document.querySelector('.popup_type_elements');
const cardData = document.querySelector('.popup__elements-form');
const popupOpenButtonElement = document.querySelector('.profile__add-button');
const popupCloseButtonElement = document.querySelector('.popup__close_element');
const elements = document.querySelector('.elements');
const cardTitle = cardData.querySelector('.popup__card-name');
const cardImageSrc = cardData.querySelector('.popup__card-src');

// ПЕРЕМЕННЫЕ FULLSCREEN ПОПАПА

export const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const fullscreenCloseButton = document.querySelector('.popup__close_fullscreen')

//  ЭКЗЕМПЛЯРЫ КЛАССА FormValidator 

const elementsFormValidation = new FormValidator(config, cardData);
const profileFormValidation = new FormValidator(config, popupFormProfile);

// МЕТОДЫ КЛАССА FormValidator

elementsFormValidation.enableValidation();
profileFormValidation.enableValidation();

//  ОБЩИЕ ФУНКЦИИ ЗАКРЫТИЯ И ОТКРЫТИЯ ПОПАПОВ

export const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscButton);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscButton);
}

//  ФУНКЦИИ ГРУППЫ ELEMENTS

initialCards.forEach(item => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  cardPlacement(cardElement);
});

function cardPlacement(element) {
  elements.prepend(element);
}

function handleOpenAddCardPopup() {
  cardTitle.value = '';
  cardImageSrc.value = '';
  elementsFormValidation.cleanInputErrorValidation();
  openPopup(popupElements);
}

function elementsInfoEdit(event) {
  event.preventDefault();
  const card = new Card({
    name: cardTitle.value,
    link: cardImageSrc.value,
  });
  const cardElement = card.generateCard();
  cardPlacement(cardElement);
  closePopup(popupElements);
}

const popupElementsOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(popupElements);
  };
}

// ФУНКЦИИ ГРУППЫ FULLSCREEN

const popupFullscreenOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(popupFullscreen);
  };
}

// ФУНКЦИИ ГРУППЫ PROFILE

function handleOpenProfilePopup() {
  openPopup(popupProfile);
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileUserDescription.textContent;
  profileFormValidation.cleanInputErrorValidation();
}


function profileInfoEdit(event) {
  profileUserName.textContent = popupUserName.value;
  profileUserDescription.textContent = popupUserDescription.value;
  closePopup(popupProfile);
  event.preventDefault();
}

const popupProfileOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(popupProfile);
  };
}

//  ВЫХОД ИЗ ПОПАПА ПО НАЖАТИЮ НА ESC

function closePopupByEscButton(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
  return;
}

// ОСНОВНЫЕ СЛУШАТЕЛИ

popupOpenButtonProfile.addEventListener('click', handleOpenProfilePopup);
popupCloseButtonProfile.addEventListener('click', () => closePopup(popupProfile));
popupOpenButtonElement.addEventListener('click', handleOpenAddCardPopup);
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElements));
fullscreenCloseButton.addEventListener('click', () => closePopup(popupFullscreen));

popupProfile.addEventListener('click', popupProfileOverlay);
popupElements.addEventListener('click', popupElementsOverlay);
popupFullscreen.addEventListener('click', popupFullscreenOverlay);


popupFormProfile.addEventListener('submit', profileInfoEdit);
cardData.addEventListener('submit', elementsInfoEdit);