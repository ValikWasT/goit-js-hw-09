function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  refs.btnStop.removeAttribute('disabled');
  refs.btnStart.setAttribute('disabled', 'disabled');
  refs.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStop() {
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}
