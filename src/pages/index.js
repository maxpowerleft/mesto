import './index.css';

import {
  profileUserName,
  profileUserDescription,
  popupOpenButtonProfile,
  popupUserName,
  popupUserDescription,
  profilePopupForm,
  cardData,
  popupOpenButtonElement,
  elements,
  initialCards,
  config
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

//  ЭКЗЕМПЛЯРЫ КЛАССА FormValidator 

const elementsFormValidation = new FormValidator(config, cardData);
const profileFormValidation = new FormValidator(config, profilePopupForm);

// МЕТОДЫ КЛАССА FormValidator

elementsFormValidation.enableValidation();
profileFormValidation.enableValidation();

// ЭКЗЕМПЛЯРЫ КЛАССА UserInfo

const userInfo = new UserInfo({
  userName: profileUserName,
  userDescription: profileUserDescription
});

//  ЭКЗЕМПЛЯР КЛАССА PopupWithImage

const popupImage = new PopupWithImage(
  '.popup_type_fullscreen',
  '.popup__fullscreen-image',
  '.popup__fullscreen-text');

// МЕТОДЫ КЛАССА PopupWithImage

popupImage.setEventListeners()
  
// ЭКЗЕМПЛЯРЫ КЛАССА PopupWithForm (Profile)

const popupFormProfile = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data)
    },
  })

// ФУНКЦИЯ ВОЗВРАЩЕНИЯ НОВОЙ КАРТОЧКИ

/*
P.S - изначально я все пытался сделать в utils.js, 
но это требует также импорта PopupWithImage и его вызова, 
что как по мне показалось достаточно странным, ведь там должны храниться лишь функции,
которые "не относятся к какому-то конкретному классу, не уникальны для определенной страницы".
*/

const createCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupImage.open(item.name, item.link)
    },
  },
    '.template-elements');
  return card.generateCard();
};

// МЕТОДЫ КЛАССА PopupWithForm 

popupFormProfile.setEventListeners();

// ЭКЗЕМПЛЯРЫ КЛАССА PopupWithForm (Elements)

const popupFormElements = new PopupWithForm({
  popupSelector: '.popup_type_elements',
  handleFormSubmit: (item) => {
    cardList.setItem(createCard(item));
  }
})

// МЕТОДЫ КЛАССА PopupWithForm 

popupFormElements.setEventListeners();

//  ЭКЗЕМПЛЯР КЛАССА Section

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      cardList.setItem(createCard(item));
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