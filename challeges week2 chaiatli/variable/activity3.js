// activity3 Variable

const sampleDate = new Date("07/15/2015").getTime();  

const todayDate =new Date().getTime();

const totaltime =  todayDate - sampleDate;
const totalDay =  totaltime/ (1000 * 60 * 60 * 24);  
const totalDay1 = totalDay.toFixed();
console.log(`The totalday is from birthdate is ${totalDay1}`);

