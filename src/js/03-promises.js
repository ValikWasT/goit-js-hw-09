const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('form'),
};
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  createPromise(refs.inputAmount.value, refs.inputDelay.value);
});

function createPromise(position, delay) {
  for (let i = 0; i < position; i += 1) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve('Success! Value passed to resolve function');
        } else {
          reject('Error! Error passed to reject function');
        }
      }, delay);
    });
    promise
      .then(value => {
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
    delay += 500;
  }
}
