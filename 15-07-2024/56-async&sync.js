//synchronomous- executes the code in order 
//asynchronomous- executes the code concurrently does not interrupt the flow of the execution,examples setTimeOut(), 

setTimeout(()=>console.log("take1"), 3000);
console.log("take 2");
console.log("take 3");

function func1(callback)
{
    // setTimeout(()=>console.log("fight"), 3000); should mention within the delay
    // callback();
    setTimeout(()=>{console.log("fight"); callback()}, 3000);
}
function func2()
{
    console.log("fight1");
    console.log("fight2");
}
func1(func2);