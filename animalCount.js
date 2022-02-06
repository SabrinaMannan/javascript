function animalCount(miles) {
    const animalNofirst10 = 10;
    const animalNosecond = 50;
    const animalrestMiles = 100;
    //for less than and equal to 10 miles
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }

    else if (miles <= 20) {
        const firstAnimalDense = 10 * animalNofirst10;
        const restMiles = miles - 10;
        const secondAnimalDense = restMiles * animalNosecond;
        const totalanimals = firstAnimalDense + secondAnimalDense;

        return totalanimals;
    }

    else {
        const firstAnimalDense = 10 * animalNofirst10;
        const restMiles = miles - 20;
        const secondAnimalDense = 10 * animalNosecond;
        const restAnimalDense = restMiles * animalrestMiles;
        const totalanimals = firstAnimalDense + secondAnimalDense + restAnimalDense;

        return totalanimals;
    }
}

const animal = animalCount(25);
console.log(animal);