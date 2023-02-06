const tour = {
  placesVisited: ["Dhaka", "Chittagong", "Sylhet", "Rangpur"],
  travel: function () {
    return `I'm in love with traveling.`;
  },
};
const person = {
  name: "Ahsan Habib",
  isMarried: false,
  age: 27,
  love: function (age) {
    const loveTo = tour.travel();
    this.age = this.age - age;
    const whereITravelled =
      `I've visited several places. ` +
      tour.placesVisited[2] +
      ` is one of them`;
    //return this.age;
    //return `Hey I'm ${name}. ${loveTo} ${whereITravelled}`;
  },
  favoritePlace: ["বাশজানি", "ইসলামপুর মাঝের ঘাট", "ভোটহাট"],
  degree: {
    psc: 2007,
    ssc: 2013,
    hsc: 2015,
    sbc: 2022, /// gosh it's tooooo late
  },
};

const output = person.love();

//console.log(output);

const person2 = {
  name: "volga",
  age: 28,
};

person.love.call(person2, 10);

console.log(person2.age);

//console.log(temp);
