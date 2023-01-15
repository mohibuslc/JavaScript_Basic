class parents{


    constructor(){

        this.father ="Samir ali ";
    }
}
class Student extends parents{
        constructor(id , userName){
        super()
        this.id = id ; 
        this.userName = userName ; 
        this.school = "High School"
    }
}
const student1 = new Student(23 , "kamal");

const student2 = new Student(101 , " Raju");


console.log( student1 , student2);


