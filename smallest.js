function findSmallest(first, second, third) {
    if (first < second && first < third)
        return first;

    else if (second < first && second < first)
        return second;

    else
        return third;
}

const smallest = findSmallest(2, 56, 1);
console.log("Smallest is:", smallest);