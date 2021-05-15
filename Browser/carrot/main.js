'use strict';

const gameBtn = document.querySelector('.game__btn');
const gameTimer = document.querySelector('.game__timer');
function changeBtn() {
    document.querySelector('.fa-play').className = "fas fa-stop";
}



function createImage() {
    const images = new Image(50,50);
    images.src = "img/bug.png";
    document.querySelector('.game__field').appendChild(images)
}

const gameField = document.querySelector('.game__field');

const gameScore = document.querySelector('.game__score');

const refreshBtn = document.querySelector('.pop-up__refresh');
const gameMessage = document.querySelector('.pop-up__message');


function timer(sec) {
    let timerId = setInterval(() => {
        gameTimer.innerText = `0: ${sec}`
        if (sec <= 0) {
            clearInterval(timerId);
            return;
        }
        sec--;
    }, 1000);
}

gameBtn.addEventListener('click', () => {
    changeBtn()
    timer(9)
    createImage()
})