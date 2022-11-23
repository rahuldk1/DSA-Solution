/**
 * @param {number} n
 * @param {number[][]} intervals1
 * @return {number[][]}
 */
function mergeIntervals(n, intervals) {
  // initialize intervals1 array ally of intervals1
  let intervals1 = [...intervals];
  // Sort intervals1 based on starting values of intervals1
  intervals1.sort((a, b) => a[0] - b[0]);
  // itterate intervals1
  for (let i = 0; i < n - 1; i++) {
    // if end value is greator than start value of two consecutive intervals1
    if (intervals1[i][1] >= intervals1[i + 1][0]) {
      // then merge them new interval will be from start of first interval to max of
      // second values of those two consecutive interval
      let mergeInt = [
        intervals1[i][0],
        Math.max(intervals1[i][1], intervals1[i + 1][1]),
      ];
      //  remove ith interval and replace ith interval with new interval
      intervals1.splice(i, 1);
      intervals1[i] = mergeInt;
      // after interval pointer should not increment because two intervals1 are merged into one
      i -= 1;
      n -= 1;
    }
  }
  return intervals1;
}

console.log(
  mergeIntervals(4, [
    [1, 3],
    [2, 6],
    [15, 18],
    [8, 10],
  ])
);
