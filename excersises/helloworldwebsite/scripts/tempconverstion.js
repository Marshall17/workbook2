function conFtoC() {
  let number1 = document.getElementById("number1");

  let fahrenheit = Number(number1.value);

  let convert = ((fahrenheit - 32) * 5) / 9;
  let number2 = document.getElementById("number2");
  number2.value = convert;
}
conFtoC();

function conCtoF() {
  let number1 = document.getElementById("number1");

  let   celcius = Number(number1.value);
 
  
  let convert = (celcius * 9) / 5 + 32 ;
  let number2 = document.getElementById("number2");
  number2.value = convert;
}
conCtoF();
