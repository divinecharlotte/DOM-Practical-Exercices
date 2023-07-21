let countdown = 10;
let id;

function updateCountdown() {
  const countdownElement = document.querySelector('.countdown');
  countdownElement.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(id);
    countdownElement.textContent = '0';
    hideButtons();
  } else {
    countdown--;
  }
}

function startCountdown() {
  id = setInterval(updateCountdown, 1000);
}

function hideButtons() {
  const buttons = document.querySelector('.buttons');
  buttons.style.display = 'none';
}

function addTime(seconds) {
  countdown += seconds;
}

startCountdown();
