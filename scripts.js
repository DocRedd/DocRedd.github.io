var container = document.querySelector('.container');

function createSquares() {
  container.innerHTML = '';
  var width = window.innerWidth;
  var height = window.innerHeight;
  var minDimension = Math.min(width, height);
  var squareSize = Math.floor(minDimension / 5);
  var zoomFactor = window.devicePixelRatio;
  var rows = Math.floor(height / (squareSize * zoomFactor));
  var columns = Math.floor(width / (squareSize * zoomFactor));
  var leftoverWidth = width - columns * squareSize * zoomFactor;
  var leftoverHeight = height - rows * squareSize * zoomFactor;
  var extraColumn = leftoverWidth > 0 ? 1 : 0;
  var extraRow = leftoverHeight > 0 ? 1 : 0;
  var colors = ['#170135', '#3ED0D4', '#182B65', '#000030', '#35AC80', '#01152C', '#D74069'];

  // Calculate the actual width and height of each square
  var actualWidth = (width - extraColumn * leftoverWidth) / columns;
  var actualHeight = (height - extraRow * leftoverHeight) / rows;

  // Create the squares
  for (var i = 1; i <= rows + extraRow; i++) {
    var row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (var j = 1; j <= columns + extraColumn; j++) {
      var square = document.createElement('div');
      square.classList.add('square');
      square.style.width = actualWidth + 'px';
      square.style.height = actualHeight + 'px';
      square.style.animationDelay = (i + j) * 0.05 + 's';

      // Set the hover color with a delay
      setTimeout(function () {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.dataset.hoverColor = randomColor;
      }, (i + j) * 50);

      row.appendChild(square);
    }
  }
}

// Call createSquares() initially and on resize
createSquares();
window.onresize = createSquares;

createSquares();
window.addEventListener('load', function () {
    createSquares();
});

square.addEventListener('mouseover', function () {
    var delayColor = this.dataset.hoverColor;
    setTimeout(function () {
        square.style.backgroundColor = delayColor;
    }, 300);
});

square.addEventListener('mouseout', function () {
    square.style.backgroundColor = "#959595";
});

window.addEventListener('resize', function () {
    createSquares();
});

const buttonBar = document.querySelector('.button-bar');

function resizeNavBar() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let navBarHeight = 80; // default height
    let navBarWidth = 50; // default width

    if (windowWidth < 769) {
        navBarWidth = 90;
        navBarHeight = 60;
    }

    buttonBar.style.width = `${navBarWidth}%`;
    buttonBar.style.height = `${navBarHeight}px`;
}

resizeNavBar(); // call the function initially

window.addEventListener('resize', resizeNavBar); // call the function on window resize

const squareContainer = document.querySelector('.square-containerA');
const squareLink = document.querySelector('.square-linkA');

    squareContainer.addEventListener('mouseover', function () {
        squareLink.style.backgroundColor = '#35AC80';
    });

    squareContainer.addEventListener('mouseout', function () {
        squareLink.style.backgroundColor = '#fff';
    });


const hoverSquare = document.querySelector('.hover-squareA');
const linkSquare = document.querySelector('.link-squareA');

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




// Projects section
