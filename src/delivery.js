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
    return anOrder.placedOn.plusDays(
      1 + (rushStates[anOrder.deliveryState] || 3)
    );
  } else {
    return anOrder.placedOn.plusDays(2 + (noRushStates[anOrder.deliveryState] || 4));
  }
}

module.exports = {
  deliveryDate,
};
