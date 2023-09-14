class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }

    display(){
        console.log(`name of person is ${this.name} and age is ${this.age}`)
    }
}

p1=new Person("harsh",23)
p1.display()