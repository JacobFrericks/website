var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var helpButton = document.querySelector("#help");
resetButton.addEventListener("click", function() {
  reset();
})
helpButton.addEventListener("click", function() {
    $("#helpModal").modal();
})

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
      // get color of clicked square
      var clickedColor = this.style.background;
      // compare to pickedColor
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor)
        h1.style.background = clickedColor
        resetButton.textContent = "Play Again?"
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    })
  }
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected");
      if(this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

function reset() {
  // Genrate new colors
  colors = generateRandomColors(numSquares)
  // Pick new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}


function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change all squares to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }

  //return array
  return arr;
}

function randomColor() {
  // pick a random "red"
  var red = Math.floor(Math.random() * 256)
  // pick a random "green"
  var green = Math.floor(Math.random() * 256)
  // pick a random "blue"
  var blue = Math.floor(Math.random() * 256)

  return "rgb(" + red + ", " + green + ", " + blue + ")";

}
