/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

function convertObjectToList(obj) {
  // your code here
  let solutionArr=[];
  let innerArrs;
  
 
  

  for(let key in obj){
    innerArrs = [];
     innerArrs.push(key);
     innerArrs.push(obj[key]);
    solutionArr.push(innerArrs)
  }
  console.log(solutionArr);
}
convertObjectToList({
  name: 'Holly',
  age: 35,
  hobbies: ['coding', 'drawing', 'swimming'],
  family: {
    spouse: 'Craig',
    kids: 4,
    kidsNames: ['Emily', 'Jack', 'Julian', 'Amanda'],
    kidsAges: [12,9,8,5],
  },
  role: 'producer',
  species: 'canine',
  weight: 45
})