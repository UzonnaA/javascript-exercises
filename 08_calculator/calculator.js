const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	mySum = arr.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0);

  return mySum;
};

const multiply = function(arr) {
  mySum = arr.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);

  return mySum;
};

const power = function(base, toPower) {
	let sum = 1;

  if(toPower == 0){
    return 1;
  }

  for(let i = 0; i < toPower; i++){
    sum = sum * base;
  }

  return sum;
};



const factorial = function(num) {
	arr = [];
  if(num == 0){
    return 1;
  }

  for(let i = 1; i <= num; i++){
    arr.push(i);
  }

  final = arr.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);

  return final;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
