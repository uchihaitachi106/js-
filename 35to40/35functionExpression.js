// function = a block of code which can be reused by invoking it 
// function expression= in this we can pass the function as arguments and values

// function is declared as the variable

const hello= function(){
    console.log("hello");
}
hello();

// function is passed in as argument or value

setTimeout(function(){console.log("hell");},3000);

// function expression in array map()

let numbers=[1, 2, 3, 3, 4, 5, 6];
const number=numbers.map(function(element) { return (element=Math.pow(element, 2)); });
console.log(number);