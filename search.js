const products = [
    { name: 'iphone 4', price: 54000 },
    { name: 'iphone 12', price: 64000 },
    { name: 'samsung phone', price: 14000 },
    { name: 'shaomi phone', price: 10000 },
    { name: 'oppo phone', price: 15000 },
    { name: 'smartwatch', price: 15000 },
    { name: 'sapple watch', price: 45000 },
    { name: 'dell laptop', price: 15000 },
];

function searchProducts(products, searchText) {

    const result = []; //displaying the search item in a array
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product); //all details will be pushed in the array
        }
    }

    return result;
}

const matched = searchProducts(products, "phone");
console.log(matched);