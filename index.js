const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

inputEl.addEventListener('input', () => {
  let reg = /^\d+$/;

  inputEl.value = inputEl.value.match(reg);
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);

  let timer = setInterval(() => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let timerSeconds = (seconds % 60);

    if (hours < 10 && hours > 0) {
      hours = '0' + hours;
    }

    if (minutes < 10 && minutes > 0) {
      minutes = '0' + minutes;
    }

    if (timerSeconds < 10 && timerSeconds > 0) {
      timerSeconds = '0' + timerSeconds;
    }

    if (seconds < 0) {
      clearInterval(timer)
    } else {
      let timeStr = `${hours}:${minutes}:${timerSeconds}`;
      timerEl.textContent = timeStr;
    }

    --seconds;
  }, 1000);

  inputEl.value = '';
});
