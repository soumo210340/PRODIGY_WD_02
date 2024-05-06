let hr = min = sec = ms = 0,
    startTimer,
    lapCount = 1;

const startBtn = document.querySelector(".start"),
      stopBtn = document.querySelector(".stop"),
      resetBtn = document.querySelector(".reset"),
      lapBtn = document.querySelector(".Lap"),
      lapList = document.querySelector(".lap-list"); // Added lap list reference

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++;
        if (ms === 100) {
            sec++;
            ms = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
        }
        putValue();
    }, 10);
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = 0;
    lapCount = 1;
    lapList.innerHTML = ""; // Clear lap list
    putValue();
}
function lap() {
    const lapTime = `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}:${formatTime(ms)}`;
    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;

    if (lapCount < 4) {
        stop();
    }
}


function putValue() {
    document.querySelector(".millisecond").innerText = formatTime(ms);
    document.querySelector(".second").innerText = formatTime(sec);
    document.querySelector(".minute").innerText = formatTime(min);
    document.querySelector(".hour").innerText = formatTime(hr);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
