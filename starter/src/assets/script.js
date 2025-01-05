/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const cherry = {
  name: "Cherry",
  price: 6.99,
  quantity: 0,
  productId: 100,
  image: "images/cherry.jpg",
};
products.push(cherry);

const orange = {
  name: "Orange",
  price: 3.99,
  quantity: 0,
  productId: 101,
  image: "images/orange.jpg",
};
products.push(orange);

const strawberry = {
  name: "Strawberry",
  price: 5.99,
  quantity: 0,
  productId: 102,
  image: "images/strawberry.jpg",
};
products.push(strawberry);

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

// should get the correct product based on the productId
function getProductById(productId) {
  return products.find((product) => product.productId === productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  // should get the correct product based on the productId
  const product = getProductById(productId);
  if (product) {
    // should then increase the product's quantity
    product.quantity += 1

    // if the product is not already in the cart, add it to the cart
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  // should get the correct product based on the productId
  const product = getProductById(productId);

  if (product) {
    // should then increase the product's quantity
    product.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  // should get the correct product based on the productId 
  const product = getProductById(productId);
  if (product) {
    // should decrease the quantity of the product
    product.quantity -= 1;
    // if the function decreases the quantity to 0, the product is removed from the cart
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}


/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  cart.forEach((product, index) => {
    // should get the correct product based on the productId
    if (productId === product.productId) {
      // should update the product quantity to 0
      product.quantity = 0;
      // should remove the product from the cart
      cart.splice(index, 1)
    }
  })
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let sum = 0;
  // should iterate through the cart to get the total of all products
  cart.forEach((product) => {
    sum += product.price * product.quantity;
  })
  // should return the sum of the products in the cart
  return sum;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  // remove each item from the cart
  products.forEach((product) => removeProductFromCart(product.productId))
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let paid = 0;
function pay(amount) {
  // keep track the amount paid
  paid += amount;
  // remaining is a negative number if there is a remaining balance
  // remaining is a positive number if money should be returned to customer
  const remaining = paid - cartTotal();
  // transaction is complete
  if (remaining >= 0) {
    paid = 0;
    emptyCart();
  }
  return remaining;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
