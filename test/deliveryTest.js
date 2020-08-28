const deliveryTest = require("ava");
const { deliveryDate } = require("../src/delivery");
deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "MA",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 2);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "CT",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 2);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "NY",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 3);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "NH",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 3);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "CN",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 4);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "CT",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 4);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "MA",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 4);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "NY",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 4);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "ME",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 5);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "NH",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 5);
});

deliveryTest("delivery", (t) => {
  const anOrder = {
    deliveryState: "CN",
    placedOn: {
      plusDays(days) {
        return days;
      },
    },
  };
  const isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 6);
});