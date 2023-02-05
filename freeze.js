const book = {
  name: "Aquidahtut tawheed",
  page: 257,
  writter: "Salih ibn Fawzan",
};
const values = Object.values(book);
//console.log(values);

const keys = Object.keys(book);
//console.log(keys);

const pair = Object.entries(book);
//console.log(pair);

//console.log(book);
//delete book.page;
//console.log(book);

Object.seal(book);

book.page = 300;
console.log(book);
delete book.page;
console.log(book);

Object.freeze(book);
book.page = 233;
console.log(book);
