
var str = "";
var lastChar = "";
var seenOperator = false;
var divByZero = false;

function myFunction(id) {

	screenDisplay = document.getElementById("screenText");
	answerDisplay = document.getElementById("answer");

	if ((lastChar === "/") && (id === "0")) {
		divByZero = true;
	}

	if (lastChar === "e") {
		if (id === "=") {

		}
		if ((id === ".") || (id === "/") || (id === "*") || (id === "+") || (id === "-")) {
			str="0";
		}
		else {
			str=""
		}

	}
	if (lastChar === "=") {
		if ((id === "0") || (id === "1") || (id === "2") || (id === "3") || (id === "4") || (id === "5") || (id === "6") || (id === "7") || (id === "8") || (id === "9")) {
			str="";
		}
		else {
			answerDisplay.innerText = "ANS= "+ str;
		}
	}

	if (id === "=") {
		try {
			if (divByZero == true) {
				screenDisplay.innerText = "Error";
				lastChar = "e";
				divByZero = false;
			}
			else if (lastChar === "e") {

			}
			else if (lastChar === "=") {

			}
			else if (lastChar === "") {
				answerDisplay.innerText = "";
				lastChar=id;
			}
			else {
				var at = eval(str);
				screenDisplay.innerText = at;

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
		catch(err) {
			screenDisplay.innerText = "Error";
			answerDisplay.innerText = str;
			lastChar = "e";
		}
	}


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


function clearScreen() {
	str = ""
	screenDisplay = document.getElementById("screenText");
	screenDisplay.innerText = str;
	seenOperator = false;
}
