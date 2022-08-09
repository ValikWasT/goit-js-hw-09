// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  inputCalendar: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  daysTimerValue: document.querySelector('[data-days]'),
  hoursTimerValue: document.querySelector('[data-hours]'),
  minutesTimerValue: document.querySelector('[data-minutes]'),
  secondsTimerValue: document.querySelector('[data-seconds]'),
};

refs.btnStart.setAttribute('disabled', 'disabled');
refs.btnStart.addEventListener('click', onBtnStartClick);
let timeInTimer = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    const currentTime = options.defaultDate.getTime();
    if (selectedTime - currentTime < 0) {
      refs.btnStart.setAttribute('disabled', 'disabled');
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 3000,
      });
      return;
    }
    refs.btnStart.removeAttribute('disabled');
    timeInTimer = selectedTime - currentTime;
  },
};

flatpickr(refs.inputCalendar, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onBtnStartClick() {
  refs.btnStart.setAttribute('disabled', 'disabled');
  refs.inputCalendar.setAttribute('disabled', 'disabled');
  Notiflix.Notify.success('Success', {
    timeout: 5000,
  });
  timerId = setInterval(() => {
    const timeToCounter = convertMs((timeInTimer -= 1000));
    console.log(timeToCounter);
    onCounter(timeToCounter);
    console.log(timeInTimer);
    if (timeInTimer < 1000) {
      clearInterval(timerId);
      refs.btnStart.removeAttribute('disabled');
      refs.inputCalendar.removeAttribute('disabled');
    }
  }, 1000);
}

function onCounter(timeToCounter) {
  refs.daysTimerValue.textContent = String(timeToCounter.days).padStart(2, 0);
  refs.hoursTimerValue.textContent = String(timeToCounter.hours).padStart(2, 0);
  refs.minutesTimerValue.textContent = String(timeToCounter.minutes).padStart(
    2,
    0
  );
  refs.secondsTimerValue.textContent = String(timeToCounter.seconds).padStart(
    2,
    0
  );
}
