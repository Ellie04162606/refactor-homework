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

function isLengthLessThanRank(rank, length) {
  return length < rank;
}

function isLengthMoreThanRank(rank, length) {
  return length > rank;
}

function checkRating(vpf, vr, chr) {
  return vpf * 3 > vr + chr * 2 ? "A" : "B";
}

function voyageRisk(voyage) {
  let result = 1;
  isLengthMoreThanRank(4, voyage.length) ? (result += 2) : result;
  isLengthMoreThanRank(8, voyage.length)
    ? (result += voyage.length - 8)
    : result;
  isIncludeChinaAndIndies(voyage.zone) ? (result += 4) : result;
  return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  isLengthLessThanRank(5, history.length) ? (result += 4) : result;
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
    isLengthMoreThanRank(10, history.length) ? (result += 1) : result;
    isLengthMoreThanRank(12, voyage.length) ? (result += 1) : result;
    isLengthMoreThanRank(18, voyage.length) ? (result -= 1) : result;
  } else {
    isLengthMoreThanRank(8, history.length) ? (result += 1) : result;
    isLengthMoreThanRank(14, voyage.length) ? (result -= 1) : result;
  }
  return result;
}

function rating(voyage, history) {
  return checkRating(
    voyageProfitFactor(voyage, history),
    voyageRisk(voyage),
    captainHistoryRisk(voyage, history)
  );
}

module.exports = {
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating,
};
