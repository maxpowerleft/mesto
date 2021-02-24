import './index.css';

import {
  profileUserName,
  profileUserDescription,
  popupOpenButtonProfile,
  popupUserName,
  popupUserDescription,
  profilePopupForm,
  cardData,
  profileAvatarForm,
  popupOpenButtonElement,
  elements,
  profileUserAvatar,
  config,
  popupOpenButtonAvatarEdit
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

let userId = null;

// ЭКЗЕМПЛЯР КЛАССА Api

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '1a380a79-3cff-47a0-9f14-eca29c961cf4',
    'Content-Type': 'application/json'
  }
})

// МЕТОДЫ КЛАССА Api 

api.getUserData()
  .then((res) => {
    userId = res._id;
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
  })
  .catch((err) => {
    console.error(err);
  })

api.getInitialCards()
  .then((res) => {
    cardList.renderItems(res)
  })
  .catch((err) => {
    console.error(err);
  })

// ЭКЗЕМПЛЯР КЛАССА PopupWithSubmit

const popupDeleteCard = new PopupWithSubmit('.popup_type_delete');

// МЕТОДЫ КЛАССА PopupWithSubmit

popupDeleteCard.setEventListeners();

//  ЭКЗЕМПЛЯРЫ КЛАССА FormValidator 

const elementsFormValidation = new FormValidator(config, cardData);
const profileFormValidation = new FormValidator(config, profilePopupForm);
const profileAvatarValidation = new FormValidator(config, profileAvatarForm);

// МЕТОДЫ КЛАССА FormValidator

elementsFormValidation.enableValidation();
profileFormValidation.enableValidation();
profileAvatarValidation.enableValidation();

// ЭКЗЕМПЛЯРЫ КЛАССА UserInfo

const userInfo = new UserInfo({
  userName: profileUserName,
  userDescription: profileUserDescription,
  userAvatar: profileUserAvatar
});

// ФУНКЦИЯ ВОЗВРАЩЕНИЯ НОВОЙ КАРТОЧКИ

const createCard = (data) => {
  const card = new Card({
      data: { ...data, userId },
      handleCardClick: () => {
        popupImage.open(data.name, data.link)
      },
      handleDeleteIconClick: (cardID) => {
        popupDeleteCard.open();
        popupDeleteCard.setSubmitAction(() => {
          api.deleteCard(cardID)
            .then(() => {
              card.deleteCard();
            })
            .catch((err) => {
              console.error(err);
            });
        })
      }
    },
    api,
    '.template-elements');
  
  return card.generateCard();
};

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
    popupFormProfile.renderLoading(false);
    api.patchUserData(data)
      .then((res) => {
        userInfo.setUserInfo(res)
      })
      .catch((err) => {
      console.error(err);
      })
      .finally(() => {
       popupFormProfile.renderLoading(true);
    })
  }
})

// МЕТОДЫ КЛАССА PopupWithForm 

popupFormProfile.setEventListeners();

// ЭКЗЕМПЛЯРЫ КЛАССА PopupWithForm (Elements)

const popupFormElements = new PopupWithForm({
  popupSelector: '.popup_type_elements',
  handleFormSubmit: (data) => {
    popupFormElements.renderLoading(false);
    api.postCard(data)
      .then((res) => {
        cardList.setItem(createCard(res), true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        popupFormElements.renderLoading(true);
    })
  }
})

// МЕТОДЫ КЛАССА PopupWithForm 

popupFormElements.setEventListeners();

// ЭКЗЕМПЛЯРЫ КЛАССА PopupWithForm (Avatar)

const popupFormAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    popupFormAvatar.renderLoading(false);
    api.patchUserAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
      })
      .catch((err) => {
      console.error(err);
      })
      .finally(() => {
      popupFormAvatar.renderLoading(true);
    })
  }
})

// МЕТОДЫ КЛАССА PopupWithForm (Avatar)

popupFormAvatar.setEventListeners();

//  ЭКЗЕМПЛЯР КЛАССА Section

const cardList = new Section({
    renderer: (item) => {
      cardList.setItem(createCard(item));
    },
  },
  elements
);

// СЛУШАТЕЛИ

popupOpenButtonProfile.addEventListener('click', () => {
  popupUserName.value = userInfo.getUserInfo().userName;
  popupUserDescription.value = userInfo.getUserInfo().userDescription;
  popupFormProfile.open();
  profileFormValidation.cleanInputErrorValidation();
  popupFormProfile.renderLoading(false);
})

popupOpenButtonElement.addEventListener('click', () => {
  popupFormElements.open();
  elementsFormValidation.cleanInputErrorValidation();
  popupFormElements.renderLoading(false);
})

popupOpenButtonAvatarEdit.addEventListener('click', () => {
  popupFormAvatar.open();
  profileAvatarValidation.cleanInputErrorValidation();
  popupFormAvatar.renderLoading(false);
})