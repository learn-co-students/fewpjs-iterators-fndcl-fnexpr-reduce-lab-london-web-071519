const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// // Code your solution here
// const products = [
//   {name: 'Shampoo', price: 4.99},
//   {name: 'Donuts', price: 7.99},
//   {name: 'Cookies', price: 6.49},
//   {name: 'Bath Gel', price: 13.99}
// ];

// const totalPriceOld = (arr) => {
//   let sumTotal = 0;
//   arr.forEach((product) => (sumTotal += product.price));
//   return sumTotal;
// };

// const totaler = (sumTotal, name) => sumTotal + name.price;

// const totalPrice = (arr) => arr.reduce((a, b) => a + b.price, 0);

// // console.log(products.reduce(totaler, 0));
// console.log(totalPrice(products));

// const couponLocations = [
//   {room: 'Living room', amount: 5},
//   {room: 'Kitchen', amount: 2},
//   {room: 'Bathroom', amount: 1},
//   {room: 'Master bedroom', amount: 7}
// ];

// const couponCounter = (arr) => arr.reduce((a, b) => a + b.amount, 0);
// console.log(couponCounter(couponLocations));
// console.log (reduce())

const totalBatteries = batteryBatches.reduce((a, b) => a + b);
