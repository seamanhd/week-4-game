


//-----------------------------------------------------------------------------
// GLOBAL VARIABLES
//-----------------------------------------------------------------------------

var targetNum = 0
var currentGuess = 0
var winCount=0
var lossCount=0
var crystalOne=0
var crystalTwo=0
var crystalThree=0
var crystalFour=0
var crystalArray=[];


//-----------------------------------------------------------------------------
//FUNCTIONS
//-----------------------------------------------------------------------------
function getTarget (min, max) {
  min = Math.ceil(40);
  max = Math.floor(100);
  targetNum = ( Math.floor(Math.random() * (max - min)) + min);
}

getTarget();
	 
$("#target").text("Target Number: " + targetNum)

function getCrystal (min, max) {
  min = Math.ceil(1);
  max = Math.floor(15);
  newCrystal = ( Math.floor(Math.random() * (max - min)) + min);
}

function setCrystals (){
	getCrystal ();
	crystalOne = newCrystal
	getCrystal ();
	crystalTwo = newCrystal
	getCrystal ();
	crystalThree = newCrystal
	getCrystal ();
	crystalFour = newCrystal
	console.log(crystalOne, crystalTwo, crystalThree, crystalFour)
}

setCrystals();

// iterate over an array using each? 

function checkGuesses (){
	if (currentGuess===targetNum) {
		winCount++;
		alert("You Win!");
		$("#wins").text("Wins: " + winCount);
		reset();
	}
	else if (currentGuess>targetNum) {
		lossCount++;
		alert("OOPS Not this time. Try again!");
		$("#losses").text("Losses: " + lossCount);
		reset();
	}
	else if (currentGuess<targetNum) {
		console.log("ran game");
	}
}


$("#crystalOne").on("click", function(){
	currentGuess+=crystalOne;
	$("#current").text("Current Total: " + currentGuess);
	checkGuesses();
})

$("#crystalTwo").on("click", function(){
	currentGuess+=crystalTwo;
	$("#current").text("Current Total: " + currentGuess);
	checkGuesses ();
})
$("#crystalThree").on("click", function(){
	currentGuess+=crystalThree;
	$("#current").text("Current Total: " + currentGuess);
	checkGuesses();
})
$("#crystalFour").on("click", function(){
	currentGuess+=crystalFour;
	$("#current").text("Current Total: " + currentGuess);
	checkGuesses();
})
	//create 4 random crystal numbers (where to update? val?)
	
	function reset () {
		getTarget();
	 
$("#target").text("Target Number: " + targetNum)
setCrystals();
currentGuess = 0;
$("#current").text("Current Total: 0")
	}





/* HANGMAN CODE
// ----------------------------------------------------------------------------
// FUNCTIONS
//------------------------------------------------------------------------------

var setUp = function () {
	// pick a random animal ----- not a global variable??
		currentAnimal = animalList[Math.floor(Math.random() * animalList.length)];
	console.log(currentAnimal);

	//setting guess count
		guessesLeft = 10;

	// split up letters of current animal
	currentAnimal.split("");
	//for (var i=0;i<currentAnimal.length;i++) {console.log(currentAnimal[i])};

	//create array of dashes
	for (var i=0;i<currentAnimal.length;i++) {
		dashes.push(" _ ");
	}

	//write dashes to the page
		document.querySelector("#current").innerHTML = "Current Word: " + dashes[0] + dashes[1] + dashes[2] + dashes[3] + dashes[4];
		//console.log(dashes)

}




// checking to see how many guesses are left 
var checkGuessCount = function () {
	if (guessesLeft>0) {
			//console.log("rungame");
			guessesLeft--;
		}

		else  {
			document.querySelector("#instructions").innerHTML = "Game over. Press any key to try again!";
			reset();
		}
}



// checking to see if user guessed a correct letter or a wrong letter
var checkUserGuess = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);



	if (currentAnimal.indexOf(userGuess) > -1) {
			console.log(true)
			var guessIndex = currentAnimal.indexOf(userGuess);
			console.log(guessIndex);
			dashes.splice(guessIndex, 1, userGuess);
			console.log(dashes);
			document.querySelector("#remaining").innerHTML = "Guesses remaining: " + guessesLeft;
			document.querySelector("#current").innerHTML = "Current Word: " + dashes[0] + dashes[1] + dashes[2] + dashes[3] + dashes[4];

		}


		else {
			console.log(false)
			document.querySelector("#remaining").innerHTML = "Guesses Remaining: " + guessesLeft;
			wrongGuesses.push(" " + userGuess);
			console.log(wrongGuesses);
			document.querySelector("#guessed").innerHTML = "Letters Already Guessed: " + wrongGuesses;

		}

		

}

// checking to see if the user has guessed all letters 
var checkWin = function () {

	var letterOne = dashes[0];
	var letterTwo = dashes[1];
	var letterThree = dashes[2];
	var letterFour = dashes[3];
	var letterFive = dashes[4];
	var guessToCheck = letterOne + letterTwo + letterThree + letterFour + letterFive;
	console.log(guessToCheck);

	if (guessToCheck === currentAnimal) {
		document.querySelector("#instructions").innerHTML = "You Win! <br/> Correct answer: " + currentAnimal + "<br/> Press any key to play again!";
		
		document.querySelector("#winner").innerHTML = "Wins: " + winCount++;

		reset();
	}

	



}


// a function to call other functions!
var runGame = function () {
	setUp();

	document.onkeyup = function () {
	
	checkUserGuess();
	checkWin();
	checkGuessCount();
	}
}

// --------------------------------------------------------------------------------------
// THE ACTUAL GAME! 

	runGame ();

var reset = function () {
	guessesLeft = 10;
	document.querySelector("#remaining").innerHTML = "Guesses remaining: " + guessesLeft;
	dashes =[];
	wrongGuesses=[];
	document.querySelector("#guessed").innerHTML = "Letters Already Guessed: " + wrongGuesses;
	currentAnimal="";
	runGame();
}
*/

	