/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {
        firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}
        ,
    {
        firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'
    }
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  // your code here
  let solutionArray =[{}, {}]

  let key;
  let value;
  
//   loop through the array 
// console.log(array[0][0]);
array[0].forEach(arrayItem =>{
    key =arrayItem[0];
    value =arrayItem[1];
    solutionArray[0][key]= value   
})
array[1].forEach(arrayItem =>{
    key =arrayItem[0];
    value =arrayItem[1];
    solutionArray[1][key]= value   
})
console.log(solutionArray);
}
transformEmployeeData([
        [
             ['firstName', 'Joe'],
             ['lastName', 'Blow'], 
             ['age', 42], 
             ['role', 'clerk']
        ],
    
        [
             ['firstName', 'Mary'],
             ['lastName', 'Jenkins'],
             ['age', 36],
             ['role', 'manager']
        ]
    ])
