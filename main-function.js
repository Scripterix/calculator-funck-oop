let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');

let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');

console.log(input4);
console.log(input5);
console.log(input6);

input1.addEventListener('mouseout', sum);
input2.addEventListener('mouseout', sum);

function sum() {
  let result = parseInt(input1.value || 0) + parseInt(input2.value || 0);
  input3.value = result
  console.log(input3.value);
}

input4.addEventListener('mouseout', sub);
input5.addEventListener('mouseout', sub);

function sub() {
  let result = parseInt(input4.value || 0) -
    parseInt(input5.value || 0);
  input6.value = result
  console.log(input6.value)
}


// OOP version 

class Calculator {
  calculate(operand1, operator, operand2) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      default:
        return NaN; // Invalid operator
    }
  }
}

const calculator = new Calculator();

document.getElementById('calculate').addEventListener('click', function () {
  const operand1 = parseFloat(document.getElementById('operand1').value) || 0;
  const operator = document.getElementById('operator').value.trim();
  const operand2 = parseFloat(document.getElementById('operand2').value) || 0;

  const result = calculator.calculate(operand1, operator, operand2);
  if (!isNaN(result)) {
    document.getElementById('result').value = result;
  } else {
    alert('Invalid operator! Please enter "+" or "-".');
  }
});


class Calculator2 {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
  }
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 30);

console.log(person1);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person2 = new Person("Alice", 25);

console.log(person2);

let sumOfAges = person1.age + person2.age;

console.log('Suma wiekou osób: ', sumOfAges);