const display=document.getElementById("display");
function appendToDisplay(input)
{
    //display.value=input;//try it
    display.value+=input;
}
function clearDisplay(input)
{
    display.value=input;
}
function Calculator(input){
    display.value=eval(display.value);
}