// static= the things thet are declared as static belongs to the class only the objects cannot acces the static

class Product
{
    static  count=0;
    // blunder always set the name as constructor if you are creating a class inside a class
    constructor (name)
    {
        this.name=name;
        Product.count++;
    }
}
let user1= new Product("gokul");
let user2= new Product("gokul");
console.log(user1.name);
console.log(`The number of users online: ${Product.count}`);
