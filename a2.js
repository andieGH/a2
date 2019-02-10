function myFunction(id) {
  document.calc.result.value+=id;
}

function clearScreen() {
  document.calc.result.value="";
}
function calculate() {
  try {
  	var ans = document.calc.result.value;

  	a = document.getElementById("answer");
	a.innerText = ans;




    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
	
  } catch(err){
      document.calc.result.value="Error";
    }
}