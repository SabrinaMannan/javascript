// const numb = [12, 34, 76, 89, 15];
// let sum = 0;
// for (let i = 0; i < numb.length; i++) {
//     const element = numb[i];
//     console.log(i, "=", element);
//     sum = sum + element;



// }

// console.log("summation:", sum);

//taking array as parameter and summation of elements
var numbers = [];
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }

    return sum;
}

var total = arrayTotal([20, 10, 80]);
console.log("sum is", total);