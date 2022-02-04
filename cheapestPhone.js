//find the cheapest phone

const phones = [
    { name: 'nokia', price: 10000, camera: 10, storage: 8 },
    { name: 'Samsung', price: 20000, camera: 15, storage: 12 },
    { name: 'Shaomi', price: 15000, camera: 12, storage: 5 },
    { name: 'oppo', price: 9000, camera: 16, storage: 14 },
    { name: 'Walton', price: 30000, camera: 5, storage: 8 },


];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }


}

console.log(cheapest);