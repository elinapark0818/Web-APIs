'use strict';

const gameBtn = document.querySelector('.game__btn');

function changeBtn() {
    document.querySelector('.fa-play').className = "fas fa-stop";
}

const gameScore = document.querySelector('.game__score');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
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
})
