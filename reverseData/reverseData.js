function dataReverse(data) {
  // Your code here
  let size = 8;
  let arrOfArr = [];
  for (let i = 0; i < data.length; i += size) {
    arrOfArr.unshift(data.slice(i, i + size));
  }
  return arrOfArr.reduce((flat, next) => {
    return flat.concat(next);
  }, []);
}

function dataReverse2(data) {
  // Your code here
  let size = 8;
  let arrOfArr = [];
  for (i = 0; i < data.length; i += size) {
    arrOfArr.unshift(data.slice(i, i + size));
  }
  return arrOfArr.flat();
}
const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
console.log(dataReverse(data1), dataReverse2(data1));
