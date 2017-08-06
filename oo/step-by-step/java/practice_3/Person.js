class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return'My name is Tom. I am 21 years old.'
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.'
    }

}