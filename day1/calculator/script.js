const num1 = prompt("Введите первое число");
const op = prompt("Введите знак операции");
const num2 = prompt("Введите второе число");

switch (op){
    case '+':
        console.log(`${num1} ${op} ${num2} = ${Number(num1) + Number(num2)}`);
        alert(`${num1} ${op} ${num2} = ${Number(num1) + Number(num2)}`);
        break;
    case '-':
        console.log(`${num1} ${op} ${num2} = ${Number(num1) - Number(num2)}`);
        alert(`${num1} ${op} ${num2} = ${Number(num1) - Number(num2)}`);
        break;
    case '*':
        console.log(`${num1} ${op} ${num2} = ${Number(num1) * Number(num2)}`);
        alert(`${num1} ${op} ${num2} = ${Number(num1) * Number(num2)}`);
        break;
    case '/':
        console.log(`${num1} ${op} ${num2} = ${Number(num1) / Number(num2)}`);
        alert(`${num1} ${op} ${num2} = ${Number(num1) / Number(num2)}`);
        break;
}