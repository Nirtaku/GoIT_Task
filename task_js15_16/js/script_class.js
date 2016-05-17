function Human(name, age, gender, height, weight){
    this.name= name;
    this.age= age;
    this.gender= gender;
    this.height= height;
    this.weight= weight;
};

function Worker() {
    this.work = 'GoIT';
    this.salary = 'free';
    this.working = function(){
        console.log('My work is ' + this.work + ' and my Salary is ' + this.salary);
    };

};

function Student() {
    this.school = 'GoIT';
    this.grants = 'free';
    this.watch = function(){
        console.log('I am learning at ' + this.school + ' and my Grants ' + this.grants);
    };
};

Worker.prototype = new Human('Ekaterina', 29, 'female', 162, 38);
var newWorker = new Worker();
console.log('Worker');
console.log('Gender: ', newWorker.gender);
console.log('Name: ', newWorker.name);
console.log('Age: ', newWorker.age + " years");
console.log('Height: ', newWorker.height + " cm");
console.log('Weight: ', newWorker.weight + " kg");
newWorker.working();

console.log('');

Student.prototype = new Human('Sergey', 32, 'male', 186, 85);
var newStudent = new Student();
console.log('Student');
console.log('Gender: ', newStudent.gender );
console.log('Name: ', newStudent.name );
console.log('Age: ', newStudent.age + " years");
console.log('Height: ', newStudent.height + " cm");
console.log('Weight: ', newStudent.weight + " kg");
newStudent.watch();

console.log('');