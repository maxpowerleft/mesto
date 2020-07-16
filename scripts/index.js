const formElement = document.querySelector('.popup__container');
const inputElement = document.querySelector('.popup__input');

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
const templateElements = document.querySelector('.template-elements');
const cardTitle = cardData.querySelector('.popup__card-name');
const cardImageSrc = cardData.querySelector('.popup__card-src');
const initialCards = [
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

// ПЕРЕМЕННЫЕ FULLSCREEN ПОПАПА

const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const fullscreenImage = document.querySelector('.popup__fullscreen-image');
const fullscreenText = document.querySelector('.popup__fullscreen-text');
const fullscreenCloseButton = document.querySelector('.popup__close_fullscreen')

// ФУНКЦИЯ СО СЛУШАТЕЛЯМИ

function addEventListeners (element) {
  element.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  element.querySelector('.element__like-button').addEventListener('click', likeCard);
  element.querySelector('.element__image').addEventListener('click', openFullscreen);
}

//  ОБЩИЕ ФУНКЦИИ

const popupToggle = function (popup) {
  popup.classList.toggle('popup_opened');
}

//  ФУНКЦИИ ГРУППЫ ELEMENTS

function createCard(cardData) {
  const element = templateElements.content.cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  elementTitle.textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  addEventListeners(element);
  return element;
}

function cardPlacement (element) {
  elements.prepend(element);
}

initialCards.forEach(cardData => {
  const element = createCard(cardData);
  cardPlacement(element);
})

function deleteCard (evt) {
  const element = evt.target.closest('.element')
  element.remove();
}

function likeCard (evt) {
  evt.target.classList.toggle('element__like-button_active');
}

function handleOpenAddCardPopup () {
    popupToggle(popupElements);
    cardTitle.value = '';
    cardImageSrc.value = '';
  }

function elementsInfoEdit (event) {
  event.preventDefault();
  const element = createCard({
    name: cardTitle.value,
    link: cardImageSrc.value,
  });
  popupToggle(popupElements);
  cardPlacement(element);
}

const popupElementsOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  };
  popupToggle(popupElements);
}

// ФУНКЦИИ ГРУППЫ FULLSCREEN

function openFullscreen (evt) {
  const element = evt.target.closest('.element__image');
  fullscreenImage.src = element.src;
  fullscreenText.textContent = element.alt;
  popupToggle(popupFullscreen);
}

const popupFullscreenOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  };
  popupToggle(popupFullscreen);
}

// ФУНКЦИИ ГРУППЫ PROFILE

function handleOpenProfilePopup () {
    popupToggle(popupProfile);
    popupUserName.value = profileUserName.textContent;
    popupUserDescription.value = profileUserDescription.textContent;
  }


function profileInfoEdit (event) {
  profileUserName.textContent = popupUserName.value;
  profileUserDescription.textContent = popupUserDescription.value;
  popupToggle(popupProfile);
  event.preventDefault();
}

const popupProfileOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  };
  popupToggle(popupProfile);
}

// ПРОВЕРКА ВАЛИДНОСТИ ФОРМЫ PROFILE 

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

// ОСНОВНЫЕ СЛУШАТЕЛИ

popupOpenButtonProfile.addEventListener('click', handleOpenProfilePopup);
popupCloseButtonProfile.addEventListener('click', () => popupToggle(popupProfile));
popupOpenButtonElement.addEventListener('click', handleOpenAddCardPopup);
popupCloseButtonElement.addEventListener('click', () => popupToggle(popupElements));
fullscreenCloseButton.addEventListener('click', () => popupToggle(popupFullscreen));

popupProfile.addEventListener('click', popupProfileOverlay);
popupElements.addEventListener('click', popupElementsOverlay);
popupFullscreen.addEventListener('click', popupFullscreenOverlay);

popupFormProfile.addEventListener('submit', profileInfoEdit);
cardData.addEventListener('submit', elementsInfoEdit);

enableValidation();