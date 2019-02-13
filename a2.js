
var str = "";
var lastChar = "";

function myFunction(id) {

	if (lastChar === "=") {
		if ((id === "1") || (id === "2") || (id === "3") || (id === "4") || (id === "5") || (id === "6") || (id === "7") || (id === "8") || (id === "9")) {
			str="";
		}
		else {
			b = document.getElementById("answer");
			b.innerText = "ANS= "+ str;
		}
	}
	if (id === "=") {
		try {
			lastChar="="
			var at = eval(str);
			a = document.getElementById("screenText");
			a.innerText = at;
			b = document.getElementById("answer");
			b.innerText = str;
			str = at;

		}
		catch(err) {
			a = document.getElementById("screenText");
			a.innerText = "Error";
		}
	}

	else {
		str+=id;
		a = document.getElementById("screenText");
		a.innerText = str;
		lastChar=id;
	}
}


function clearScreen() {
	str = ""
	a = document.getElementById("screenText");
	a.innerText = str;
}
function calculate() {
  try {


  	var ans = document.calc.result.value;
  	var anser = eval(ans);

  	a = document.getElementById("answer");
	a.innerText = document.calc.result.value;


    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
	
  } catch(err){
      document.calc.result.value="Error";
    }
}