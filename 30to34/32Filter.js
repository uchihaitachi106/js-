// filter method filters the array and returns a new array
fruits = ["apple", "mango", "pomegranate", "dragon fruits"];
const short=fruits.filter(shorts);
console.log(short);
function shorts(element)
{
    return element.length<=6;
}

money= [99, 100, 123, 1234, 12567];
const total=money.filter(sum);
console.log(total);
// the below function will not get you the output of total because filter function will only filter the array 
// function sum(accumulator,element)
// {
//     return (element+accumulator);
// }
function sum(element)
{
    return element>1000; 
}