// class= it is a collection of object.it is used to maintain clean structure
class Product
{
    // when a constructor is declared within a class we should not capitalize it
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }
    display()
    {
        console.log(`Name: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`)
    }
    calculate(salesTax)
    {
        let total= this.price+ (this.price * salesTax);
        console.log(`$${total.toFixed(2)}`);
    }
}
const salesTax=0.05;
const product1= new Product("shirt",40);//mentioned display instead of product
product1.display();
product1.calculate(salesTax);