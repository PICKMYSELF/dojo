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
    appendMember(student,teacher){
        student.klass=this.classNum;
        this.group.push(student.id);
        teacher.isChanging(student,0);
    }
    assignLeader(student,teacher){
        if (this.group.indexOf(student.id)!=-1) {
            this.leader = student.name;
            teacher.isChanging(student,1);
        }else console.log('It is not one of us.');
    }
}

class Student extends Person{
    constructor(id,name,age){
        super(id,name,age);
        this.klass=0;
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
    isChanging(student,changingCode){
       if(changingCode==0){console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.klass}.`);}
       if(changingCode==1){console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.klass}.`);}
    }
}
let klass2=new klass(2);
let klass3=new klass(3);
let klass4=new klass(4);
let teacherTom=new  Teacher(4,'Tom',21);
let teacherCoco=new  Teacher(5,'Coco',21);
let studentTom=new Student(1,'Tom',21,klass2);
let studentTommy=new Student(2,'Tommy',21,klass3)
let studentJerry=new Student(3,'Jerry',21,klass3)
let studentHifher=new Student(4,'Hifher',22,klass4)
teacherCoco.appendClass(klass4)
teacherTom.appendClass(klass2);
teacherTom.appendClass(klass3);
klass2.appendMember(studentTom,teacherTom);
klass2.appendMember(studentTommy,teacherTom);
klass3.appendMember(studentJerry,teacherTom);
klass4.appendMember(studentHifher,teacherCoco);
klass2.assignLeader(studentTommy,teacherTom);
klass2.assignLeader(studentHifher,teacherTom);
klass4.assignLeader(studentHifher,teacherCoco);
console.log(studentTom.introduce(klass2));
console.log(studentTommy.introduce(klass2));
/*let teacherTomNoClass=new Teacher('Tom',21);
console.log(teacherTomNoClass.introduce());*/
console.log(teacherTom.introduce());
console.log(teacherTom.isTeaching(studentTom))
console.log(teacherTom.isTeaching(studentHifher))
/*
console.log(teacherTomClass2.introduceWith(studentJerry));
console.log(teacherTomClass2.introduceWith(studentTom));*/
