class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is Tom. I am 21 years old.';
    }
   static basicIntroduce(){
        return 'My name is Tom. I am 21 years old.';

    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        return Person.basicIntroduce()+'I am a Student. I am at Class 2.'
    }

}
class Worker extends Person{
   /* constructor(name,age){
        super(name,age);
    }*/    //不写就自动加

    introduce(){
        return Person.basicIntroduce()+' I am a Worker. I have a job.'
    }
}
let a=new Worker('Tom',21);
console.log(a.introduce());