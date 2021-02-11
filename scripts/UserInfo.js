export default class UserInfo {
  constructor({userName, userDescription}) {
    this._userName = userName;
    this._userDescription = userDescription;
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.userName = this._userName.textContent;
    userInfo.userDescription = this._userDescription.textContent;
    return userInfo;
  }

  setUserInfo(data) {
    data.userName = this._userName.textContent;
    data.userDescription = this._userDescription.textContent;
  }
}