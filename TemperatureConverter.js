let submit=document.getElementById("submit");
let fToc=document.getElementById("fahrenheitToCelcius");
let cTof=document.getElementById("celciusToFahrenheit");
let input=document.getElementById("answer");
let result=document.getElementById("result");
let temp;
function converting()
{
    if(fToc.checked)
    {
        temp=Number(answer.value);
        result.textContent=((temp-32)  * (5 / 9)).toFixed(1)+"°C";
    }
    else if(cTof.checked)
    {
        temp=Number(answer.value);
        result.textContent=(temp * 9 / 5 + 32).toFixed(1)+"°F" ;
    }

}