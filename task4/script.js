
const testText = document.querySelector('#testText');

testText.addEventListener('click', function(event) {
const userText = prompt('Введите текст');
testText.textContent = userText; 
event.preventDefault();
})