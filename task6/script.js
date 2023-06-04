const trafficLightEl = document.querySelector('.trafficLight');
const trafficLightE2 = document.querySelector('.trafficLight1');
const trafficLightE3 = document.querySelector('.trafficLight2');
const trafficL = document.querySelector('.lights');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE3.style.background = ('black');
    trafficL.removeEventListener('click', makeRed2);
    trafficL.addEventListener('click',makeYellow1)
};

function makeYellow1() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
    trafficL.removeEventListener('click', makeGreen);
    trafficL.addEventListener('click',makeRed2)
};

function makeRed2() {
    trafficLightE3.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficL.removeEventListener('click', makeYellow1);
    trafficL.addEventListener('click',makeGreen)
};

trafficL.addEventListener('click', makeGreen)
