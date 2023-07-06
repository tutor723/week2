//Activity 2 object

let pet ={
    name:"Mithu", 
    typeOfPet: "parrot", 
    age:5, 
    colour:"green",

    eat(){
  return `${this.name} is eating chilly`
    },

    drink(){
      return `${this.name} is drinking water`
    }

    
}

console.log(pet.drink());
console.log(pet.eat());