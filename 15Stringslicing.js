// string slicing
// syntax: variable.slice(start,end);

let email="krishnangokula74@gmail.com";
// blunder did not mention emailinside ()
let firstname=email.slice(0,email.indexOf("@"));
console.log(firstname);
let lastname=email.slice(email.indexOf("@")+1);
console.log(lastname);