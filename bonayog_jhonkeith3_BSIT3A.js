// ==========================================
// 10 CONST VARIABLES (Fixed values)
// ==========================================
const shopName = "Cozy Corner Coffee";
const ownerName = "Sam";
const basePrice = 3;
const taxRate = 0.1;
const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
const pastryTypes = ["Croissant", "Muffin", "Donut"];
const discountCodes = [10, 20, 50];
const storeHours = "8 AM - 6 PM";
const city = "Seattle";
const isOpen = true;

// Helper objects for destructuring and optional chaining
const shopInfo = { title: "Cozy Corner", rating: 4.8 };
const sampleCoffee = { type: "Latte", price: 4, size: "Medium" };
const customerReview = { user: "Alice", comment: "Great coffee!" };
const vipCustomer = { name: "Bob", points: 150 };
const emptyVIP = {};

// ==========================================
// 10 LET VARIABLES (Variables that can change)
// ==========================================
let currentCustomer = "Alex";
let cupsSoldToday = 45;
let dailyRevenue = 225.50;
let specialOfTheDay = "Caramel Macchiato";
let discountApplied = false;
let queueLength = 3;
let currentTemp = 22;
let musicPlaying = "Jazz";
let staffOnDuty = 2;
let cashInRegister = 500;

// ==========================================
// 5 ARROW FUNCTIONS
// ==========================================
const greet = (name) => `Welcome to ${shopName},${name}!`;
const calcPrice = (price) => price + (price * taxRate);
const formatCups = (num) => `${num} cups sold today`;
const checkOpen = (status) => status ? "We are OPEN!" : "We are CLOSED.";
const summary = (item, price) => `Item: ${item} costs$${price}`;

// ==========================================
// 3 DESTRUCTURED ARRAYS
// ==========================================
const [coffee1, coffee2, coffee3] = coffeeTypes;
const [pastry1, pastry2] = pastryTypes;
const [code1, code2] = discountCodes;

// ==========================================
// 3 DESTRUCTURED OBJECT LITERALS
// ==========================================
const { title, rating } = shopInfo;
const { type, price } = sampleCoffee;
const { user, comment } = customerReview;

// ==========================================
// 2 ARRAYS USING SPREAD OPERATORS
// ==========================================
const allMenuItems = [...coffeeTypes, ...pastryTypes];
const moreDiscounts = [...discountCodes, 75];

// ==========================================
// 2 OBJECT LITERALS USING SPREAD OPERATOR
// ==========================================
const upgradedCoffee = { ...sampleCoffee, iced: true };
const detailedReview = { ...customerReview, verified: true };

// ==========================================
// 2 ARRAYS USING .map()
// ==========================================
const discountedPrices = discountCodes.map(code => code * 0.9);
const upperCoffees = coffeeTypes.map(c => c.toUpperCase());

// ==========================================
// 2 ARRAYS USING .filter()
// ==========================================
const highDiscounts = discountCodes.filter(code => code > 15);
const shortNames = coffeeTypes.filter(c => c.length < 8);

// ==========================================
// 2 OBJECT LITERALS USING OPTIONAL CHAINING
// ==========================================
const vipPoints = vipCustomer?.points;
const vipBadge = emptyVIP?.badge?.tier;

// ==========================================
// 10+ TEMPLATE LITERALS (Console Logs for Output)
// ==========================================
console.log(`=== ${shopName} ===`);
console.log(`Owner: ${ownerName} \vert{} City:${city}`);
console.log(`Store Status: ${checkOpen(isOpen)} (${storeHours})`);
console.log(greet(currentCustomer));
console.log(`Special of the Day: ${specialOfTheDay}`);
console.log(`Featured Coffee: ${type} ($${price})`);
console.log(`Customer Review by ${user}: "${comment}"`);
console.log(formatCups(cupsSoldToday));
console.log(`Total Menu Items Available: ${allMenuItems.join(", ")}`);
console.log(`VIP Points for Bob: ${vipPoints}`);
console.log(`VIP Badge Tier: ${vipBadge ?? "No Badge Found"}`);
console.log(`Calculated Price with Tax: $${calcPrice(price)}`);