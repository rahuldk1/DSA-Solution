// Given an array, find a non-empty contiguous subarray with the largest sum.
/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function contigiousSequence(n, arr) {
    // Kadane's algorithm
    
    // Declare two variable for storing max sum overall and max sum possible at ith element
    let maxSumOverall, currMax;
    // initialize maxSumOverall and currMax with first element of array since it is possible max value at 0th index 
    maxSumOverall = currMax = arr[0];
    // Iterate through given array start iteration with 1st element since 0th element already counted in currMax
    for (let i = 1; i < n; i++){
        // Find max sum possible at ith element
        currMax = Math.max(currMax + arr[i], arr[i]);
        // update maximum sum possible overall with maximum of sum at current element and previuous max sum overall
        maxSumOverall = Math.max(currMax, maxSumOverall);
    }
    return maxSumOverall
}

console.log(contigiousSequence(8,[-2,-3,4,-1,-2,1,5,-3]))