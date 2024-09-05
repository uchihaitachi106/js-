// i am lazy to create another css file so i am gonna style it using dom 
const button = document.getElementById("box");
button.style.border="solid 3px";
button.style.height="150px";
button.style.width="150px";
button.style.display= "flex";
button.style.alignItems="center";
button.style.fontWeight = "bold";
button.style.fontSize = "xx-large";
button.style.textAlign = "center";
button.style.justifyContent="center";
button.style.backgroundColor = "lightgreen";

button.addEventListener("click", function(){button.textContent="you are doomed 🍌";button.style.backgroundColor="tomato"; });
button.addEventListener("mouseover", function(){button.textContent="don't do it"; button.style.backgroundColor="yellow"});
button.addEventListener("mouseout", function(){button.textContent="Click Me😁"; button.style.backgroundColor="lightgreen"});