let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('#popup__form');
let nameInput = document.querySelector('.popup__profile_name');
let jobInput = document.querySelector('.popup__profile_profession');
let nameProfile = document.querySelector('.profile__info-name');
let jobProfile = document.querySelector('.profile__info-profession');
let cardsButton = document.querySelector('.cards__button');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function likeButton() {
  cardsButton.classList.add('cards__button_active');
}

function dislikeButton() {
  cardsButton.classList.remove('cards__button_active');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
cardsButton.addEventListener('click', likeButton);
