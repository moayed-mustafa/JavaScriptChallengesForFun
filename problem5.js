// Problem-5 Write some JavaScript to find the MOST frequent item, and the LEAST frequent item in the following array. The return should look like: The most frequent item is: b. The least frequent item is : d
const mostAndLeastFrequent = ()=>{
const array = ['a','a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];
let soultionArray=[];
let lettersArray= []
const lettersObj = {a:0,b:0,c:0,d:0,e:0};
array.forEach(letter =>{
  switch(letter){
    case 'a':
    lettersObj.a++;
    break;
    case 'b':
    lettersObj.b++;
    break;
    case 'c':
    lettersObj.c++;
    break;
    case 'd':
    lettersObj.d++;
    break;
    case 'e':
    lettersObj.e++;
    break;
  }
});
console.log(lettersObj)
for(let key in lettersObj){
  soultionArray.push(lettersObj[key]);
  lettersArray.push(key)
}
  let max = (Math.max(...soultionArray));
  max = soultionArray.indexOf(max);
  console.log('Most frequent item is ' + lettersArray[max])
  let min = (Math.min(...soultionArray));
  min = soultionArray.indexOf(min);
console.log('Less frequent item is ' + lettersArray[min])

}
mostAndLeastFrequent()