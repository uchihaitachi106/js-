// destructuring= can get elements from a array or object and assign it to a variable conviniently
//[] is used destructure a array
//{} is used to destructure an object

//example1 swaps values of two variables
let a=1;
let b=2;
[a, b]= [b, a];
console.log(a);
console.log(b);

//example 2 swap position within a array
const dragonBallz=["Goku", "Vegeta",  "Gohan", "Whis", "Broly"];
[dragonBallz[0], dragonBallz[3]]= [dragonBallz[3], dragonBallz[0]]; //we can swap elements in an array using destructuring
[dragonBallz[1], dragonBallz[3]]= [dragonBallz[3], dragonBallz[1]];
[dragonBallz[2], dragonBallz[3]]= [dragonBallz[3], dragonBallz[2]];
[dragonBallz[3], dragonBallz[4]]= [dragonBallz[4], dragonBallz[3]];
[dragonBallz[0], dragonBallz[3]]= [dragonBallz[3], dragonBallz[0]];
console.log(dragonBallz);

//example 3 assigning variables  to array
const[firstPlace, secondPlace, thirdPlace, ...others]=dragonBallz;
console.log(firstPlace);
console.log(secondPlace);
console.log(others);

// [dragonBallz[3], dragonBallz[4]]= [dragonBallz[2], dragonBallz[1]]; //cannot swap more than two values
//example4 extracting values from a object
person1={
    name:"gokul",//mentioned semi colon instead of , inside a object
    job:"employed",
    age:18
};
person2={
    name:"patrick",
    job:"umemployed"
};
const{name, job, age}=person1;
console.log(name);//runs perfectly
console.log(age);
console.log(job);

//example 5 destructure in function parameters

function data({name, job, age=18})//destructuring a object within a array // we can also  declare default values to elements if they dont have
{
    console.log(name);
    console.log(job);
    console.log(age);
}
data(person2);//forgot ot pass object


