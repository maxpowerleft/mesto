//  ОБЩИЕ ФУНКЦИИ ЗАКРЫТИЯ И ОТКРЫТИЯ ПОПАПОВ

// const openPopup = function (popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupByEscButton);
// }

// const closePopup = function (popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupByEscButton);
// }

// initialCards.forEach(item => {
//   const card = new Card(item, '.template-elements');
//   const cardElement = card.generateCard();
//   placeTheCard(cardElement);
// });

// function placeTheCard(element) {
//   elements.prepend(element);
// }

// function handleOpenAddCardPopup() {
//   cardData.reset();
//   elementsFormValidation.cleanInputErrorValidation();
//   openPopup(popupElements);
// }

// function editElementsInfo(event) {
//   event.preventDefault();
//   const card = new Card({
//     name: cardTitle.value,
//     link: cardImageSrc.value,
//   },'.template-elements');
//   const cardElement = card.generateCard();
//   placeTheCard(cardElement);
//   closePopup(popupElements);
// }

// const makeElementsPopupOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup(popupElements);
//   };
// }

// ФУНКЦИИ ГРУППЫ FULLSCREEN

// const makeFullScreenPopupOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup(popupFullscreen);
//   };
// }

// ФУНКЦИИ ГРУППЫ PROFILE

// function handleOpenProfilePopup() {
//   openPopup(popupProfile);
//   popupUserName.value = profileUserName.textContent;
//   popupUserDescription.value = profileUserDescription.textContent;
//   profileFormValidation.cleanInputErrorValidation();
// }


// function editProfileInfo(event) {
//   profileUserName.textContent = popupUserName.value;
//   profileUserDescription.textContent = popupUserDescription.value;
//   closePopup(popupProfile);
//   event.preventDefault();
// }

// const makeProfilePopupOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup(popupProfile);
//   };
// }

//  ВЫХОД ИЗ ПОПАПА ПО НАЖАТИЮ НА ESC

// function closePopupByEscButton(evt) {
//   const popupOpened = document.querySelector('.popup_opened');
//   if (evt.key === 'Escape') {
//     closePopup(popupOpened);
//   }
//   return;
// }

// popupOpenButtonProfile.addEventListener('click', handleOpenProfilePopup);
// popupCloseButtonProfile.addEventListener('click', () => closePopup(popupProfile));
// popupOpenButtonElement.addEventListener('click', handleOpenAddCardPopup);
// popupCloseButtonElement.addEventListener('click', () => closePopup(popupElements));
// fullscreenCloseButton.addEventListener('click', () => closePopup(popupFullscreen));

// popupProfile.addEventListener('click', makeProfilePopupOverlay);
// popupElements.addEventListener('click', makeElementsPopupOverlay);
// popupFullscreen.addEventListener('click', makeFullScreenPopupOverlay);

// popupFormProfile.addEventListener('submit', editProfileInfo);
// cardData.addEventListener('submit', editElementsInfo);