'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;


const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__btn');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpMessage = document.querySelector('.pop-up__message');
const popUpRefrexh = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');


let started = false;
let score = 0;
let timer = undefined;

// field.addEventListener('click', (event) => onFieldClick(event));
field.addEventListener('click', onFieldClick);

gameBtn.addEventListener('click', () => {
    // console.log('log'); 확인해나가는 습관
    if (started) {
        stopGame();
    } else {
        startGame();
    }
});

popUpRefrexh.addEventListener('click', () => {
    startGame();
    hidePopUp();
});

function startGame() {
    started = true;
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound)
}

function stopGame() {
    started = false;
    stopGameTimer();
    hideGameBtn();
    showPopUpWithText('REPLAY❓');
    playSound(alertSound);
    stopSound(bgSound);
}

function finishGame(win) {
    started = false;
    hideGameBtn();
    if (win) {
        playSound(winSound);
    } else {
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    showPopUpWithText(win ? 'YOU WON 🎉' : 'YOU LOST 💩')
}


function showStopBtn() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function hideGameBtn() {
    gameBtn.style.visibility = 'visible';
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}


function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopUpWithText(text) {
    popUpMessage.innerText = text;
    popUp.classList.remove('pop-up--hide');
}

function hidePopUp() {
    popUp.classList.add('pop-up--hide');
}

function initGame() {
    score = 0;
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
//    벌레와 당근을 생성한 뒤, field 에 추가한다
    console.log(fieldRect);
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(event) {
    if (!started) {
        return;
    }
    // console.log(event);
    const target = event.target;
    if (target.matches('.carrot')) {
        //    당근!
        target.remove();
        score++;
        playSound(carrotSound);
        updateScoreBoard();
        if (score === CARROT_COUNT) {
            finishGame(true);
        }
    } else if (target.matches('.bug')) {
        //    벌레!
        finishGame(false);
    }
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

function updateScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;
}

function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}