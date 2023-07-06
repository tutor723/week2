
//activity3 object
let coffeeShop  ={
    branch:"main", 
    cocaCola : 5,
   
    chips:5 ,
    
   
    drinksOrdered(){
  
  return `Your  drink order cost  is with all items chosen with costs ${this.cocaCola} pounds `
    },

    foodOrdered (){
        return `your food  order cost is with all items chosen with costs  ${this.chips}  pounds`
    }
,
    totalCost(){
        let cost = this.cocaCola+  this.chips;
        return `The total cost is ${cost}  pounds`
      
    }
   
}


console.log(coffeeShop. drinksOrdered());
console.log(coffeeShop.foodOrdered());
console.log(coffeeShop. totalCost());