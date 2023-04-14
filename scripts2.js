
const squareContainer = document.querySelector('.square-containerB');
const squareLink = document.querySelector('.square-linkB');

    squareContainer.addEventListener('mouseover', function () {
        squareLink.style.backgroundColor = '#35AC80';
    });

    squareContainer.addEventListener('mouseout', function () {
        squareLink.style.backgroundColor = '#fff';
    });


const hoverSquare = document.querySelector('.hover-squareB');
const linkSquare = document.querySelector('.link-squareB');

hoverSquare.addEventListener('mouseover', function () {
  this.style.left = '-50px';
});

hoverSquare.addEventListener('mouseout', function () {
  this.style.left = '50%';
});

linkSquare.addEventListener('click', function (e) {
  e.preventDefault();
  alert('You clicked the link!');
});



let delayTime = 5000; // Change this value to adjust the delay time

let timer;// Declare a variable to hold the timer ID

hoverSquare.addEventListener('mouseover', function () {
  clearTimeout(timer); // Clear any previous timers
  this.style.left = '-50px';
});

hoverSquare.addEventListener('mouseout', function () {
  timer = setTimeout(() => {
    this.style.left = '50%';
  }, delayTime); // Start a new timer with the delay time
});

linkSquare.addEventListener('mouseover', function () {
  clearTimeout(timer); // Clear any previous timers
  hoverSquare.style.left = '-100%';
});

linkSquare.addEventListener('mouseout', function () {
  timer = setTimeout(() => {
    hoverSquare.style.left = '100%';
  }, delayTime); // Start a new timer with the delay time
});


function moveHoverSquare() {
  hoverSquare.style.left = '-100%';
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(moveHoverSquare, 10000);
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(moveHoverSquare, 10000);
}

hoverSquare.addEventListener('mouseover', function () {
  this.style.left = '-50px';
  resetTimer();
});

hoverSquare.addEventListener('mouseout', function () {
  this.style.left = '50%';
  startTimer();
});

linkSquare.addEventListener('click', function (e) {
  e.preventDefault();
  alert('You clicked the link!');
});

linkSquare.addEventListener('mouseover', function () {
  moveHoverSquare();
  resetTimer();
});

linkSquare.addEventListener('mouseout', function () {
  startTimer();
});

startTimer();

linkSquare.addEventListener('mouseenter', function () {
  hoverSquare.style.left = '-100%';
});

linkSquare.addEventListener('mouseleave', function (e) {
  setTimeout(function () {
    if (!hoverSquare.matches(':hover')) {
      hoverSquare.style.left = '100%';
    }
  }, 100);
});

hoverSquare.addEventListener('mouseenter', function () {
  hoverSquare.style.left = '-50px';
});

hoverSquare.addEventListener('mouseleave', function (e) {
  setTimeout(function () {
    if (!linkSquare.matches(':hover')) {
      hoverSquare.style.left = '100%';
    }
  }, 100);
});