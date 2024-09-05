class Car
{
    display()
    {
        // blunder: should always use this. when i am using inheritance
        console.log(this.name);
    }

}
class Ford extends Car
{
    name="Mustang";
}
let car1= new Ford();
car1.display();