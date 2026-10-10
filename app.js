const products = [
    { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
    { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
    { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
    { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
    { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
    { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
  ];


//   Q1
// const sortedproduct = products.sort((a,b) => a.price - b.price);

// console.log(sortedproduct);


// Q2

// const sortedproduct = products.sort((a,b) => b.price - a.price);

// console.log(sortedproduct);



// Q3


// const sortedproduct = products.sort((a,b) => a.name.localeCompare(b.name));

// console.log(sortedproduct);


// Q4

// const sortedproduct = products.sort((a,b) => a.rating - b.rating);

// console.log(sortedproduct);


// Q5

// const sortedproduct = products.sort((a,b) => a.quantity - b.quantity);

// console.log(sortedproduct);


// Q6

// const sortedproduct = products.sort((a,b) => a.price - b.price).slice(0,3)

// console.log(sortedproduct);

// Q7

// const sortedproduct = products.sort((a,b) => a.price - b.price).slice(0,2)

// console.log(sortedproduct);

// Q8

// const sortedproduct = products.filter(f=> f.price <= 10000).sort((a,b)=> a.price - b.price)

// console.log(sortedproduct);


// Q9


// const sortedproduct = products.sort((a,b) => b.rating - a.rating).slice(0,3)

// console.log(sortedproduct);

// Q10

// const sortedproduct = products.sort((a,b) => b.rating - a.rating);

// console.log(sortedproduct);


// Reduce Question


// // 1. Calculate the total price of all products

// const totalPrice = products.reduce((total, product) => {
//   return total + product.price;
// }, 0);

// console.log(totalPrice);

// // 2. Calculate the total quantity of all products

// const totalQuantity = products.reduce((total, product) => {
//   return total + product.quantity;
// }, 0);

// console.log(totalQuantity);
// // 3. Calculate the average price of all products

// const averagePrice = products.reduce((total, product) => {
//   return total + product.price;
// }, 0) / products.length;

// console.log(averagePrice);
// // 4. Find the most expensive product using reduce()

// const mostExpensive = products.reduce((max, product) => {
//   return product.price > max.price ? product : max;
// });

// console.log(mostExpensive);

// // 5. Find the cheapest product using reduce()

// const cheapest = products.reduce((min, product) => {
//   return product.price < min.price ? product : min;
// });

// console.log(cheapest);

// // 6. Find the highest-rated product using reduce()
// const highestRated = products.reduce((best, product) => {
//   return product.rating > best.rating ? product : best;
// });

// console.log(highestRated);
// 7. Count products with a price greater than Rs. 5,000
// const count = products.reduce((total, product) => {
//   return product.price > 5000 ? total + 1 : total;
// }, 0);

// console.log(count);

// // 8. Calculate the total inventory value (price * quantity)
// const inventoryValue = products.reduce((total, product) => {
//   return total + product.price * product.quantity;
// }, 0);

// console.log(inventoryValue);
// // 9. Calculate the total quantity of products with a rating above 4.3
// const quantityAboveRating = products.reduce((total, product) => {
//   return product.rating > 4.3
//     ? total + product.quantity
//     : total;
// }, 0);

// console.log(quantityAboveRating);

// // 10. Use one reduce() to create an object containing all three totals
// const summary = products.reduce(
//   (acc, product) => {
//     acc.totalProducts += 1;
//     acc.totalQuantity += product.quantity;
//     acc.totalInventoryValue += product.price * product.quantity;

//     return acc;
//   },
//   {
//     totalProducts: 0,
//     totalQuantity: 0,
//     totalInventoryValue: 0
//   }
// );

// console.log(summary);