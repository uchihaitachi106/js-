let button = document.querySelectorAll(".buttons");
button.forEach(button=> button.addEventListener("click",event=> event.target.classList.add("touched")));
//button.classList.remove("touched");
button.forEach(button=>button.addEventListener("mouseover" , event=> event.target.classList.add("reached")));
//button.addEventListener("mouseover", event => event.target.classList.toggle("reached"));
button.forEach(button=>button.addEventListener("mouseout", event => event.target.classList.toggle("reached")));
button.forEach(button => button.addEventListener("click", event => {event.target.classList.replace("touched" , "disabled")}));
// i dont know why the above code works i used remove function instead of using replace