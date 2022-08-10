import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    Number.parseInt(refs.inputDelay.value) < 0 ||
    Number.parseInt(refs.inputAmount.value) < 0 ||
    Number.parseInt(refs.inputStep.value) < 0
  ) {
    Notiflix.Notify.failure('Error! Your values is negative!');
    return;
  }
  let delayValue = Number.parseInt(refs.inputDelay.value);
  for (let i = 1; i <= Number.parseInt(refs.inputAmount.value); i += 1) {
    createPromise(Number.parseInt(i), delayValue);
    delayValue += Number.parseInt(refs.inputStep.value);
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
