// this = it is a referance keyword used within the object context
// arrow function does not work on this keyword
function Car(model, color, year)
{
    this.model=model;
    this.color=color;
    this.year=2024;
    this.drive=function () {console.log(`You drive a ${this.model}`)};
}
let car1=new Car("mustang", "red", 2024);
let car2=new Car("ferari", "red", 2023);
console.log(car1.model);
car1.drive();
car2.drive();