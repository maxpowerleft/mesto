// ПЕРЕМЕННЫЕ ПОПАПА ПРОФИЛЯ

export const profileUserName = '.profile__user-name';
export const profileUserDescription = '.profile__user-description';
export const profileUserAvatar = '.profile__avatar';
export const popupOpenButtonProfile = document.querySelector('.profile__edit-button');
export const popupOpenButtonAvatarEdit = document.querySelector('.profile__edit-button-avatar')
export const popupUserName = document.querySelector('.popup__user-name');
export const popupUserDescription = document.querySelector('.popup__user-description');
export const profilePopupForm = document.querySelector('.popup__profile-form');
export const profileAvatarForm = document.querySelector('.popup__avatar-form');

// ПЕРЕМЕННЫЕ ПОПАПА ЭЛЕМЕНТОВ

export const cardData = document.querySelector('.popup__elements-form');
export const popupOpenButtonElement = document.querySelector('.profile__add-button');
export const elements = document.querySelector('.elements');

// ПЕРЕМЕННЫЕ ПОПАПА УДАЛЕНИЯ

export const popupDeleteCard = document.querySelector('.popup_type_delete');

// МАССИВ КАРТОЧЕК

export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//  ВСЕ НЕОБХОДИМЫЕ НАСТРОЙКИ ДЛЯ ВАЛИДАЦИИ ФОРМ

export const config = {
  formSelector: '.popup__form',
  inputList: '.popup__input',
  buttonElement: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}