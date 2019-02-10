function myFunction(id) {
  document.calc.result.value+=id;
}

function clearScreen() {
  document.calc.result.value="";
}

function calculate() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } catch(err){
      document.calc.result.value="Error";
    }
}