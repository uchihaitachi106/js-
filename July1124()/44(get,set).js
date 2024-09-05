class  People
{
    constructor(name, age)//constructor should be in lower case
    {
        this.name=name;
        this.age=age;
    }
    set name(newName)
    {
        if(typeof newName==="string"&&newName.length>=0)//did not add typeof
        {
        this._name=newName;
        }
        else
        {
            console.error("Not valid");
        }
    }
    set age(newAge)
    {
        if(typeof newAge==="number"&& newAge>0)
        {
            this._age=newAge;
        }
        else
        {
            console.error("not valid");
        }
    }
    get name()
    {
        return this._name;
    }
    get age()
    {
        return this._age;
    }
}
const person1=new People("gokul", 12);//forgot to mention new
console.log(person1.name);
console.log(person1.age);
