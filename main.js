const inputText = document.querySelector('.form__text');
const input = document.querySelector('.form__input');


const textUp = () => {
    inputText.classList.add('textUp');
    input.classList.add('inputColor');
}

input.addEventListener('click',textUp)


