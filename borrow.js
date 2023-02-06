const student = {
  name: "Ahsan Habib",
  money: 9000, // this is for learning purpose. I don't have that much of money
  study: "CSE",
  subjects: ["Data Structure", "Algorithm", "Discrete Math"],
  exam: function () {
    return this.name + ` is not participating in any exam`;
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improvement exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const volga = {
  name: "Sowmik Volga",
  money: 6500, // this is for learning purpose. I don't have that much of money
};

const result2 = student.exam.call(volga);
console.log(result2);

const volgaMoney = student.treatDey.call(volga, 400, 40);
//console.log(volgaMoney);

const volgaMoney2 = student.treatDey.apply(volga, [200, 10]);
//console.log(volgaMoney2);

const volgaMoney3 = student.treatDey.bind(volga);
const remainingMoney = volgaMoney3(200, 10);
console.log(remainingMoney);
