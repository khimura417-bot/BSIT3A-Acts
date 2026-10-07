// 2 Arrays
const prices = [100, 200, 300];
const items = ["Shirt", "Shoes", "Hat"];

// Arrow Function 1 & Map 1 (using template literals)
const formatPrices = prices.map(price => `PHP ${price}.00`);

// Arrow Function 2 & Map 2 (using template literals)
const uppercaseItems = items.map(item => item.toUpperCase());

// Arrow Function 3 (using template literals)
const displaySummary = (item, price) => `Item: ${item} costs ${price}`;

console.log(formatPrices);
console.log(uppercaseItems);
console.log(displaySummary("Shirt", "PHP 100.00"));
