// Implement a function that takes a string of four digits as its argument, with each 
// digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that 
// evaluates to the number 24. If no such solution exists, return "no solution exists".

//second attempt
function solve (numStr) {
  let arr = numStr.split('');
  const a = arr[0], b = arr[1], c = arr[2], d = arr[3];
  const opArr = ["+", "-", "/", "*"];
  const getRand = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let number = arr[randomIndex];
    arr.splice(randomIndex, 1);
    return number;
  }
  const getRndm = () => Math.floor(Math.random() * 4);
  
  
  
  let equations = [];
  
  
  for (let i=0; i<500; i++){
    let eqA = `(${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)}) ${opArr[getRndm()]} (${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)})`;
    equations.push(eqA);
    arr = [a,b,c,d];
    let eqB = `(${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)}) ${opArr[getRndm()]} ${getRand(arr)}`;
    equations.push(eqB);
    arr = [a,b,c,d];
    let eqC = `${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)} ${opArr[getRndm()]} ${getRand(arr)}`;
    equations.push(eqC);
    arr = [a,b,c,d];
  }
  
  let twentyFours = Array.from(new Set(equations.filter(e => eval(e) === 24)));
  let result = twentyFours[0] || 'no solution exists';
  
  return result;
}

console.log(solve('1111'));





//first attempt
function solve24 (numStr) {
  let arr = numStr.split('');
  const numberVar = (str) => Number(str);
  const a = numberVar(arr[0]),
    b = numberVar(arr[1]),
    c = numberVar(arr[2]),
    d = numberVar(arr[3]);
  const numberArr = [a,b,c,d];
  const opArr = ["+", "-", "/", "*"];

  const addAll = numberArr.reduce((a,b) => a + b);
  const multiplyAll = numberArr.reduce((a,b) => a * b);

  // better way - randomize - create an array of 16? different equations - return one if it returns 24

  
  const equations = [];
  const nums = [];
  let result = 'no solution exists';
  
  do {
    const getRndm = () => Math.floor(Math.random() * 4);
    let eq = `${numberArr[getRndm()]} ${opArr[getRndm()]} ${numberArr[getRndm()]} ${opArr[getRndm()]} ${numberArr[getRndm()]} ${opArr[getRndm()]} ${numberArr[getRndm()]}`;
    equations.push(eq);
    nums.push(eval(eq));
    if (eval(eq) === 24){
      result = eq;
    }
  }
  while (equations.length < 100);

  // console.log('nums', nums);
  // console.log('equations', equations);

  return result;
}

// console.log(solve24('9923'));
 
