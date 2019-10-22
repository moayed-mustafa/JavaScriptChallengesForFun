//problem-6 Imagine that you have two arrays, each with single letter strings in the arrays. For example:const array1=['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const array2=['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
// Write some JavaScript to create a new array based on the overlapping items and the number of times the overlap occurs. For example, our new array would look like this:['a', 'a', 'c', 'b', 'b'];
const overlap = ()=>{
const array1=['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const array2=['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
let obj1={a:'',b:'',c:'',d:''};
let obj2= {a:'',b:'',c:'',e:'', g:''};
let soultionArray=[];
array1.forEach(letter1 =>{
     switch(letter1){
    case 'a':
    obj1.a+='a';
    break;
    case 'b':
    obj1.b+='b';
    break;
    case 'c':
    obj1.c+='c';
    break;
    case 'd':
    obj1.d+='d';
    break;
  }

});
array2.forEach(letter2 =>{
     switch(letter2){
    case 'a':
    obj2.a+='a';
    break;
    case 'b':
    obj2.b+='b';
    break;
    case 'c':
    obj2.c+='c';
    break;
    case 'e':
    obj2.e+='e';
    break;
    case 'g':
    obj2.g+='g';
    break;
  }
});
console.log(obj1)
console.log(obj2)
for(let key1 in obj1){
  for(let key2 in obj2){
    if(key1 === key2){
      if(obj1[key1]< obj2[key2]){
        soultionArray.push(obj1[key1])
      }
      else{
        soultionArray.push(obj2[key2])
      }
    }
  }
}

let lettersString = soultionArray.join('');
console.log(lettersString.split(''))

}
overlap()