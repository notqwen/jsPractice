const num1 = prompt("Введите первое число");
const op = prompt("Введите знак операции");
const num2 = prompt("Введите второе число");

if (num1 === null || op === null || num2 === null){
    alert("Завершить программу");
}
else if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))){
    alert("Введено неверное число");
}
else if (op === '/' && num2 === '0'){
    alert("На ноль делить нельзя!!!");
}
else {
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
    case '%':
        console.log(`${num1} ${op} ${num2} = ${Number(num1) % Number(num2)}`);
        alert(`${num1} ${op} ${num2} = ${Number(num1) % Number(num2)}`);
        break;
    case '**':
        console.log(`${num1} ${op} ${num2} = ${Number(num1) ** Number(num2)}`);
        alert(`${num1} ${op} ${num2} = ${Number(num1) ** Number(num2)}`);
        break;
    default: 
        alert("Неизвестная операция");
        break;
}
}
