// create object using object literals

const player = {};
player.name = "Shakib Khan";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing your bat");
};
//console.log(player);
//player.bat();

const student = {
  name: "Tamim",
  job: "study",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 10000000,
};

//student.ball();

// object constructor
const person = new Object();
//console.log(person);

// object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel);

class Person {
  name = "abul";
  address = "sodor ghat";
  constructor(age) {
    this.age = age;
  }
}

const person1 = new Person(56);
console.log(person1);
