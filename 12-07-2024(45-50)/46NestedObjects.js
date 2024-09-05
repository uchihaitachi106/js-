//Aim: to create a nested object and various methods to access it
goku={
    age:40,
    race:"saiyan",
    powerLevel:9000,
    hobbies:["fighting", "eating"],
    address:{
        planet:"earth",
        country:"Japan"
    }
}
console.log(...goku.hobbies);//hobbies are displayed on the same line
console.log(goku.address.planet);
for(let address in goku.address)
{
    console.log(`${address}: ${goku.address[address]}`);
}

//We are going to create two classes 
class Person
{
    constructor(age, race, ...address)//we are using rest parameter for address because we want it to accept multiple arguments
    {
        this.age=age;
        this.race=race;
        this.address= new Address(...address);//if mentioning other class pass in a parameter
    }
}
class Address
{
    constructor(planet, country)
    {
        this.planet=planet;
        this.country=country;
    }
}
const person1= new Person(40, "saiyan", "earth", "japan")
console.log(person1.address);