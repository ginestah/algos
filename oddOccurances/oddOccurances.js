//given an array return all numbers that appear an odd amount of times

function oddOccurance(arr) {
  let res = [];
  let map = arr.reduce((obj, count) => {
    obj[count] = ++obj[count] || 1;
    return obj;
  }, {});
  for (i in map) {
    if (map[i] % 2 === 1) {
      res.push(i);
    }
  }
  return res;
}
