function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairwoodQuantity = chairQuantity * perChairWood;
    const tablewoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairwoodQuantity + tablewoodQuantity + bedWoodQuantity;

    return totalWood;

}

const firstCalculation = woodCalculator(3, 2, 4);

console.log(firstCalculation);