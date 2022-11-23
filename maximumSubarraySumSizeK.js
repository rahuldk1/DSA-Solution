/**
 *
 * @param {number} N
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function maximumSubarraySumSizeK(N, A, K) {
  // starting pointer of subArray window
  let windowStartPt = 0;
  // maximum sum of
  let maxSumOFSubArray = 0;
  // sum of current subarray
  let sum = 0;
  // iterate given number array
  for (let i = 0; i < N; i++) {
    sum += A[i];
    // window size
    let subArrSize = i - windowStartPt + 1;
    // Check size of subArray
    if (subArrSize == K) {
      if (maxSumOFSubArray == 0) {
          maxSumOFSubArray = sum;

        }
      else {
        maxSumOFSubArray = Math.max(maxSumOFSubArray, sum);
      }
      sum -= A[windowStartPt];
      windowStartPt++;
    }
    // console.log(maxSumOFSubArray)
  }
  return maxSumOFSubArray;
}

console.log(maximumSubarraySumSizeK(6, [-100, 0, -2, -5,-800,0], 2));
