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
    let solutionArray =[]
    let obj = {};
     for(let x=0; x< array.length; x++){
         solutionArray.push(obj);
     }
  //    console.log(solutionArray)
    let key;
    let value;
    
  //   loop through the array 
  array.forEach(innerArray =>{
     innerArray.forEach(innerInnerArr=>{
        key = innerInnerArr[0];
        value= innerInnerArr[1];
        solutionArray.forEach(obj=>{
            obj[key]= value;
        })
     })
      
     
  })
  console.log(solutionArray);
  return solutionArray;
  
  }
  transformEmployeeData([
          [
               ['firstName', 'Joe'],['lastName', 'Blow'], ['age', 42], ['role', 'clerk'],['tshirtsize', 'xl']  
          ],
      
          [
               ['firstName', 'Mary'],['lastName', 'Jenkins'],['age', 36],['role', 'manager'], ['tshirtsize', 'xxl']
          ],
          [
              ['firstName', 'Craig'], ['lastName', 'Jeans'], ['age', 52], ['role', 'TechLead']
          ]
      ])
