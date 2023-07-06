
//activity5(array) 
for (let j=0; j<6;j++){
var randNum =  Math.floor(Math.random() * 31);

if (randNum %7 ==0)
{
    console.log(`Number ${randNum} is divisible by 7`)
}
else{
    console.log(`Number ${randNum} is not  divisible by 7`)
}
}