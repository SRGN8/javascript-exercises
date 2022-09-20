const sumAll = function (a, b) {
  let c = a;
  let d = b;
  let higherSum = 0;
  let total = [];
  let sum = 0;

  if (c < 0 || d < 0 || typeof c !== "number" || typeof d !== "number") {
    return "ERROR";
  }

  if (c < d) {
    higherSum += d;
    total.push(c);
  } else {
    higherSum += c;
    total.push(d);
  }

  for (let i = 0; i < higherSum - 1; i++) {
    total.push(total[i] + 1);
  }

  for (nums in total) {
    sum += total[nums];
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
