//finding largest element of array
// function largestElement(numbers) {
//     let largest = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         console.log(element);

//         if (element > largest) {
//             largest = element;
//         }
//     }

//     return largest;
// }

// const ages = [18, 25, 30];
// const oldest = largestElement(ages);

// console.log("Largest number is", oldest);

//Finding largest element of array of negative number

function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);

        if (element > largest) {
            largest = element;
        }
    }

    return largest;
}

const ages = [-8, -25, -78];
const oldest = largestElement(ages);

console.log("Largest number is", oldest);
