function onAddBtnClicked() {
  const number1field = document.getElementById("number1Field");
  const number2field = document.getElementById("number2Field");

  let number1 = Number(number1field.value);
  let number2 = Number(number2field.value);

  let answer = number1 + number2;
  const answerField = document.getElementById("answerField");
  answerField.value = answer;
}
onAddBtnClicked();

function onSubtractClicked() {
  const number1field = document.getElementById("number1Field");
  const number2field = document.getElementById("number2Field");

  let number1 = Number(number1field.value);
  let number2 = Number(number2field.value);

  let answer = number1 - number2;
  const answerField = document.getElementById("answerField");
  answerField.value = answer;
}
onSubtractClicked();

function onMultiplyClicked() {
    const numb1 = document.getElementById("number1Field")
    const numb2 = document.getElementById("number2Field")

    let numbe1 = Number(numb1.value)
    let numbe2 = Number(numb2.value)

    let answer = numbe1 * numbe2
    const answfield = document.getElementById("answerField")
    answfield.value = answer;
    
}
onMultiplyClicked()

function onDivideBtnClicked() {
    const number1field = document.getElementById("number1Field");
    const number2field = document.getElementById("number2Field");
  
    let number1 = Number(number1field.value);
    let number2 = Number(number2field.value);
  
    let answer = number1 / number2;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;
  }
  onDivideBtnClicked();