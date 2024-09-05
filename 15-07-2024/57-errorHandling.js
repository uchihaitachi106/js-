//error handling- handling the error and continuing the program, try, catch, finally
try
{
    console.lag("hello");
}
catch(error)
{
    //console.log(error);// correct but will not highlight the error
    console.error(error);
}
console.log("the end");

function division()
{
    const dividend=window.prompt("Enter a number:");
    const divisor=window.prompt("Enter a number:");
    try
    {
        if(dividend==0||dividend=="")
        {
            throw new Error("dividend cannot be 0");//error customization
        }
        else if(divisor==0||divisor=="")
        {
            throw new Error("divisor cannot be zero");
        }
        else
        {
            const result=dividend/divisor;
            console.log(`The result is:${result}`);
        }
    }
    catch(error)//if catch is not mentioned the errors will not be printed
    {
        // console.log(error); correct but there will be no highlights
        console.error(error);
    }
}
division();