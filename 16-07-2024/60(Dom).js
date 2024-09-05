const greeting= document.getElementById("greeting");
username=" Gokul";
greeting.textContent+=username;
const food= document.getElementsByTagName("h2");
console.log(food);
food[0].style.backgroundColor="yellow";//should mention the indices
const menu=document.getElementsByClassName("Foods");
menu[0].style.backgroundColor="red";
for(fooods of menu)
{
    fooods.style.backgroundColor="green";
}
try{
const h33= document.querySelector("h3");
h33.style.backgroundColor="blue";
}
catch(error)
{
    console.log(error);
}
const all=document.querySelectorAll("li");
all[3].style.backgroundColor="red";
console.log(all);

