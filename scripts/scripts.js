const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const formElement = document.querySelector("#popup__form");
let nameInput = document.querySelector(".popup__profile_name");
let jobInput = document.querySelector(".popup__profile_profession");
let nameProfile = document.querySelector(".profile__info-name");
let jobProfile = document.querySelector(".profile__info-profession");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
