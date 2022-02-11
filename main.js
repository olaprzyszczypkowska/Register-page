// const inputText = document.querySelector('.form__text');
// const input = document.querySelector('.form__input');


// const textUp = () => {
//     inputText.classList.add('textUp');
//     input.classList.add('inputColor');
// }

// input.addEventListener('click',textUp)


const inputPassword = document.querySelector('.input__password');

const showBtn = document.querySelector ('.btn');


showBtn.addEventListener('click', 
function(){
    if(inputPassword.matches('[type="password"]')){
        inputPassword.setAttribute('type','text')
        showBtn.textContent ='hide';
    } else{
        inputPassword.setAttribute('type','password')
        showBtn.textContent ='show';

    };
})

