const redButton = document.getElementById("Redbutton");
const blueButton = document.getElementById("Bluebutton");

let isRed = true;
let isBlue = true;

redButton.onclick = () => {
  if (isRed) {
  redButton.style.backgroundColor = "blue";
  redButton.innerHTML= ("Change to Blue!");
  isRed = false;
  } else {
    redButton.style.backgroundColor = "Crimson";
    redButton.innerHTML = "Change to Red!";
    isRed = true;
  }
};

blueButton.onclick = () => {
  if (isBlue) {
  blueButton.style.backgroundColor = 'crimson';
  blueButton.innerHTML= ("Change to Red!");
  isBlue = false;
  } else {
    blueButton.style.backgroundColor = "blue";
    blueButton.innerHTML = "Change to Blue!";
    isBlue = true;
  }
};
