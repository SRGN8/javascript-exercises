const leapYears = function (year) {
  let a = year;
  let yearCalc = a % 4;
  let yearCalc2 = a % 400;
  let yearCalc3 = a % 100;
  if ((yearCalc === 0 && yearCalc3 !== 0) || yearCalc2 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
