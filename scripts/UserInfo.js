export default class UserInfo {
  constructor(userName, userDescription) {
    this._userNameElem = userName;
    this._userDescriptionElem = userDescription;
    this._userName = '';
    this._userDescription = '';
  }

  getUserInfo = () => {
    return {
      userName: this._userName,
      userDescription: this._userDescription,
    };
  }

  updateUserInfo = () => {
    this._userNameElem.textContent = this._userName;
    this._userDescriptionElem.textContent = this._userDescription;
  }

  setUserInfo = (newUserName, newUserDescription) => {
    this._userName = newUserName;
    this._userDescription = newUserDescription;
  }
}