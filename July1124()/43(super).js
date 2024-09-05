//super= parent
//this=this object
//used in classes to access constructor, methods, properties

class Animal
{
    constructor(name, age)
    {
        this.name=name;//blunder assigned name=this.name instead of this.name=name
        this.age=age;
    }
    display()
    {
        console.log(`${this.name} will die at ${this.age}`);
    }
}
class Rabbit extends Animal
{
    constructor(name, age, runspeed)//should mention age and name 
    {
        super(name, age);//forgot to call the parent class parameters
        this.runspeed=runspeed;
        super.display();
    }
}
class Fish extends Animal
{
    constructor(name, age, swimspeed)
    {
        super(name, age);
        this.swimspeed=swimspeed;
        super.display();
    }
}
class Hawk extends Animal
{
    constructor(name, age, flyspeed)
    {
        super(name, age);
        this.flyspeed=flyspeed;
        super.display();
    }
}

let rabbit1= new Rabbit("Bunny", 2 ,55);
let fish1= new Fish("shark", 2 ,55);
let hawk1= new Hawk("Griffith", 2 ,55);
console.log(rabbit1.name);//mentioned the class name insteads of the variable rabbit

