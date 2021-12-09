const editButton = document.querySelector(".profile__edit-button");

const popup = document.querySelector(".popup");

const closeButton = document.querySelector(".popup__close-button");

function openPopup () {
  popup.classList.add("popup__active");
}

editButton.addEventListener("click", openPopup);

function closePopup () {
  popup.classList.remove ("popup__active");
}
closeButton.addEventListener("click", closePopup);
