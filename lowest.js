function findSmallest(numbers) {
    let smallest = numbers[0];

    for (i = 0; i < numbers.length; i++) {


        const element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }

    return smallest;
}

const small = findSmallest([260, 182, 45]);
console.log("smallest number is:", small);


