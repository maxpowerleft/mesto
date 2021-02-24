(()=>{"use strict";var e={formSelector:".popup__form",inputList:".popup__input",buttonElement:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".profile__user-name"),n=document.querySelector(".profile__user-description"),r=document.querySelector(".profile__edit-button"),o=document.querySelector(".popup__user-name"),i=document.querySelector(".popup__user-description"),u=document.querySelector(".popup__profile-form"),s=document.querySelector(".popup__elements-form"),c=document.querySelector(".profile__add-button"),a=document.querySelector(".elements");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}},{key:"setItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._alt=r.name,this._handleCardClick=o,this._templateSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__image").src=this._link,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__delete-button").addEventListener("click",(function(t){e._deleteCard(t)})),this._element.querySelector(".element__like-button").addEventListener("click",(function(t){e._likeCard(t)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_deleteCard",value:function(e){this._element=e.target.closest(".element"),this._element.remove(),this._element=null}},{key:"_likeCard",value:function(e){e.target.classList.toggle("element__like-button_active")}}])&&f(t.prototype,n),e}();function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),m(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),m(this,"cleanInputErrorValidation",(function(){var e=Array.from(r._formElement.querySelectorAll(r._inputList)),t=r._formElement.querySelector(r._buttonElement);e.forEach((function(n){r._hideInputError(n),r._toggleButtonState(e,t)}))})),m(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),m(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),m(this,"_toggleButtonState",(function(e,t){r._hasInvalidInput(e)?(t.setAttribute("disabled",!0),t.classList.add(r._inactiveButtonClass)):(t.removeAttribute("disabled"),t.classList.remove(r._inactiveButtonClass))})),m(this,"_setEventListeners",(function(){var e=Array.from(r._formElement.querySelectorAll(r._inputList)),t=r._formElement.querySelector(r._buttonElement);e.forEach((function(n){n.addEventListener("input",(function(){r._isValid(n),r._toggleButtonState(e,t)}))}))})),m(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._formSelector=t.formSelector,this._inputList=t.inputList,this._buttonElement=t.buttonElement,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popupSelector.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&h(t.prototype,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupSelector.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;E(k(u.prototype),"setEventListeners",this).call(this),this._element=this._popupSelector.querySelector(".popup__form"),this._element.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e._element.reset(),e.close()}))}},{key:"close",value:function(){E(k(u.prototype),"close",this).call(this),this._inputList=this._popupSelector.querySelector(".popup__form"),this._inputList.reset(),this._inputList=null}}])&&b(t.prototype,n),u}(y);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._popupImage=document.querySelector(t),r._popupText=document.querySelector(n),r}return t=u,(n=[{key:"open",value:function(e,t){O(q(u.prototype),"open",this).call(this),this._popupText.textContent=e,this._popupImage.src=t}},{key:"_setEventListeners",value:function(){O(q(u.prototype),"setEventListeners",this).call(this)}}])&&L(t.prototype,n),u}(y);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=new d(e,s),D=new d(e,u);R.enableValidation(),D.enableValidation();var T=new function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"getUserInfo",(function(){return{userName:r._userName,userDescription:r._userDescription}})),x(this,"updateUserInfo",(function(){r._userNameElem.textContent=r._userName,r._userDescriptionElem.textContent=r._userDescription})),x(this,"setUserInfo",(function(e,t){r._userName=e,r._userDescription=t})),this._userNameElem=t,this._userDescriptionElem=n,this._userName="",this._userDescription=""}(t,n);T.setUserInfo(t.textContent,n.textContent);var V=new P(".popup_type_fullscreen",".popup__fullscreen-image",".popup__fullscreen-text");V.setEventListeners();var N=new C({popupSelector:".popup_type_profile",handleFormSubmit:function(e){T.setUserInfo(e.name,e.description),T.updateUserInfo()}});N.setEventListeners();var B=new C({popupSelector:".popup_type_elements",handleFormSubmit:function(e){var t=new _({data:e,handleCardClick:function(){V.open(e.name,e.link)}},".template-elements").generateCard();U.setItem(t)}});B.setEventListeners();var U=new p({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new _({data:e,handleCardClick:function(){V.open(e.name,e.link)}},".template-elements").generateCard();U.setItem(t)}},a);U.renderItems(),r.addEventListener("click",(function(){o.value=T.getUserInfo().userName,i.value=T.getUserInfo().userDescription,N.open(),D.cleanInputErrorValidation()})),c.addEventListener("click",(function(){B.open(),R.cleanInputErrorValidation()}))})();