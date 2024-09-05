// callback Hell =  a bunch of functions nested within another function and the code becomes very hard to understand

function one(callback)
{
    setTimeout( ()=> {  console.log("Task 1 is completed"); callback();} , 2000);
    
}
function two(callback)
{
    setTimeout( ()=> {  console.log("Task 2 is completed"); callback();} , 1000);
   
}
function three(callback)
{
    setTimeout( ()=> {  console.log("Task 3 is completed"); callback();} , 1500);
    
}
function four()
{
    setTimeout( ()=> {  console.log("Task 4 is completed"); } , 500);
}
one(()=>
    two(()=>
    three(
        ()=>four(()=>console.log("All the tasks are completed"))
    )));


