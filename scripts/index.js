let popup = document.querySelector('.popup');

let openPopupBtn = document.querySelector('.profile__vector');

let closePopupBtn = document.querySelector('.popup__close-button');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameElement = document.querySelector('.profile__title');
let jobElement = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_visible');
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}
function closePopup() {
  popup.classList.remove('popup_visible')
}

openPopupBtn.addEventListener('click', openPopup) 

closePopupBtn.addEventListener('click', closePopup)

let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup()
};
formElement.addEventListener('submit', formSubmitHandler); 
