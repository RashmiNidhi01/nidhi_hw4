const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));
const oper= prompt('Enter operator (+, -, * or / ): ');

let result;
if (oper == '+') {
    result = num1 + num2;
    
console.log(`${num1} + ${num2} = ${result}`);
}
else if (oper== '-') {
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
}
else if (oper == '*') {
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
}
else {
    result = num1/ num2;
    console.log(`${num1} / ${num2} = ${result}`);

}