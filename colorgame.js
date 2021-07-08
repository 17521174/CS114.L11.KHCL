var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

for(var i = 0; i < modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
		reset();
	});
}


function reset()
{
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i=0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = 'none';
		}
	}

	h1.style.backgroundColor = 'steelblue';
}
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquare = 3;
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++)
// 	{
// 		if(colors[i])
// 		{
// 			squares[i].style.background = colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquare = 6;
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++)
// 	{
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});



colorDisplay.textContent = pickedColor;



for(var i=0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		//add click listeners to squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}

function changeColors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i = 0; i < num; i++)
	{
		//push randomcolor into arr
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var red = Math.floor(Math.random() *256);
	var green = Math.floor(Math.random() *256);
	var blue = Math.floor(Math.random() *256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}