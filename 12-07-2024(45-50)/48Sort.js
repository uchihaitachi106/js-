//Example 1 sorting a string array according to alphabetical order
const dragonBallz=["Goku", "Vegeta", "Whis", "Beerus"];
dragonBallz.sort();
console.log(dragonBallz);

//Example 2 sorting a array of numbers
const Numbers=[1, 8, 5, 3, 7, 9, 0, 10];
Numbers.sort((a, b)=> a-b);//if we trying to sort numbers this is mandatory
console.log(Numbers);

//Example 3 sorting  array full of objects according to age
const person=[{name:"goku", age:400, race:"saiyan"},{name:"vegeta", age:41, race:"saiyan"}, {name:"whis", age:1000, race:"angel"}];
person.sort((a, b)=> a.age-b.age);
console.log(person);

//example4 sorting array of objects according to their names
person.sort((a, b)=> a.name.localeCompare(b.name));// forgot localeCompare
console.log(person);