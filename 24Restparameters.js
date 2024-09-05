// (..rest) parameter= used within a function allows the fuction to get multiple parameters
// ...spread used to separate elements of the array
let food1="pani puri";
let food2="bhel puri";
let food3="masala puri";
let food4="dhai puri";
let food5="chana puri";
function menu(...foods)
{
    return foods;
}
console.log(...menu(food1,food2,food3,food4,food5));

function total(...rupees)
{
    let result=0;
    for(let rupee of rupees )
    {
        result+=rupee;
    }
    return result;
}
console.log(total(2,65,6,4));

function combiningStrings(...name)
{
    let fullName=name.join(" ");
    return fullName;
}
console.log(combiningStrings("SpongeBob","square","Pants","3"));

// blunder =+ is used instead of +=
