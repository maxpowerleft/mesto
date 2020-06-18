const profile = document.querySelector('.profile');
const profileUserName = profile.querySelector('.profile__user-name');
const profileUserDescription = profile.querySelector('.profile__user-description');
const profileEditButton = profile.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__open-popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupSaveButton = popup.querySelector('.popup__save-button');
const popupSaveAllInfo = popup.querySelector('.popup__container');

const popupUserName = popup.querySelector('.popup__user-name');
const popupUserDescription = popup.querySelector('.popup__user-description');


const popupToggle = function () {
  popup.classList.toggle('popup_opened');
  popupUserName.value = profileUserName.textContent;
  popupUserDescription.value = profileUserDescription.textContent;
}

const popupOverlay = function (event) {
  if (event.target !== event.currentTarget) {return};
  popupToggle();
}

const profileInfoEdit = function () {
  profileUserName.textContent = popupUserName.value;
  profileUserDescription.textContent = popupUserDescription.value;
  popupToggle();
  event.preventDefault();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupOverlay);

popupSaveAllInfo.addEventListener('submit', profileInfoEdit);
