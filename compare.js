// const first = { a: 2 };
// const second = { a: 2 };
// if (first === second) {
//   console.log("they are same");
// } else {
//   console.log("different");
// }

// const first = { a: 2 };
// const second = { a: 2 };

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// console.log(firstString[4]);

const first = { a: 2 };
const second = { a: 2 };

function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

const isSame = compareObject(first, second);
console.log(isSame);
