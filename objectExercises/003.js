/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. 
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:
*/

function fromListToObject(array) {
  // your code here
  // declare the solution object
  const solutionObj = {};
  let indexZero;
  let indexOne;
  array.forEach(arrayItem =>{
    indexZero = arrayItem[0] 
    indexOne = arrayItem[1];
    solutionObj[indexZero] = indexOne;
  });
  console.log(solutionObj)

}
fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['maker', 'Hitshu Yamatashi'], ['designer', 'John Smith'], ['LeadMechanic','Yin Lee Heun'], ])
