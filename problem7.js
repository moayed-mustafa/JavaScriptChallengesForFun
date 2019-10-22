//Problem-7 Imagine that you're wanting to withdraw cash from the bank to cover specific costs. You want to withdraw the exact dollar amount, using the largest bills possible. For example, if the cost you were trying to cover is $1,745, you would need to withdraw 17 $100 bills, 2 $20 bills and 1 $5 bill. We'll leave change (anything less than a dollar) out of it for the sake of the exercise.

// To solve this, write a function that takes one argument, cost and returns an object with the bill breakdown. For example, the object returned for 
// $1,744, would like look this:{
//   100: 17,
//   20: 2,
//   1: 4
// }
const billBreakDown = (amount)=>{
  // declare the variables 
    let billsArray = [100, 50, 20, 10, 5,1]
    const solutionObj = {100:0,
  50:0,
  20:0,
  10:0,
  5:0,
  1:0};
  let modulus; 
  let numOfBills;
    //  loop through the bills array
  billsArray.forEach(bill =>{
    // start calculation is there is money to breakdown
    if(amount > 0){
      console.log('Checking ' + bill)
     modulus = amount % bill;
     console.log(`modulus=  ${modulus}  bill = ${bill}` )
     numOfBills = amount/ bill;
     console.log(`numOfBills=  ${parseInt(numOfBills)}  `)
    //  the amount is completely divisible by the first bill
    if(modulus === 0){
      solutionObj[bill]+=  numOfBills
      amount = modulus
  
   }
   else{
     // update the amount
     amount = modulus;
    //  amount = amount - (parseInt(numOfBills) * bill)
        
    //   parse number of bills 
    numOfBills = parseInt(numOfBills)
    // updat the object
    solutionObj[bill] += numOfBills
    console.log(solutionObj[bill]+ '*' + '$' + bill)
   }
  }
  console.log('/////////////////////')
  })
  console.log(solutionObj)
  return  solutionObj
  }
  billBreakDown(15036)

