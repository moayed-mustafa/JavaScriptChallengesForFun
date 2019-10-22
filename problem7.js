//Problem-7 Imagine that you're wanting to withdraw cash from the bank to cover specific costs. You want to withdraw the exact dollar amount, using the largest bills possible. For example, if the cost you were trying to cover is $1,745, you would need to withdraw 17 $100 bills, 2 $20 bills and 1 $5 bill. We'll leave change (anything less than a dollar) out of it for the sake of the exercise.

// To solve this, write a function that takes one argument, cost and returns an object with the bill breakdown. For example, the object returned for 
// $1,744, would like look this:{
//   100: 17,
//   20: 2,
//   1: 4
// }
const billBreakDown = (cost)=>{
  

  
  // solving the problem in a hypothetical situation where the lowest bill is 5
  // create an object to store the values in
const solutionObj = {100:0,
50:0,
20:0,
10:0,
5:0};
// figure out how many hundreds you can get out of the total amount
let hundredsWithDecimals = cost / 100
let hundredsWithOutDecimals =parseInt(cost / 100)
let remaining = hundredsWithDecimals - hundredsWithOutDecimals
remaining = remaining  * 100;
remaining = Math.round(remaining)

// update the solution object
solutionObj[100]+= hundredsWithOutDecimals;
  
  

  
// figure out how many fifties in the remaining amount

let fiftiesWithDecimals = remaining / 50;
let fiftiesWithOutDecimals = parseInt(fiftiesWithDecimals);
remaining = fiftiesWithDecimals - fiftiesWithOutDecimals;
remaining = remaining * 10
remainig =  Math.round(remaining)
// update the solution object
solutionObj[50]+= fiftiesWithOutDecimals;

// since every cost number im inputting can be divided by 5, update the remaining amount by multiplying it by 5
remaining = remaining * 5
remaining= Math.round(remaining)
// console.log(`remaining ${remaining}$`)

// figure out how many twinties are in the remainig amount
let twintiesWithDecimals = remaining /20;
let twintiesWithOutDecimals = parseInt(twintiesWithDecimals)
// update the remaining
remaining = twintiesWithDecimals - twintiesWithOutDecimals;
remaining = (remaining / 5)* 100
remaining = Math.round(remaining)
// update the solution object
solutionObj[20]+= twintiesWithOutDecimals
// console.log(`remaining ${remaining}$`)

// figure out how many tens are in the remaining amount
if(remaining >= 10){
  let tensWithDecimals = remaining / 10
  let tensWithOutDecimals = parseInt(tensWithDecimals)
  remaining = tensWithDecimals - tensWithOutDecimals;
  remaining*=10;
  remaining = Math.round(remaining)
  // console.log(`remaining ${remaining}$`)
  // update the object solution
  solutionObj[10]+= tensWithOutDecimals;
  solutionObj[5]+= remaining;

}else{
  remaining = remaining / 5
  solutionObj[5]+= remaining;
  // return `remaining ${remaining}`;

}

console.log(solutionObj);


return solutionObj
}
billBreakDown(5250)

