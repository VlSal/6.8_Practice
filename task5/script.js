const buttonClick = document.querySelector('#buttonClick');
const textInput = document.querySelector('#textInput');
const duplicateField = document.querySelector('#duplicateField');

textInput.addEventListener('input', function(){
    duplicateField.textContent = textInput.value;
});

buttonClick.addEventListener('click', function (event){
    event.preventDefault();
    duplicateField.textContent = " ";
    const inputConsol = textInput.value;
    console.log(inputConsol);
    textInput.value ='';
});







