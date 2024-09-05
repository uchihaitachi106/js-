// closure function allows us have private variable and state 

// let count=0;
// function Counter() 
// {
//     count++;
//     console.log(count);
// }
// Counter();
// Counter(); //as you expected the count does not increase because the function refreshes everytime we call it
            //we can avoid this problem by declaring our count variable outside the fuction but our variable become public

//so overcome this problem  we came up with closure(a function enclosed within a function)
function outer()
{
let count=0;
function Counter() 
{
    count++;
    console.log(count);
}
return{Counter};
}
//outer().Counter(); //we can also do like this but the problem we get the same result
const wall=outer();// by assigning wall outside the function to outer()
wall.Counter();
wall.Counter();
count=10;//we are not able to access it
console.log(outer().count);// cannot print it