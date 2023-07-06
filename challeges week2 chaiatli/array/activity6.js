
//activity6(array) 

const bobsFollowers = ["Tom", "Kiya","Siya"," Riya","Giya"];
const hannahsFollowers =  ["Tom", "Keti","Siyara"," Joy","Giya"];
console.log("Same name of both follower:")
  for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
     if (bobsFollowers[i] == hannahsFollowers[j])
     console.log(bobsFollowers[i]);
    }
  }