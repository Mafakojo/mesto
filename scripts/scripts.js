let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let formElement = document.querySelector("#popup__form");
let nameInput = document.querySelector(".popup__input_data_name");
let jobInput = document.querySelector(".popup__input_data_job");
let nameProfile = document.querySelector(".profile__info-name");
let jobProfile = document.querySelector(".profile__info-profession");
let cardsButton = document.querySelector(".cards__button");

function openPopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
