const CHINA = "china";
const EASTINDIES = "east-indies";
function isIncludeChina(zone) {
  return zone === CHINA;
}

function isIncludeChinaAndIndies(zone) {
  return [CHINA, EASTINDIES].includes(zone);
}

function hasChina(history) {
  return history.some((v) => CHINA === v.zone);
}

function isLengthLessThan5(length) {
  return length < 5;
}

function isLengthMoreThan4(length) {
  return length > 4;
}

function isLengthMoreThan8(length) {
  return length > 8;
}

function isLengthMoreThan10(length) {
  return length > 10;
}

function voyageRisk(voyage) {
  let result = 1;
  isLengthMoreThan4(voyage.length) ? (result += 2) : result;
  isLengthMoreThan8(voyage.length) ? (result += voyage.length - 8) : result;
  isIncludeChinaAndIndies(voyage.zone) ? (result += 4) : result;
  return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  isLengthLessThan5(history.length) ? (result += 4) : result;
  result += history.filter((v) => v.profit < 0).length;

  if (isIncludeChina(voyage.zone) && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  isIncludeChinaAndIndies(voyage.zone) ? (result += 1) : result;
  if (isIncludeChina(voyage.zone) && hasChina(history)) {
    result += 3;
    isLengthMoreThan10(history.length) ? (result += 1) : result;
    if (voyage.length > 12) {
      result += 1;
    }
    if (voyage.length > 18) {
      result -= 1;
    }
  } else {
    isLengthMoreThan8(history.length) ? (result += 1) : result;
    if (voyage.length > 14) {
      result -= 1;
    }
  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) {
    return "A";
  } else {
    return "B";
  }
}

module.exports = {
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating,
};

const voyage = {
  zone: "west-indies",
  length: 10,
};
const history = [
  {
    zone: "east-indies",
    profit: 5,
  },
  {
    zone: "west-indies",
    profit: 15,
  },
  {
    zone: "china",
    profit: -2,
  },
  {
    zone: "west-africa",
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
