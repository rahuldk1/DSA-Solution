/*Given an integer array, find the largest subarray with sum 0 . 
If there is more than one subarray with the largest length, return the subarray with
 the lowest starting index.If there is no such sub-array print -1.
*/

/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function largestSubarraySumZero(n, arr) {
  // Declare variable to store largest sub array with sum 0,initialize with -1
  let largestSubArr = [];
  //  intialize array to store current sub array with possible sum equal to 0
  let sum = 0;
  //  Set to store sum at current element
  let prefixSums = new Array();
  //  Iterate given array
  for (let i = 0; i < n; i++) {
    //  Add current element to sum
    sum += arr[i];
    //  if sum is equal to 0 or current sum already exist in Set
    if (sum == 0) {
      if (largestSubArr.length < i + 1) {
        largestSubArr = arr.slice(0, i + 1);
      }
    }
    
    if (prefixSums.includes(sum)) {
      if (largestSubArr.length < i - prefixSums.indexOf(sum)) {
        largestSubArr = arr.slice(prefixSums.indexOf(sum) + 1, i + 1);
        }
        
    }
    prefixSums.push(sum);
    
    console.log(largestSubArr, sum, prefixSums.includes(sum),i);
    }
    if (largestSubArr.length==0) {
        largestSubArr=[-1]
    }
  return largestSubArr 
}

console.log(largestSubarraySumZero(3,[2,4,5]));
