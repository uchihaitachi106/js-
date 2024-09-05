//we are going to create a array full of objects
const fruits=[{name:"apple", calories:100, color:"red"},{name:"orange", calories:120, color:"orange"},
             {name:"pineapple", calories:200, color:"yellow"}];
console.log(fruits[0]);
fruits.push({name:"greenApple", calories:150, color:"green"});
// fruits.pop();
// fruits.splice(1,2);
fruits.forEach(fruit=> console.log(fruit.calories));//we can also give names instead of mentioning elements but ensure that 
//you call it correctly
console.log(fruits);   
fruits.map(fruit=> console.log(fruit.name.toUpperCase()))     
const yellow= fruits.filter(fruit=> fruit.color==="yellow");
console.log(yellow);
const maxfruit=fruits.reduce((max, fruit)=> fruit.calories>max.calories? fruit:max);//did not use ternary operator
console.log(maxfruit);//returns boolean value as output if ternary operator is not used
const lowCal=fruits.reduce((min, fruit) => fruit.calories<min.calories? fruit:min);
console.log(lowCal);//returns name of the fruit

