//ACTIVITY 3 function//
const pinNumber =2562;
balance = 20000;
const cashwithdrawl = (number,amount) => 
{
    if((number === pinNumber) && (amount <= balance)){
   console.log(`You can draw amount ${amount}`)
}
else{
    console.log(`You can not draw amount ${amount}`)
}
}
cashwithdrawl(2562,100);

