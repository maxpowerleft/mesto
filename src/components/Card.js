export default class Card {
  constructor({ data, handleCardClick, handleDeleteIconClick }, api, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._userID = data.userId;
    this._api = api;
    this._likesArray = data.likes.length;
    this._IDOwner = data.owner._id
    this._ID = data._id;
    this.likeID = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .children[0]
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like-button');
    this._elementLikeActiveState = this._element.querySelector('.element__like-button_active')
    this._elementLikeCount = this._element.querySelector('.element__likes-count');
    this._elementLikeCount.textContent = this._likesArray;
    this._elementDeleteBtn = this._element.querySelector('.element__delete-button');
    this._element.querySelector('.element__title').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._checkIDOwner();
    this._checkMyLike(this._checkLikeOwner()); // !!!

    this._setEventListeners();
    return this._element;
  }

  _putActiveLike() {
    this._elementLike.classList.add('element__like-button_active')
  }

  _deleteActiveLike() {
    this._elementLike.classList.remove('element__like-button_active');
  }

  _checkIDOwner() {
    if (this._IDOwner !== this._userID) {
      this._elementDeleteBtn.remove();
    }
  }

  _putLikeClick() {
    this._api.putLike(this._ID)
      .then((res) => {
        this._elementLikeCount.textContent = res.likes.length;
      })
  }

  _deleteLikeClick() {
    this._api.deleteLike(this._ID)
      .then((res) => {
        this._elementLikeCount.textContent = res.likes.length;
      })
  }

  _checkLikeOwner() {
    return Boolean(this.likeID.find((obj => obj._id == this._userID)));
  }

  _checkMyLike(like) {
    if (like) {
      this._putActiveLike();
    }
  }

  deleteCard() {
    this._element.closest('.element').remove();
    this._element = null;
  }

  _setEventListeners() {
    this._elementDeleteBtn.addEventListener('click', () => {
      this._handleDeleteIconClick(this._ID);
    });

    this._elementLike.addEventListener('click', () => {
      if (this._elementLike.classList.contains('element__like-button_active')) {
        this._deleteActiveLike();
        this._deleteLikeClick();
      } else {
        this._putActiveLike();
        this._putLikeClick();
      }
    })

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }
}
