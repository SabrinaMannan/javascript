const names = ['sabrina', 'mitu', 'sumaiya', 'murad', 'sabrina', 'zawad', 'zabir'];

function removeDuplicate(names) {

    const unique = [];

    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];

    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1)
            // index of the element which is not in the array is -1 whch is pushed in the unique array{
            unique.push(element);
    }



    return unique;
}

const uni = removeDuplicate(names);

console.log(uni);