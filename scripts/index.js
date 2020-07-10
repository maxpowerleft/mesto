// ОБЩИЕ ПЕРЕМЕННЫЕ

const profile = document.querySelector('.profile');

// ПЕРЕМЕННЫЕ РЕДАКТИРОВАНИЯ ПРОФИЛЯ

const popupProfile = document.querySelector('.popup_profile');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserDescription = document.querySelector('.profile__user-description');
const popupOpenButtonProfile = document.querySelector('.profile__edit-button');
const popupCloseButtonProfile = document.querySelector('.popup__close');
const popupSaveButtonProfile = document.querySelector('.popup__save-button');
const popupUserName = document.querySelector('.popup__user-name');
const popupUserDescription = document.querySelector('.popup__user-description');
const popupSaveAllInfoProfile = document.querySelector('.popup__profile-form');


// ПЕРЕМЕННЫЕ РЕДАКТИРОВАНИЯ ЭЛЕМЕНТОВ

const popupElements = document.querySelector('.popup_elements');
const popupSaveAllInfoElement = document.querySelector('.popup__elements-form');
const popupOpenButtonElement = document.querySelector('.profile__add-button');
const popupCloseButtonElement = document.querySelector('.popup__close_element');
const popupSaveButtonElement = document.querySelector('.popup__save-button_element');
const elements = document.querySelector('.elements');
const templateElements = document.querySelector('.template-elements');
const cardTitle = popupSaveAllInfoElement.querySelector('.popup__card-name');
const cardImageSrc = popupSaveAllInfoElement.querySelector('.popup__card-src');
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

//  ФУНКЦИИ ГРУППЫ ELEMENTS

function addCard(popupSaveAllInfoElement) {
  const element = templateElements.content.cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementImage = element.querySelector('.element__image');
  elementTitle.textContent = popupSaveAllInfoElement.name;
  elementImage.src = popupSaveAllInfoElement.link;

  return element;
}

initialCards.forEach(popupSaveAllInfoElement => {
  const element = addCard(popupSaveAllInfoElement);
  elements.prepend(element);
})

function deleteCard (evt) {
  const element = evt.target.closest('.element')
  element.remove();
}

const popupElementsToggle = function () {
    popupElements.classList.toggle('popup_opened');
    popupSaveAllInfoElement.name = cardTitle.value;
    popupSaveAllInfoElement.link = cardImageSrc.value;
    cardTitle.value = '';
    cardImageSrc.value = '';
  }


const elementsInfoEdit = function () {
  popupElementsToggle();
  event.preventDefault();
  const element = addCard(popupSaveAllInfoElement);
  elements.prepend(element);
}

const popupElementsOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  };
  popupElementsToggle();
}

// ФУНКЦИИ ГРУППЫ PROFILE

const popupProfileToggle = function () {
  if (popupProfile.classList.contains('popup_opened')) {
    popupProfile.classList.toggle('popup_opened');
  } else {
    popupProfile.classList.toggle('popup_opened');
    popupUserName.value = profileUserName.textContent;
    popupUserDescription.value = profileUserDescription.textContent;
  }
}

const profileInfoEdit = function () {
  profileUserName.textContent = popupUserName.value;
  profileUserDescription.textContent = popupUserDescription.value;
  popupProfileToggle();
  event.preventDefault();
}

const popupProfileOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  };
  popupProfileToggle();
}




popupOpenButtonProfile.addEventListener('click', popupProfileToggle);
popupCloseButtonProfile.addEventListener('click', popupProfileToggle);
popupOpenButtonElement.addEventListener('click', popupElementsToggle);
popupCloseButtonElement.addEventListener('click', popupElementsToggle);
popupProfile.addEventListener('click', popupProfileOverlay);
popupElements.addEventListener('click', popupElementsOverlay);

popupSaveAllInfoProfile.addEventListener('submit', profileInfoEdit);
popupSaveAllInfoElement.addEventListener('submit', elementsInfoEdit);
