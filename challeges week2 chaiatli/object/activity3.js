
//activity3 object
const coffeeShop = {
  branch: "Main Street",
  drinks: {
    "Espresso": 2.5,
    "Cappuccino": 3.0,
    "Latte": 3.5,
    "Mocha": 4.0
  },
  food: {
    "Croissant": 2.0,
    "Bagel": 2.5,
    "Sandwich": 4.0,
    "Cake": 3.5
  },
  drinksOrdered: function(order) {
    let totalCost = 0;
    let orderSummary = "Drinks ordered:\n";

    for (const drink in order) {
      if (this.drinks.hasOwnProperty(drink)) {
        const price = this.drinks[drink];
        orderSummary += `${drink} - $${price}\n`;
        totalCost += price;
      }
    }

    orderSummary += `Total cost: $${totalCost.toFixed(2)}`;
    return orderSummary;
  },
  foodOrdered: function(order) {
    let totalCost = 0;
    let orderSummary = "Food ordered:\n";

    for (const foodItem in order) {
      if (this.food.hasOwnProperty(foodItem)) {
        const price = this.food[foodItem];
        orderSummary += `${foodItem} - $${price}\n`;
        totalCost += price;
      }
    }

    orderSummary += `Total cost: $${totalCost.toFixed(2)}`;
    return orderSummary;
  }
};


You can use the drinksOrdered and foodOrdered methods to get a summary of the ordered items and their costs. Here's an example usage:
const myDrinkOrder = {
  "Espresso": 2,
  "Latte": 1
};

console.log(coffeeShop.drinksOrdered(myDrinkOrder));

const myFoodOrder = {
  "Croissant": 2,
  "Cake": 1
};

console.log(coffeeShop.foodOrdered(myFoodOrder));
