const tour = {
  placesVisited: ["Dhaka", "Chittagong", "Sylhet", "Rangpur"],
  travel: function () {
    return `I'm in love with traveling`;
  },
};
const person = {
  name: "Ahsan Habib",
  age: 27,
  isMarried: false,
  love: () => {
    const loveTo = tour.travel();
    const whereITravelled =
      `I've visited several places. ` +
      tour.placesVisited[2] +
      ` is one of them`;
    return `${loveTo} ${whereITravelled}`;
  },
};

const output = person.love();

console.log(output);
