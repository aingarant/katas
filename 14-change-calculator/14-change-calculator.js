const calculateChange = function (total, cash) {

  const coins = [
    { value: 2000, label: 'twentyDoollar' },
    { value: 1000, label: 'tenDollar' },
    { value: 500, label: 'fiveDollar' },
    { value: 200, label: 'twoDollar' },
    { value: 100, label: 'oneDollar' },
    { value: 25, label: 'quarter' },
    { value: 10, label: 'dime' },
    { value: 5, label: 'nickel' },
    { value: 1, label: 'penny' }
  ]
  let change = {};
  let output = {}

  // get change amount.
  amount = cash - total;

  // loop through different coins / bills.
  for (let i = 0; amount > 0 && coins.length > i; i++) {

    // get coin/bill
    let value = coins[i].value;

    // if change is bigger than the coin/bill
    if (value <= amount) {

      // find out how many coin/bill fit in amount.
      change[value] = Math.floor(amount / value);

      // add response to output object
      output[coins[i].label] = change[value]

      // reduce the amount by subtracting the # of bills.
      amount -= value * change[value]
    }
  }
  return output;
};


console.log(calculateChange(501, 1000));