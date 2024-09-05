// nothing special similar to foreach
// returns a new array
// use map if you want to preserve your original array 
let fruits =["apple", "orange", "dragon fruit"];
const fruit= fruits.map(long);
console.log(fruit);
// we will not get the expected output map() will not filter the Array.(and reduce the array elements). 
// if you want to filter and return your array sue filter()

// function long(element)
// {
//     return element.length<7;
// }

function long(element)
{
    return element.toUpperCase();
}
