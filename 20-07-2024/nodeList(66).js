// nodeList = static  collection of html elements that wont update automatically.
//            can be creted by using querySelectorAll()

let node =  document.querySelectorAll(".buttons");
// node.forEach(button => {button.style.backgroundColor= "grey"; button.textContent+="😁"} );

// node.forEach(button => {button.addEventListener("click", event=>{
//     if (event.target.style.backgroundColor==="grey"){event.target.style.backgroundColor="tomato"} 
//     else{event.target.style.backgroundColor="grey"}
// })
// });

// creating new button on nodelist

// let newButton = document.createElement("button");
// newButton.textContent = "button 5";
// // newButton.classList =  ".buttons"; no need add (.)
// newButton.classList = "buttons";
// document.body.appendChild(newButton);
// node = document.querySelectorAll(".buttons");
// console.log(node);

//deleting a element from the nodelist
node.forEach(button =>{button.addEventListener("click" , event => {event.target.remove(); node=document.querySelectorAll(".buttons"); console.log(node);})});
