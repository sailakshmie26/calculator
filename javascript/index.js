function getNumbers() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  return { num1, num2 };
}

function display(value) {
  document.getElementById("result").innerText = `RESULT: ${value}`;
}

function multiply() {
  const { num1, num2 } = getNumbers();
  display(num1 * num2);
}

function add() {
  const { num1, num2 } = getNumbers();
  display(num1 + num2);
}

function subtract() {
  const { num1, num2 } = getNumbers();
  display(num1 - num2);
}

function divide() {
  const { num1, num2 } = getNumbers();
  if (num2 === 0) {
    display("empty divisor!!");
    return;
  }
  display(num1 / num2);
}

function square() {
  const num1 = Number(document.getElementById("num1").value);
  display(num1 ** 2);
}

function cube() {
  const num1 = Number(document.getElementById("num1").value);
  display(num1 ** 3);
}

function clearCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "RESULT:";
}
