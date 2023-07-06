//Activity 1 object
const person = {
    firstName: "Kiya",
    lastName: "Roy",
    age:" 56",
    fullName : function() {
    
       return   "Hello My name  is " +" "+  this.firstName ; 
    }
  };
  console.log( person.fullName());
