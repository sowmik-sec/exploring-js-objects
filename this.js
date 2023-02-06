//console.log(this);

const student = {
  name: "Ahsan Habib",
  money: 9000, // this is for learning purpose. I don't have that much of money
  study: "CSE",
  subjects: ["Data Structure", "Algorithm", "Discrete Math"],
  exam: function () {
    //console.log(this);
    return this.name + ` is not participating in any exam`;
  },
  examArrow: () => {
    console.log(this);
  },
  examNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
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

//student.exam();

const volga = {
  name: "Sowmik Volga",
  money: 6500, // this is for learning purpose. I don't have that much of money
};

volga.exam = student.exam;

volga.exam();

//student.examNested();

function clickHandler() {
  console.log("inside click handler ", this);
}

document.getElementById("btn-click2").addEventListener("click", function () {
  console.log(this);
});
