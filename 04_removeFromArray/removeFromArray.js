const removeFromArray = function (arr, ...args) {
  let a = arr;
  let b = args;
  let result = a.filter((c) => !b.includes(c));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
