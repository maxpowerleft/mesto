export default class UserInfo {
  constructor({ userName, userDescription }) {
    this._userNameElem = document.querySelector(userName);
    this._userDescriptionElem = document.querySelector(userDescription);
  }

  getUserInfo() {
    return {
      userName: this._userNameElem.textContent,
      userDescription: this._userDescriptionElem.textContent
    }
  }

  setUserInfo(data) {
    this._userNameElem.textContent = data.name;
    this._userDescriptionElem.textContent = data.description;
  }
}