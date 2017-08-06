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
        this.group=[];//非构造实例属性可以写到构造器里,this指代自身实例对象
    }
    isIn(student){
        if (student.klass==this.classNum) return true;
                                          return false;
    }
    appendMember(student){
        student.klass=this.classNum;
        this.group.push(student.id);
    }
    assignLeader(student){
        if (this.group.indexOf(student.id)!=-1) {
            this.leader = student.name;
        }else console.log('It is not one of us.');
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
    constructor(id,name,age){
        super(id,name,age);
        this.classes=[];
        this.classesname=[];
        this.classesString='';
    }
    introduce(){
        if (this.classes.length==0){
            return super.introduce()+' I am a Teacher. I teach No Class.';
        }else {
            for(let klass of this.classes){
                this.classesname.push(klass.classNum.toString());
                this.classesString=this.classesname.join();
            }
            return super.introduce()+'I am a Teacher. I teach Class '+this.classesString+'.';
        }
    }
   /* introduceWith(student){
        if (student.klass==this.klass){
            return super.introduce()+' I am a Teacher. I teach '+student.name+'.';
        }else {
            return super.introduce()+' I am a Teacher. I don`t teach '+student.name+'.';
        }

    }*/
    appendClass(klass){
        this.classes.push(klass);
    }
    isTeaching(student){
        for (let klass of this.classes){
           if(klass.isIn(student))
            return true;
        }

        return false;
    }
}
let klass2=new klass(2);
let klass3=new klass(3);
let klass4=new klass(4);
let studentTom=new Student(1,'Tom',21,klass2);
klass2.appendMember(studentTom);
let studentTommy=new Student(2,'Tommy',21,klass3)
klass2.assignLeader(studentTommy);
klass2.assignLeader(studentTom);
let studentJerry=new Student(3,'Jerry',21,klass3)
let studentHifher=new Student(4,'Hifher',22,klass4)
console.log(studentTom.introduce(klass2));
console.log(studentTommy.introduce(klass2));
/*let teacherTomNoClass=new Teacher('Tom',21);
console.log(teacherTomNoClass.introduce());*/
let teacherTom=new  Teacher(4,'Tom',21);
console.log(teacherTom.introduce());
teacherTom.appendClass(klass2);
teacherTom.appendClass(klass3);
console.log(teacherTom.introduce())
console.log(teacherTom.isTeaching(studentTom))
console.log(teacherTom.isTeaching(studentHifher))
/*
console.log(teacherTomClass2.introduceWith(studentJerry));
console.log(teacherTomClass2.introduceWith(studentTom));*/
