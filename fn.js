// function addTwo(num1, numb2) {
//     console.log(num1, numb2);
//     var total = num1 + numb2;
//     return total;
// }


// var result = addTwo(23, 45);
// console.log('Result: ', result);


// function multiply(num1, num2) {
//     var product = num1 * num2;
//     return product;
// }


// var total = multiply(6, 7);
// console.log("Product is", total);

function subtraction(no1, no2) {
    if (no1 > no2) {
        var difference = no1 - no2;
    }
    else {
        var difference = no2 - no1;
    }
    return difference;
}

var answer = subtraction(2, 8);
console.log("Difference is :", answer);
