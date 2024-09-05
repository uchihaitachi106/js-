let attempts=0;
let minNum=1;
let maxNum=100;
let running=true;
let guess;
const numberGenerator=Math.floor(Math.random() *(maxNum-minNum+1))+minNum;
while(running)
{
    
    guess= window.prompt(`Enter a number`);
    guess= Number(guess);
    if(isNaN(guess))
    {
        window.alert("enter a valid number");
    }
    else if(guess<minNum||guess>maxNum)
    {
        window.alert("enter a valid number");
    }
    else
    { 
        attempts++;
        if(guess<numberGenerator)
        {
            window.alert("guess a higher number");
        }
        else if(guess>numberGenerator)
        {
            window.alert("guess a lower number");
        }
        else 
        {
            console.log(`the answer is${numberGenerator}.No of ${attempts}`);
            running=false;
        }
    }
}
// blunder do not enter random number generator within the loops
