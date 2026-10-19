const number = Math.floor(Math.random() * 100) + 1;
let count = 0;
let isCancelled = false;
let isGuessed = false;
while (count < 7){
    const raw = prompt("Введите число от 1 до 100")
    
    if (raw === null){
        alert("Выйти из игры");
        isCancelled = true;
        break;
    }
    const inputNum = Number(raw);

    if (typeof inputNum === 'number' || inputNum < 1 || inputNum > 100){
        alert("Введено неверный элемент");
        continue;
    }

    if (inputNum < number){
        alert("Больше");
    }
    else if (inputNum > number){
        alert("Меньше");
    }
    else {
        alert("Нашел!");
        isGuessed = true;
        break;
    }
    count++;
}
if (!isGuessed && !isCancelled) {
    alert(`Не угадал. Было число ${number}`);
}