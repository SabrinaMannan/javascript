// const products = [
//     { name: 'laptop', price: 65000 },
//     { name: 'shirt', price: 500 },
//     { name: 'watch', price: 15000 },
//     { name: 'phone', price: 15000 },

// ];

// let totalPrice = 0;
// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }


const cart = [
    { name: 'laptop', price: 65000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 5 },
    { name: 'watch', price: 15000, quantity: 2 },
    { name: 'phone', price: 15000, quantity: 3 },

];

let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal);