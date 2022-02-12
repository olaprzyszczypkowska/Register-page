const inputPassword = document.querySelector(".input__password");
const liLetters = document.querySelector(".li__letters");
const liNumbers = document.querySelector(".li__numbers");
const liSpecials = document.querySelector(".li__specials");
const showBtn = document.querySelector(".btn");
const passwordIcon = document.querySelector(".password__icon");
const loadingBtn = document.querySelector(".button");
const btnText = document.querySelector(".button__text");
const inputName = document.querySelector(".input__name");
const inputEmail = document.querySelector(".input__email");
const warning = document.querySelector(".warning");

showBtn.addEventListener("click", function () {
  if (inputPassword.matches('[type="password"]')) {
    inputPassword.setAttribute("type", "text");
    passwordIcon.setAttribute("src", "./img/hide.svg");
  } else {
    inputPassword.setAttribute("type", "password");
    passwordIcon.setAttribute("src", "./img/show.svg");
  }
});

const minValue = 8;
const special = /[!@#$%^&*]/;
const letters = /[a-z]/i;
const numbers = /[0-9]/;

const passwordValidation = () => {
  if (
    inputPassword.value.length > minValue &&
    inputPassword.value.match(letters)
  ) {
    liLetters.classList.add("accept");
  } else {
    liLetters.classList.remove("accept");
  }
  if (inputPassword.value.match(numbers)) {
    liNumbers.classList.add("accept");
    console.log("number");
  } else {
    liNumbers.classList.remove("accept");
  }
  if (inputPassword.value.match(special)) {
    liSpecials.classList.add("accept");
    console.log("special");
  } else {
    liSpecials.classList.remove("accept");
  }
};

loadingBtn.addEventListener("click", function () {
  if (
    inputName.value !== "" &&
    inputEmail.value !== "" &&
    inputPassword.value !== "" &&
    inputPassword.value.length > minValue &&
    inputPassword.value.match(letters) &&
    inputPassword.value.match(numbers) &&
    inputPassword.value.match(special) &&
    inputEmail.value.match(/[@][a-z]+\.[a-z]/i)
  ) {
    loadingBtn.classList.add("button__loading");
    setTimeout(() => {
      loadingBtn.classList.remove("button__loading");
      btnText.textContent = "Success";
    }, 2000);
    warning.textContent = "";
  } else {
    warning.textContent = "Fill the form";
  }
});

inputPassword.addEventListener("keyup", passwordValidation);
