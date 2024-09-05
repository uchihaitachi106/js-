// foreach= it is used to iterate over an array  by using functions as arguments
// its has prebuild properties like Element, array, index

numbers = [1, 2, 3, 4, 5, 6];
fruits = ["mango", "orange", "apple" ];
// you should place it above display inorder to display the doubled elements
// triple and double will be get their output but display element wont get te expected output it will help the above two 
// to get their exepected output
numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);
fruits.forEach(capital);
fruits.forEach(display);
function display(element)
{
    console.log(element);
}
function double(element, index, array)
{
    array[index]=element*2;

}
function triple(element)
{
    console.log(element*3);
}
function capital(element, index, array)
{
    array[index]=element.charAt(0).toUpperCase()+ element.slice(1);
}
console.log(numbers);

// alternative method
// console.log(...numbers)