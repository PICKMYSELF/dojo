class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'. I am '+this.age+' years old.';
    }

}
class klass{
    constructor(classNum){
        this.classNum=classNum;
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass.classNum;
    }

    introduce(){
        return super.introduce()+'I am a Student. I am at Class '+this.klass+'.'
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
    introduceWith(student){
        if (student.klass==this.klass){
            return super.introduce()+' I am a Teacher. I teach '+student.name+'.';
        }else {
            return super.introduce()+' I am a Teacher. I don`t teach '+student.name+'.';
        }

    }
}
let klass2=new klass(2);
let klass3=new klass(3);
let studentTom=new Student('Tom',21,klass2)
let studentJerry=new Student('Jerry',21,klass3)
console.log(studentTom.introduce());
let teacherTomNoClass=new Teacher('Tom',21);
console.log(teacherTomNoClass.introduce());
let teacherTomClass2=new  Teacher('Tom',21,2);
console.log(teacherTomClass2.introduce());
console.log(teacherTomClass2.introduceWith(studentJerry));
console.log(teacherTomClass2.introduceWith(studentTom));