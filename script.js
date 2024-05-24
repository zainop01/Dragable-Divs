

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomlyPositionDivs() {
  const container = document.querySelector(".container");
  const draggables = document.querySelectorAll(".draggable");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  draggables.forEach((draggable) => {
    const maxX = containerWidth - draggable.clientWidth;
    const maxY = containerHeight - draggable.clientHeight;
    const randomX = getRandomInt(0, maxX);
    const randomY = getRandomInt(0, maxY);
    gsap.set(draggable, { x: randomX, y: randomY });
  });
}

function animateCodeText() {
  gsap.to(".bg-text h1", {
    x: "20%",
    duration: 10,
    ease: "linear",
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse the animation when it reaches the end
    // Delay before starting the animation again
  });
}

document.addEventListener("DOMContentLoaded", () => {
  animateCodeText(); // Start the animation for the code text
});


// Get the background image element
const bgImg = document.querySelector(".bg-img");



document.addEventListener("DOMContentLoaded", () => {

  randomlyPositionDivs();


  
  gsap.registerPlugin(Draggable);

  Draggable.create(".draggable", {
    bounds: ".container",
    type: "x,y",
    edgeResistance: 0.65,
    onDragStart: function () {
      gsap.to(this.target, {
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.2,
      });
    },
    onDragEnd: function () {
      gsap.killTweensOf(this.target);
      gsap.to(this.target, {
        x: this.x,
        y: this.y,
        ease: "power2.out",
        duration: 0.5,
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      });
    },
  });

  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the scrollSmoother before your scrollTriggers
// ScrollSmoother.create({
//     smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//     effects: true, // looks for data-speed and data-lag attributes on elements
//     smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//   });

// const colorDiv = document.querySelector('.btn');
//   console.log(colorDiv);
//   const topLeft = document.getElementsByClassName('corner')[0];
//   const bottomRight = document.getElementsByClassName('corner')[1];

//   if (colorDiv) {
//     colorDiv.addEventListener('click', () => {
//       console.log("colorDiv", colorDiv);
      
//       if (topLeft) {
//         if (topLeft.classList.contains('corner')) {
//           topLeft.classList.remove('corner');
//           topLeft.classList.add('dimmed');
//           console.log("left", topLeft);
//         } else {
//           topLeft.classList.remove('dimmed');
//           topLeft.classList.add('corner');
//           console.log("left", topLeft);
//         }
//       }

//       if (bottomRight) {
//         if (bottomRight.classList.contains('corner')) {
//           bottomRight.classList.remove('corner');
//           bottomRight.classList.add('dimmed');
//         } else {
//           bottomRight.classList.remove('dimmed');
//           bottomRight.classList.add('corner');
//         }
//       }
//     });
//   }

});

gsap.to(".top-left", {
  duration: 3, // Longer duration for a smoother animation
  background:
    "linear-gradient(135deg, rgba(0, 38, 0, 0.7), rgba(0, 179, 0, 0.7))",
  filter: "blur(150px)", // More blur for smoother edges
  width: 400, // Smaller size
  height: 400, // Smaller size
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.to(".bottom-right", {
  duration: 3, // Longer duration for a smoother animation
  background:
    "linear-gradient(135deg, rgba(0, 38, 0, 0.7), rgba(0, 179, 0, 0.7))",
  filter: "blur(150px)", // More blur for smoother edges
  width: 400, // Smaller size
  height: 400, // Smaller size
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});


