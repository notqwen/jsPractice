const fizz = 3;
const buzz = 5;
const border = 100;

let i = 1;
while (i <= border){
    if (i % (fizz * buzz) === 0){
        console.log("FizzBuzz");
    }
    else if (i % fizz === 0){
        console.log("Fizz")
    }
    else if (i % buzz === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
    i++;
}