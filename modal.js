function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgValidate = document.getElementById("bground-validateModal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const validateModalClose = document.querySelectorAll(".modal-close");
const form = document.getElementsByName("reserve");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// launch 1st modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch 1st modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch 2nd modal
function launchModalValidate() {
  modalbg.style.display = "none";
  modalbgValidate.style.display = "block";
}

// close modal event
validateModalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbgValidate.style.display = "none";
}

// error messages for the form
const errorMessage = "Veuillez entrer 2 caractères ou plus.";
const errorMessageEmail = "Veuillez entrer une adresse email valide.";
const errorMessageBirthdate = "Veuillez entrer votre date de naissance";
const errorMessageQuantity = "Veuillez entrer une valeur numérique.";
const errorMessageLocation = "Veuillez choisir une location.";
const errorMessageCheckbox = "Veuillez accepter les conditions d'utilisation.";

// function that checks if the first name is valid
function isValidFirstName() {
  if (firstName.value.length < 2) {
    firstName.parentElement.dataset.errorVisible = "true";
    firstName.parentElement.dataset.error = errorMessage;
    return false;
  } else {
    firstName.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// function that checks if the last name is valid
function isValidLastName() {
  if (lastName.value.length < 2) {
    lastName.parentElement.dataset.errorVisible = "true";
    lastName.parentElement.dataset.error = errorMessage;
    return false;
  } else {
    lastName.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// function that checks if the email address is valid
function isValidEmail() {
  if (
    email.value == "" ||
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false
  ) {
    email.parentElement.dataset.errorVisible = "true";
    email.parentElement.dataset.error = errorMessageEmail;
    return false;
  } else {
    email.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// function that checks if the birthdate is valid
function isValidBirthdate() {
  if (birthdate.value == "") {
    birthdate.parentElement.dataset.errorVisible = "true";
    birthdate.parentElement.dataset.error = errorMessageBirthdate;
    return false;
  } else {
    birthdate.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// function that checks if the quantity is valid
function isValidQuantity() {
  if (quantity.value == "" || isNaN(quantity.value)) {
    quantity.parentElement.dataset.errorVisible = "true";
    quantity.parentElement.dataset.error = errorMessageQuantity;
    return false;
  } else {
    quantity.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// function that checks if a location is checked
function isValidLocation() {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    location6.parentElement.dataset.errorVisible = "true";
    location6.parentElement.dataset.error = errorMessageLocation;
    return false;
  } else {
    location6.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// function that checks if the required checkbox is checked
function isValidCheckbox() {
  if (checkbox1.checked == false) {
    checkbox1.parentElement.dataset.errorVisible = "true";
    checkbox1.parentElement.dataset.error = errorMessageCheckbox;
    return false;
  } else {
    checkbox1.parentElement.dataset.errorVisible = "false";
    return true;
  }
}

// form validation
function validate(event) {
  event.preventDefault();

  isValidFirstName();
  isValidLastName();
  isValidEmail();
  isValidBirthdate();
  isValidQuantity();
  isValidLocation();
  isValidCheckbox();

  if (
    isValidFirstName() &&
    isValidLastName() &&
    isValidEmail() &&
    isValidBirthdate() &&
    isValidQuantity() &&
    isValidLocation() &&
    isValidCheckbox()
  ) {
    launchModalValidate();
  }
}
