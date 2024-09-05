// arrow functions= a concise way to write functions .good for simple functions which are used only once
// syntax= ()=>code what you want
const value= (name, age)=> {console.log(`hello ${name}`);console.log(`you are ${age}`);}
value("gokul", "19");

// incorporating arrow functions in reduce()
let number=[1, 2, 3, 4, 5, 6];
const total= number.reduce((element,accumulator)=> element+accumulator);
console.log(total);

// incorporating arrow  function in foreach
// for some reason return did not work on foreach
let amount=[489492, 71634712,7612391];
const TA= amount.forEach((element=> console.log(element+2)));
console.log(TA);

// incorporating arrow function in Map
let numbers=[1, 2, 3, 4, 5, 6];
const num= numbers.map((element)=> Math.pow(element, 2));
console.log(num);

//incorporating filter method
let nums=[10, 20, 35, 30, 50];
const num1=nums.filter((element)=> element%2===0);
console.log(num1);

