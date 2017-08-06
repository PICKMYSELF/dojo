class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'. I am '+this.age+' years old.';
    }

}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        return super.introduce()+'I am a Student. I am at Class 2.'
    }

}
class Worker extends Person{
   /* constructor(name,age){
        super(name,age);
    }*/    //不写就自动加

    introduce(){
        return super.introduce()+' I am a Worker. I have a job.'
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if (this.klass==null){
            return super.introduce()+' I am a Teacher. I teach No Class.';
        }else {
            return super.introduce()+'I am a Teacher. I teach Class '+this.klass+'.';
        }
    }
}
let a=new Teacher('Tom',21);
console.log(a.introduce());
let b=new  Teacher('Tom',21,2);
console.log(b.introduce());