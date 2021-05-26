'use strict';

const gameBtn = document.querySelector('.game__btn');
const gameTimer = document.querySelector('.game__timer');
const gameField = document.querySelector('.game__field');
const gameScore = document.querySelector('.game__score');
const refreshBtn = document.querySelector('.pop-up__refresh');
const gameMessage = document.querySelector('.pop-up__message');

// sound
const bgSound = new Audio("./sound/bg.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bugSound = new Audio("./sound/bug_pull.mp3");
const carrotSound = new Audio("./sound/carrot_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");

// replace
const items = document.querySelector('.items');

let itemsWidth = items.clientWidth;
let itemsHeight = items.clientHeight;
let carrots = document.querySelectorAll(".carrot");
let bugs = document.querySelectorAll(".bug");


function changeBtn() {
    document.querySelector('.fa-play').className = "fas fa-stop";
}

// function createImage() {
//     const images = new Image(50, 50);
//     images.src = "img/bug.png";
//     document.querySelector('.game__field').appendChild(images)
// }


function timer(sec) {
    let timerId = setInterval(() => {
        gameTimer.innerText = `0: ${sec}`
        if (sec <= 0) {
            bgSound.pause();
            clearInterval(timerId);
            return;
        }
        sec--;
    }, 1000);
}

gameBtn.addEventListener('click', () => {
    changeBtn();
    timer(9);
    bgSound.play();
    carrots.forEach((item) => {
        let randomX = Math.floor((Math.random() * itemsWidth));
        let randomY = Math.floor((Math.random() * itemsHeight));
        item.style.left = randomX + 'px';
        item.style.top = randomY + 'px';
    })

    bugs.forEach((item) => {
        let randomX = Math.floor((Math.random() * itemsWidth));
        let randomY = Math.floor((Math.random() * itemsHeight));
        item.style.left = randomX + 'px';
        item.style.top = randomY + 'px';
    })
})
