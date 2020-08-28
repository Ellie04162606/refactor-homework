const rushStates = {
  MA: (deliveryTime = 1),
  CT: (deliveryTime = 1),
  NY: (deliveryTime = 2),
  NH: (deliveryTime = 2),
};

const noRushStates = {
  MA: (deliveryTime = 2),
  CT: (deliveryTime = 2),
  NY: (deliveryTime = 2),
  ME: (deliveryTime = 3),
  NH: (deliveryTime = 3),
};

function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime = rushStates[anOrder.deliveryState] || 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime = noRushStates[anOrder.deliveryState] || 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate,
};
