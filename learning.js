// console.log('hello');
// let name='hi';
// let num=3;
// let age=true;
// let status=undefined;
// let me=null;
// console.log(name);
// console.log(num);
// console.log(age);
// console.log(status);

// this is the basic syntax for objects
// person={
//     name:'gokul',
//     age:21
// };
// console.log(person.name);

// this how we can use function

// function person(square){
//     return square*square;
// }
// let number=person(3);
// console.log(number);

// array

// this is how we create an array
// car=['bmw','audi','i10'];
// car[3]='jaguar';
// console.log(car);
// console.log(car.length);
// console.log(car[1]);

// ----------------------user input---------------------

// there are two ways to get user input in js
// easy way=create a window.prompt();
// professional way=create a input&submit button html

// let username;
// username=window.prompt(`what is your name:`);
// document.getElementById("myh1").textContent=`Hello ${username}`;

// let username;
// document.getElementById("submiit").onclick= function()
// {
//     username=document.getElementById("name").value;
//     document.getElementById("myh1").textContent=`helo ${username}`;
// }

// // ------------------type conversion---------------
// // type coversion is important bcoz js declares user ipnput as string
// let age;
// age=window.prompt("what is your age:");
// age=Number(age);
// age+=1;
// document.getElementById("myh1").textContent=`Hello ${age}`;

// // ---------------counter-------------------

// const decrease=document.getElementById("decreaseBtn");
// const increase=document.getElementById("increaseBtn");
// const reset=document.getElementById("resetBtn");
// const counter=document.getElementById("mylabel");
// let count=0;
// decrease.onclick=function()
// {
//     count--;
//     counter.textContent=count;
// }
// increase.onclick=function()
// {
//     count++;
//     counter.textContent=count;
// }
// reset.onclick=function()
// {
//     count=0;
//     counter.textContent=count;
// }
// // key takeaways:
// forgot to mention document

// // -------------------random number roll-----------------
// const roll=document.getElementById("roll");
// const Number1=document.getElementById("number");
// const Number2=document.getElementById("number1");
// const Number3=document.getElementById("number2");
// const jackpot=document.getElementById("jackpot");
// let randomNumber1;
// let randonNumber2;
// let randomNumber3;
// roll.onclick=function()
// {
//     randomNumber1=Math.floor(Math.random()*9)+1;
//     Number1.textContent=randomNumber1;
//     randomNumber2=Math.floor(Math.random()*9)+1;
//     Number2.textContent=randomNumber2;
//     randomNumber3=Math.floor(Math.random()*9)+1;
//     Number3.textContent=randomNumber3;
//     if(randomNumber1==randomNumber2==randomNumber3)
//         {
//             jackpot.textContent="you are extremely lucky";
//         }
//         else if(randomNumber1==randomNumber2||randomNumber2==randomNumber3||randomNumber1==randomNumber3){
//             jackpot.textContent="almost there";    
//         }
//         else
//         {
//             jackpot.textContent="better luck next time";
//         }       
// }
// // take away:
// // blundered by using the variable number instead of randomNumber

// ------------------checked-------------------

// const checkBox=document.getElementById("myCheckBox");
// const visa=document.getElementById("one");
// const Mastercard=document.getElementById("two");
// const UPI=document.getElementById("three");
// const submit=document.getElementById("myButton");
// const result=document.getElementById("result");
// const paymentResult=document.getElementById("paymentResult");
// submit.onclick=function()
// {
//     if(checkBox.checked)
//     {
//         result.textContent="Welcome to our channel";
//     }
//     else
//     {
//         result.textContent="Please subscribe";
//     }
//     if(visa.checked)
//     {
//         paymentResult.textContent="VISA option selected";
//     }
//     else if(UPI.checked)
//     {
//         paymentResult.textContent="UPI option selected";
//     }
//     else if(Mastercard.checked)
//     {
//         paymentResult.textContent="MasterCard option selected";
//     }
//     else
//     {
//         paymentResult.textContent="please selct a payment method";
//     }
// }

// -----------------ternary operator----------------------
// const submit=document.getElementById("submit");
// const result=document.getElementById("agee");
// submit.onclick=function()
// {
//     // always declare the constant inside the function when you are getting the value

//     const age=document.getElementById("age").value;
//     result.textContent=age>18 ? "you are eligible" : "you are not eligible";
// }
const submit=document.getElementById("submit");
const push=document.getElementById("push");
const pull=document.getElementById("pull");
const leg=document.getElementById("leg");
const push2=document.getElementById("push2");
const pull2=document.getElementById("pull2");
const leg2=document.getElementById("leg2");

submit.onclick=function()
{
    const workout=document.getElementById("gymWorkout").value;
    switch(workout)
    {
        // blunder:mention the string within quotes

        case 'monday':
            push.textContent="chest press,decline press,pec flies,pushdown";
            break;
        case 'tuesday':
            pull.textContent="LatPulldowns,Pull ups,Dumbell Rowing";
            break;
        case 'wednesday':
            leg.textContent="Legextension,Barbell Back squat,Hack squat,Leg press";
            break;
        case 'thursday':
            push2.textContent="push-ups,Decline dumbell press";
            break;
        case "friday":
            pull2.textContent="Tbar rowing";
            break;
        case "saturday":
            leg2.textContent="Glute bridge";
            break;
        case "sunday":
            pull.textContent="rest";
            break;
        default:
            pull.textContent="enter a day";
            break;                        
    }
}




