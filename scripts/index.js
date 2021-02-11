import {
  initialCards,
  config
} from './utils.js';
import Section from './Section.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

// ПЕРЕМЕННЫЕ ПОПАПА ПРОФИЛЯ

const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
const popupOpenButtonProfile = document.querySelector('.profile__edit-button');
const popupUserName = document.querySelector('.popup__user-name');
const popupUserDescription = document.querySelector('.popup__user-description');
const profilePopupForm = document.querySelector('.popup__profile-form');

// ПЕРЕМЕННЫЕ ПОПАПА ЭЛЕМЕНТОВ

const cardData = document.querySelector('.popup__elements-form');
const popupOpenButtonElement = document.querySelector('.profile__add-button');
const elements = document.querySelector('.elements');

//  ЭКЗЕМПЛЯРЫ КЛАССА FormValidator 

const elementsFormValidation = new FormValidator(config, cardData);
const profileFormValidation = new FormValidator(config, profilePopupForm);

// МЕТОДЫ КЛАССА FormValidator

elementsFormValidation.enableValidation();
profileFormValidation.enableValidation();

// ЭКЗЕМПЛЯРЫ КЛАССА UserInfo

const userInfo = new UserInfo(profileUserName, profileUserDescription);

// МЕТОД КЛАССА UserInfo

userInfo.setUserInfo(profileUserName.textContent, profileUserDescription.textContent);

//  ЭКЗЕМПЛЯР КЛАССА PopupWithImage

const popupImage = new PopupWithImage(
  '.popup_type_fullscreen',
  '.popup__fullscreen-image',
  '.popup__fullscreen-text');

// ЭКЗЕМПЛЯРЫ КЛАССА PopupWithForm (Profile)

const popupFormProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: () => {
      userInfo.setUserInfo(popupUserName.value, popupUserDescription.value)
      userInfo.updateUserInfo();
    },
  })

// МЕТОДЫ КЛАССА PopupWithForm 

popupFormProfile.setEventListeners();

// ЭКЗЕМПЛЯРЫ КЛАССА PopupWithForm (Elements)

const popupFormElements = new PopupWithForm({
  popupSelector: '.popup_type_elements',
  handleFormSubmit: (item) => {
    const card = new Card({
        data: item,
        handleCardClick: () => {
          popupImage.open(item.name, item.link)
          popupImage.setEventListeners()
        },
      },
      '.template-elements');
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
  }
})

// МЕТОДЫ КЛАССА PopupWithForm 

popupFormElements.setEventListeners();

//  ЭКЗЕМПЛЯР КЛАССА Section

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card({
          data: item,
          handleCardClick: () => {
            popupImage.open(item.name, item.link)
            popupImage.setEventListeners()
          },
        },
        '.template-elements');
      const cardElement = card.generateCard();
      cardList.setItem(cardElement);
    },
  },
  elements
);

//  МЕТОД КЛАССА Section

cardList.renderItems();

// СЛУШАТЕЛИ

popupOpenButtonProfile.addEventListener('click', () => {
  popupUserName.value = userInfo.getUserInfo().userName;
  popupUserDescription.value = userInfo.getUserInfo().userDescription;
  popupFormProfile.open();
  profileFormValidation.cleanInputErrorValidation();
})

popupOpenButtonElement.addEventListener('click', () => {
  popupFormElements.open();
  elementsFormValidation.cleanInputErrorValidation();
})