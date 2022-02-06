// for (let i = 5; i < 16; i++) {
//     console.log(i);
// }

//simple sum
// let sum = 0;
// for (let i = 6; i >= 1; i--) {
//     sum = sum + i;
// }

// console.log(sum);

//sum with recursion
// function sum(i) {
//     console.log(i);
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(--i)
// }

// console.log(sum(5));


//i +sum(--i);
// 5+sum(4)
// 5+4+sum(3)
// 5+4+3+sum(2)
// 5+4+3+2+sum(1)
// 5+4+3+2+1
//=15

//simple factorial
// let factorial = 1;
// for (let i = 4; i >= 1; i--) {
//     factorial = factorial * i;
// }

// console.log(factorial);

// factorial with recursion

function factorial(i) {

    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}

console.log(factorial(4));



