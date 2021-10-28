let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close');
let formPopup = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_info_name');
let jobInput = document.querySelector('.popup__input_info_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

openPopup.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
})
closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
})

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  
    popup.classList.remove('popup_opened');
}

formPopup.addEventListener('submit', formSubmitHandler);

openPopup.addEventListener('click', openPopup);

closePopup.addEventListener('click', closePopup);