let hr = min = sec = '0' + 0, startTimer;
const playBtn = document.querySelector('.play'),
      pauseBtn = document.querySelector('.pause'),
      resetBtn = document.querySelector('.reset');


playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

function play() {
    playBtn.classList.add("active");
    pauseBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        sec++;
        sec = sec < 10 ? '0' + sec : sec;

        if(sec > 59){
            min++;
            min = min < 10 ? '0' + min : min;
            sec = '0' + 0;
        }
        if(min > 59){
            hr++;
            hr = hr < 10 ? '0' + hr : hr;
            min = '0' + 0;
        }
        if(hr > 24){
            hr = '0' + 0;
        }

        putValue();

    }, 1000);
}

function pause() {
    playBtn.classList.remove("active");
    pauseBtn.classList.remove("stopActive");
    clearInterval(startTimer);
}

function reset() {
    playBtn.classList.remove("active");
    pauseBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = sec = '0' + 0
    putValue();
}

function putValue() {
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr
}