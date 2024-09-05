// no method chaining
let username=window.prompt("Enter your name:");
username=username.trim();
let letter=username.charAt(0);
letter=letter.toUpperCase();
let extra=username.slice(1);
extra=extra.toLowerCase();
username=letter + extra;
console.log(username);

// methodchaining
let username1=window.prompt("enter your name");
username1=username1.trim().charAt(0).toUpperCase()+username1.slice(1).toLowerCase();
console.log(username1);

// blunder mentioning username. to everything
//file is running successfully there are no errors
// need html to check output