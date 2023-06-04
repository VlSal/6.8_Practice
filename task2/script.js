const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщений в веб-консоль')
});

const al = document.querySelector('#al');
al.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK')
});

const pr = document.querySelector('#pr');
pr.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста')
});