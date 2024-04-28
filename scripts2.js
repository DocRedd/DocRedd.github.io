
// const squareContainer = document.querySelector('.square-containerB');
// const squareLink = document.querySelector('.square-linkB');

//     squareContainer.addEventListener('mouseover', function () {
//         squareLink.style.backgroundColor = '#35AC80';
//     });

//     squareContainer.addEventListener('mouseout', function () {
//         squareLink.style.backgroundColor = '#fff';
//     });


// const hoverSquare = document.querySelector('.hover-squareB');
// const linkSquare = document.querySelector('.link-squareB');

// hoverSquare.addEventListener('mouseover', function () {
//   this.style.left = '-50px';
// });

// hoverSquare.addEventListener('mouseout', function () {
//   this.style.left = '50%';
// });

// linkSquare.addEventListener('click', function (e) {
//   e.preventDefault();
//   alert('You clicked the link!');
// });



// let delayTime = 5000; // Change this value to adjust the delay time

// let timer;// Declare a variable to hold the timer ID

// hoverSquare.addEventListener('mouseover', function () {
//   clearTimeout(timer); // Clear any previous timers
//   this.style.left = '-50px';
// });

// hoverSquare.addEventListener('mouseout', function () {
//   timer = setTimeout(() => {
//     this.style.left = '50%';
//   }, delayTime); // Start a new timer with the delay time
// });

// linkSquare.addEventListener('mouseover', function () {
//   clearTimeout(timer); // Clear any previous timers
//   hoverSquare.style.left = '-100%';
// });

// linkSquare.addEventListener('mouseout', function () {
//   timer = setTimeout(() => {
//     hoverSquare.style.left = '100%';
//   }, delayTime); // Start a new timer with the delay time
// });


// function moveHoverSquare() {
//   hoverSquare.style.left = '-100%';
// }

// function startTimer() {
//   clearInterval(timer);
//   timer = setInterval(moveHoverSquare, 10000);
// }

// function resetTimer() {
//   clearInterval(timer);
//   timer = setInterval(moveHoverSquare, 10000);
// }

// hoverSquare.addEventListener('mouseover', function () {
//   this.style.left = '-50px';
//   resetTimer();
// });

// hoverSquare.addEventListener('mouseout', function () {
//   this.style.left = '50%';
//   startTimer();
// });

// linkSquare.addEventListener('click', function (e) {
//   e.preventDefault();
//   alert('You clicked the link!');
// });

// linkSquare.addEventListener('mouseover', function () {
//   moveHoverSquare();
//   resetTimer();
// });

// linkSquare.addEventListener('mouseout', function () {
//   startTimer();
// });

// startTimer();

// linkSquare.addEventListener('mouseenter', function () {
//   hoverSquare.style.left = '-100%';
// });

// linkSquare.addEventListener('mouseleave', function (e) {
//   setTimeout(function () {
//     if (!hoverSquare.matches(':hover')) {
//       hoverSquare.style.left = '100%';
//     }
//   }, 100);
// });

// hoverSquare.addEventListener('mouseenter', function () {
//   hoverSquare.style.left = '-50px';
// });

// hoverSquare.addEventListener('mouseleave', function (e) {
//   setTimeout(function () {
//     if (!linkSquare.matches(':hover')) {
//       hoverSquare.style.left = '100%';
//     }
//   }, 100);
// });



// const hoverSquareA = document.querySelector('.hover-squareA');
// let hoverTimer;
// let isHovering = false;

// hoverSquareA.addEventListener('mouseover', function () {
//   clearTimeout(hoverTimer);
//   isHovering = true;
//   console.log('Mouse over: Setting isHovering true');
//   this.style.opacity = '1';
//   this.style.left = 'calc(25% - 150px)';
//   this.style.pointerEvents = 'auto';
// });

// hoverSquareA.addEventListener('mouseout', function () {
//   isHovering = false;
//   console.log('Mouse out: Setting isHovering false');
//   this.style.pointerEvents = 'none';
//   hoverTimer = setTimeout(() => {
//     if (!isHovering) {
//       console.log('Timeout completed without re-entering');
//       this.style.opacity = '0.5';
//       this.style.left = '50%';
//       this.style.pointerEvents = 'auto';
//     } else {
//       console.log('Re-entered before timeout completed');
//     }
//   }, 5000);
// });

// hoverSquareA.addEventListener('mouseenter', function () {
//   clearTimeout(hoverTimer);
//   isHovering = true;
//   console.log('Mouse enter: Clearing timeout and setting isHovering true');
// });
document.addEventListener("DOMContentLoaded", function() {
  const movableSquare = document.getElementById("movableSquareA");
  const boundsContainer = document.getElementById("boundsContainerA");
  const boundary = boundsContainer.getBoundingClientRect(); // Get the bounds of the container

  boundsContainer.addEventListener("mousemove", function(event) {
    // Check if the mouse is within the container's bounds
    if (event.clientX >= boundary.left && event.clientX <= boundary.right &&
        event.clientY >= boundary.top && event.clientY <= boundary.bottom) {
      // Mouse is inside the container, apply desired styles
      movableSquare.style.opacity = "1";
      movableSquare.style.left = "-50%";  // Move to the right within the container
    } else {
      // Mouse is outside the container, revert styles
      movableSquare.style.opacity = "1";
      movableSquare.style.left = "50%";  // Center it back
    }
  });   
  window.addEventListener("resize", function() {
    boundary = boundsContainer.getBoundingClientRect();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const movableSquare = document.getElementById("movableSquareB");
  const boundsContainer = document.getElementById("boundsContainerB");
  const boundary = boundsContainer.getBoundingClientRect(); // Get the bounds of the container

  boundsContainer.addEventListener("mousemove", function(event) {
    // Check if the mouse is within the container's bounds
    if (event.clientX >= boundary.left && event.clientX <= boundary.right &&
        event.clientY >= boundary.top && event.clientY <= boundary.bottom) {
      // Mouse is inside the container, apply desired styles
      movableSquare.style.opacity = "1";
      movableSquare.style.left = "-50%";  // Move to the right within the container
    } else {
      // Mouse is outside the container, revert styles
      movableSquare.style.opacity = "1";
      movableSquare.style.left = "50%";  // Center it back
    }
  });   
  window.addEventListener("resize", function() {
    boundary = boundsContainer.getBoundingClientRect();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const movableSquare = document.getElementById("movableSquareC");
  const boundsContainer = document.getElementById("boundsContainerC");
  const boundary = boundsContainer.getBoundingClientRect(); // Get the bounds of the container

  boundsContainer.addEventListener("mousemove", function(event) {
    // Check if the mouse is within the container's bounds
    if (event.clientX >= boundary.left && event.clientX <= boundary.right &&
        event.clientY >= boundary.top && event.clientY <= boundary.bottom) {
      // Mouse is inside the container, apply desired styles
      movableSquare.style.opacity = "1";
      movableSquare.style.left = "-50%";  // Move to the right within the container
    } else {
      // Mouse is outside the container, revert styles
      movableSquare.style.opacity = "1";
      movableSquare.style.left = "50%";  // Center it back
    }
  });

  
  window.addEventListener("resize", function() {
    boundary = boundsContainer.getBoundingClientRect();
  });
});
