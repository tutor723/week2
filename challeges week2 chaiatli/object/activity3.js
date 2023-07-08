
//activity3 object
const coffeeShop = {
    branchName: "Bob's Coffee Shop",

    drinkMenu: ["Tea", 1.50, "Coffee", 2.30],
    foodMenu: ["Pizza", 2.75, "Cheese", 3.45],

    drinkOrder(drink){
        for (let i = 0; i<this.drinkMenu.length; i++){
            if(drink===this.drinkMenu[i]){
                return this.drinkMenu[i+1]
            }
        } 
        return false 
    },

    foodOrder(food){
        for (let i = 0; i<this.foodMenu.length; i++){
            if(food===this.foodMenu[i]){
                let foodPrice = this.foodMenu[i+1]
                return this.foodMenu[i+1]
            } 
        }
        return false

    },

    order(drink, food){
        if (this.foodOrder(food) && this.drinkOrder(drink)){
            console.log(`You have ordered ${drink} at ${this.drinkOrder(drink)}`)
            console.log(`You have ordered ${food} at ${this.foodOrder(food)}`)
            console.log(`Total cost £${this.foodOrder(food)+ this.drinkOrder(drink)}`)

    } else {
            console.log("We do not have that item")
    }
}
}

coffeeShop.order("Coffee", "Pizza")
