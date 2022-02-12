const inputPassword = document.querySelector(".input__password");
const liLetters = document.querySelector('.li__letters')
const liNumbers = document.querySelector('.li__numbers')
const liSpecials = document.querySelector('.li__specials')

const showBtn = document.querySelector(".btn");

showBtn.addEventListener("click", function () {
  if (inputPassword.matches('[type="password"]')) {
    inputPassword.setAttribute("type", "text");
    showBtn.textContent = "hide";
  } else {
    inputPassword.setAttribute("type", "password");
    showBtn.textContent = "show";
  }
});

const minValue = 8;
const special = /[!@#$%^&*]/;
const letters =/[a-z]/i;
const numbers = /[0-9]/;


const passwordValidation = () => {
if(inputPassword.value.length > minValue && inputPassword.value.match(letters) ){
    liLetters.classList.add('accept');
} else{
    liLetters.classList.remove('accept')
};
if (inputPassword.value.match(numbers))  {
    liNumbers.classList.add('accept')
    console.log('number');
} else{
    liNumbers.classList.remove('accept')
};
if(inputPassword.value.match(special)) {
    liSpecials.classList.add('accept')
    console.log('special');
} else {
    liSpecials.classList.remove('accept')
}
}


inputPassword.addEventListener('keyup' ,passwordValidation)