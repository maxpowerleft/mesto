export default class Card {
  constructor({ data, handleCardClick, handleDeleteIconClick, handleLikeClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }

  generateCard(id) {
    this._element = this._getTemplate();
    /*Я не знаю насколько правильно я поступлю, если создам приватные свойства здесь, а не в конструкторе класса.
    Просто иначе придется обращаться к документу, что уже совсем не то, что возвращает getTemplate. Поправьте пожалуйста, если я не прав */
    this._elementImage = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like-button');
    this._elementLikeActiveState = this._element.querySelector('.element__like-button_active')
    this._elementLikeCount = this._element.querySelector('.element__likes-count');
    this._elementDeleteBtn = this._element.querySelector('.element__delete-button');
    if (id === '0b0206c9c9bda1b7fa5da028') {
      this._elementDeleteBtn.classList.add('element__delete-button_active');
    }
    this._element.querySelector('.element__title').textContent = this._name;
    
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    
    this._setEventListeners();
    return this._element;
  }

  getActiveLike() {
    return this._elementLike;
  }

  putActiveLike(userID, likesArray) {
    likesArray.forEach((item) => {
      if (item._id == userID) {
        this._elementLike.classList.add('.element__like-button_active')
      }
    })
  }

  deleteActiveLike() {
    this._elementLike.classList.remove('.element__like-button_active');
  }

  countLikes(likesArray) {
    this._elementLikeCount.textContent = likesArray.length;
  }

  _deleteCard(evt) {
    this._element = evt.target.closest('.element');
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._elementDeleteBtn.addEventListener('click', () => {
      this._deleteCard(this);
    });
    this._elementLike.addEventListener('click', () => {
      this.putLike();
    });
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
    this._elementLikeActiveState.addEventListener('click', (e) => {
      e.target.classList.toggle('element__like-button_active');
    });
  }
}
