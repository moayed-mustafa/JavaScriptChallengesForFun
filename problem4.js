// Problem-4 Write some JavaScript that finds the average of the following array:
const arrayAvg = ()=>{
const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];
let sum = 0;
array.forEach(number =>{
 sum += number;
})
let avg = sum / array.length;
avg= parseInt(avg)
console.log(`The Average is ${avg}`);

}
arrayAvg();