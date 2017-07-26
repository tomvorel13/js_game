//VARIABLES
var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	//mode buttons event listeners
	setUpModeButton();
	setUpSquares();
	reset();
}

function setUpModeButton() {
		for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', function() {
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function setUpSquares() {
		for (var i = 0; i < squares.length; i++) {
		//add click listeners
		squares[i].addEventListener('click', function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			changeColor(clickedColor);
			resetButton.textContent = 'Play Again?'
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';	
				}
		});
	}
}


function reset(){
	h1.style.backgroundColor = 'steelblue';
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from an array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//message reset
	messageDisplay.textContent = '';
	//button back to new colors
	resetButton.textContent = 'New Colors';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
		squares[i].style.backgroundColor = colors[i];
	}

}

//EASY AND HARD BUTTON LOGIC
// easybtn.addEventListener('click', function() {
// 	easybtn.classList.add('selected');
// 	hardbtn.classList.remove('selected');
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = 'none';		}
// 	}
// });

// hardbtn.addEventListener('click', function() {
// 	easybtn.classList.remove('selected');
// 	hardbtn.classList.add('selected');
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = 'block';
// 				}
// });

//RESET BUTTON LOGIC
resetButton.addEventListener('click', function () {
	reset();
});

//change color function
function changeColor(color) {
	//loop through all squares
	for(var i = 0; i < colors.length; i++) {
		//change each colo ro given color
		squares[i].style.backgroundColor = color;
	}
	
}

//pick color function
function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//GETTING THE RANDOM COLOR LOGIC FUNCTIONS
	//function to generate random colors
	function generateRandomColors (num) {
		//make an array
		var arr = [];
		//add num random colors to array
		for(var i = 0; i < num; i++) {
			//get random color and push into array
			arr.push(randomColor());
		}
		//return the array
		return arr;
	}

	//function to specifically generate random color
	function randomColor() {
		//pick a 'red' from 0-255
		var r = Math.floor(Math.random() * 256);
		//pick a 'green' from 0-255
		var g = Math.floor(Math.random() * 256);
		//pick a 'blue' from 0-255
		var b = Math.floor(Math.random() * 256);
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}