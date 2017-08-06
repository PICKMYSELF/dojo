class Person{
    constructor(id,name,age){
        this.id=id;
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
    assignLeader(student){
        if (this.classNum == student.klass) {
            this.leader = student.name;
        }
    }
}

class Student extends Person{
    constructor(id,name,age,klasss){
        super(id,name,age);
        this.klass=klasss.classNum;
    }

    introduce(klass){if(klass.leader==this.name&&klass.classNum==this.klass)
        return super.introduce()+`I am a Student. I am at Class ${klass.classNum}.I am Leader of Class ${klass.classNum}.`;
        else return super.introduce()+'I am a Student. I am at Class '+klass.classNum+'.';
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
    constructor(id,name,age,klass){
        super(id,name,age);
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
let studentTom=new Student(1,'Tom',21,klass2);
let studentTommy=new Student(2,'Tommy',21,klass2)
klass2.assignLeader(studentTom);
let studentJerry=new Student(3,'Jerry',21,klass3)
console.log(studentTom.introduce(klass2));
console.log(studentTommy.introduce(klass2));
/*let teacherTomNoClass=new Teacher('Tom',21);
console.log(teacherTomNoClass.introduce());*/
let teacherTomClass2=new  Teacher(4,'Tom',21,2);
console.log(teacherTomClass2.introduce());
console.log(teacherTomClass2.introduceWith(studentJerry));
console.log(teacherTomClass2.introduceWith(studentTom));