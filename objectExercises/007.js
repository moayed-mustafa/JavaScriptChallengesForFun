/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ): 

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:


if (firstName === 'Joe') {
  // do something
}

Starter Code :
*/

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};
      // greeting = `Welcome back, ${customer}! We're glad you liked us the first time!`;

function greetCustomer(firstName) {
  // your code here
  var greeting = '';
  let initial = firstName.slice(0,1).toUpperCase();
  let restOfName = firstName.slice(1,firstName.length);
  // make sure the first lette is capital and the rest is not!
  if(initial!== firstName[0]||restOfName!== restOfName.toLowerCase()){
    firstName = firstName.replace(firstName[0], initial)
    firstName = firstName.replace(restOfName ,restOfName.toLowerCase())    
  }
  // UPDATING GREETING IN ACOORDANCE TO THE NUMBER OF VISITS
  let customer = customerData[firstName] ;
  if(customer !== undefined){
    let NumberOfVisists = customerData[firstName].visits;
    NumberOfVisists === 1 ? 
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`:
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
  }
  else{
    greeting = 'Welcome! Is this your first time?'
  }

  console.log(greeting);
}
greetCustomer('hOWARD')

