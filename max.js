// const bus = 460;
// const min = 360;

// if (bus > min) {
//     console.log('Bus is larger');

// }

// else {
//     console.log('min is bigger');
// }


function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }

    else if (second > first && second > third) {
        return second;
    }

    else
        return third;
}

const largest = findLargest(1301, 234, 334);
console.log("largest is: ", largest);