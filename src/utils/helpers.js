import accounting from "accounting";

export const easeInOutCubic = (t, b, c, d) => {
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t * t + b;
  }
  return (c / 2) * ((t -= 2) * t * t + 2) + b;
};

export const priceFormat = price =>
  accounting.formatMoney(price, { symbol: "$", precision: 0 });

export const isArrayEmpty = arrayArg => {
  if (arrayArg && arrayArg.length) {
    return false;
  }
  return true;
};

export const isObjectEmpty = myObject => !Object.keys(myObject).length;
