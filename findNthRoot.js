/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function nthRoot(x, n) {
  // Initialize boundary values
  let low, high;
  if (x >= 0 && x <= 1) {
    low = x;
    high = 1;
  } else {
    low = 1;
    high = x;
  }

  // used for taking approximations
  // of the answer
  let epsilon = 0.000001;

  // Do binary search
  let guess = parseInt((low + high) / 2, 10);
    while (Math.abs(Math.pow(guess, n) - x) >= epsilon) {
      console.log(Math.abs(Math.pow(guess, n) - x) > epsilon)
    if (Math.pow(guess, n) >= x) {
      high = guess;
    } else {
      low = guess;
    }
    guess = (low + high) / 2;
    }
    
  return Math.round(guess);
}

console.log(nthRoot(1000000000, 2));
