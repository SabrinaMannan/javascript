// const fibo = [0, 1];

// for (let i = 2; i < 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//     element = fibo[i];


// }

// console.log(fibo);

//parameter is till what you want the series
function fibonacci(num) {

    if (typeof num != 'number') {
        return 'Enter a number';
    }
    const fibo = [0, 1];

    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        element = fibo[i];

    }

    return fibo;
}

const fiboSeries = fibonacci(20);
console.log(fiboSeries);

