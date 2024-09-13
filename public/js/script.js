let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let timeDisplay = document.getElementById('time');
let water = document.getElementById('water');
let timer;
let time = 1500; // 25 minutes in seconds
let isRunning = false;

startButton.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    }
});

resetButton.addEventListener('click', () => {
    resetTimer();
});

function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        time--;
        updateDisplay();
        updateWaterLevel();

        if (time <= 0) {
            clearInterval(timer);
            isRunning = false;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    time = 1500;
    isRunning = false;
    water.style.height = '0%'; // Reset water level
    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateWaterLevel() {
    let percentComplete = ((1500 - time) / 1500) * 100;
    water.style.height = `${percentComplete}%`; // Increase water height gradually
}
