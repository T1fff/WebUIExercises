button = document.getElementById("button");
lights = document.querySelectorAll("traffic-light > div");
red = document.getElementById("red");
yellow = document.getElementById("yellow");
green = document.getElementById("green");

lightOrder = 1;

function addClass(element, classname) {
  element.classList.add(classname);
}

function removeClass(element, classname) {
  element.classList.remove(classname);
}

function allOff() {
  removeClass(yellow, "bg-warning");
  removeClass(green, "bg-success");
  removeClass(red, "bg-danger");
}

function onRed() {
  addClass(red, "bg-danger");
  removeClass(yellow, "bg-warning");
  removeClass(green, "bg-success");
  lightOrder++;
}

function onYellow() {
  addClass(yellow, "bg-warning");
  removeClass(red, "bg-danger");
  removeClass(green, "bg-success");
  lightOrder++;
}

function onGreen() {
  addClass(green, "bg-success");
  removeClass(yellow, "bg-warning");
  removeClass(red, "bg-danger");
  lightOrder++;
}

button.addEventListener("click", () => {
  switch (lightOrder) {
    case 1:
      onRed();
      break;
    case 2:
      onYellow();
      break;
    case 3:
      onGreen();
      if ((lightOrder = 4)) {
        lightOrder = 0;
        lightOrder++;
      }
      break;
    default:
      allOff();
      break;
  }
});
