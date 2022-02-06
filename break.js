const products = [
    { name: 'iphone 4', price: 54000 },
    { name: 'iphone 12', price: 64000 },
    { name: 'samsung phone', price: 14000 },
    { name: 'shaomi phone', price: 10000 },
    { name: 'oppo phone', price: 15000 },
    { name: 'smartwatch', price: 3000 },
    { name: 'sapple watch', price: 4000 },
    { name: 'dell laptop', price: 15000 },
    { name: 'walton laptop', price: 45000 }
];

// for (const product of products) {
//     if (product.price < 5000) {
//         break; // break stops the loop completely if found the condition but if anything is outside the loop will execute that
//     }

//     console.log(product);
// }

for (const product of products) {
    if (product.price < 10000) {
        continue; // continue skips the product which matches the condition but will execute the other parts of the loop. Will stop that iteration and skkip the print or other codes. 
    }

    console.log(product);
}


