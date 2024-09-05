// callBack= call back are functions in which fuction names are passed in as argument
// syntax
// function x(functionName)
// {
//     console.log("hello");
//     functionName();  
// }

function sum(callback , x , y)
{
    let result= x + y;
    callback(result);
}
function display(result)
{
    let view= document.getElementById("1");
    view.textContent=result;
}
sum(display , 1 , 1);