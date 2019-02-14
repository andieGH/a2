/* 
  Andie Green-Harrison
  10125163 
  SENG 513 Winter 2019
  Lab B02 
*/

var str = "";
var lastChar = "";
var seenOperator = false;
var divByZero = false;

function myFunction(id) {

	// Get screen and answer elements
	screenDisplay = document.getElementById("screenText");
	answerDisplay = document.getElementById("answer");

	// Check if there is potential for divide by zero
	if ((lastChar === "/") && (id === "0")) {
		divByZero = true;
	}
	// Check if there was an error on last button press
	if (lastChar === "e") {
		// Do nothing
		if (id === "=") {
		}
		// Set string to 0
		if ((id === ".") || (id === "/") || (id === "*") || (id === "+") || (id === "-")) {
			str="0";
		}
		// Set string to empty
		else {
			str=""
		}
	}

	// Check if the last character was =
	if (lastChar === "=") {
		// If the current button press is a number set string to empty
		if ((id === "0") || (id === "1") || (id === "2") || (id === "3") || (id === "4") || (id === "5") || (id === "6") || (id === "7") || (id === "8") || (id === "9")) {
			str="";
		}
		// Otherwise change the answer display
		else {
			answerDisplay.innerText = "ANS= "+ str;
		}
	}

	// If the current press is =
	if (id === "=") {
		try {

			// If the division by zero flag is set, and the lastChar is a zero, error
			if ((divByZero) == true && (lastChar == 0)) {
				screenDisplay.innerText = "Error";
				lastChar = "e";
				divByZero = false;
			}
			// If the last press resulted in error do nothing
			else if (lastChar === "e") {
			}
			// If the last press was = do nothing
			else if (lastChar === "=") {
			}
			// If the lastChar was empty, i.e. this is the first press
			else if (lastChar === "") {
				answerDisplay.innerText = "";
				lastChar=id;
			}
			// Otherwise, evealuate the string
			else {
				var at = eval(str);
				screenDisplay.innerText = at;

				// If an operator has been seen display the string
				if (seenOperator === true) {
					answerDisplay.innerText = str;
				}
				else {
					answerDisplay.innerText = "ANS= " +str;
				}
				str = at;
				lastChar=id;
			}
		}
		// If there is an error evaluating the string
		catch(err) {
			screenDisplay.innerText = "Error";
			answerDisplay.innerText = str;
			lastChar = "e";
		}
	}

	// Otherwise check if it is an operator
	else {
		if ((id === "/") || (id === "*") || (id === "+") || (id === "-")) {
			seenOperator = true;
			
			if (lastChar === "e") {
				str="0";
			}
		}
		str+=id;
		screenDisplay.innerText = str;
		lastChar=id;
	}
}

// Function to clear the screen that displays button presses.
function clearScreen() {
	str = ""
	screenDisplay = document.getElementById("screenText");
	screenDisplay.innerText = str;
	seenOperator = false;
}
