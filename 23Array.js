// array= a structure thatcan store more than one value
let fruits=["pineapple","orange"];
fruits[2]="apple";
// push add to last array

fruits.push("papaya");

// removes the last element

fruits.pop();

// unshift add elements to first

fruits.unshift("strawberry");

// removes the first element

fruits.shift();


console.log(fruits);

// regular for loop

for(i=0;i<fruits.length;i++)
{
    fruits.sort();
    console.log(fruits[i]);
}

// optimal for loop to display elements within the array

for(let fruit of fruits)
{
    console.log(fruit);
}
