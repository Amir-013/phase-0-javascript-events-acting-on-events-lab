// Your code here
function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  let currentPosition = parseInt(dodger.style.left);

  if (currentPosition > 0) {
    dodger.style.left = `${currentPosition - 5}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  let currentPosition = parseInt(dodger.style.left);

  if (currentPosition < 360) {
    dodger.style.left = `${currentPosition + 5}px`;
  }
}