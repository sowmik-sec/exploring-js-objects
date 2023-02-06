const student = {
  name: "Ahsan Habib",
  money: 0,
  study: "CSE",
  subjects: ["Data Structure", "Algorithm", "Discrete Math"],
  exam: function () {
    return this.name + ` is not participating in any exam`;
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement exam on ${subject}`;
  },
  treatDey: function (amount) {
    this.money = this.money - amount;
    return this.money;
  },
};

// console.log(student.exam());
const reExam = student.improveExam("Bangla");
//console.log(reExam);

const remaining = student.treatDey(200);
console.log(remaining);
