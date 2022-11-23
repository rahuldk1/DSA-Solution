// Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.

/**
 * @param {number} n
 * @param {number[]} arr
 * @return {string}
 */
function subarraySumZero(n, arr) {
    //  Prefix Sum Array Method

    //Set to store prefix sum
    let prefixSums = new Set();
    //variable to store Sum till ith element
    let sum = 0;
    // iterate given array
    for (let i = 0; i < n; i++){
        // update sum by adding current element
        sum += arr[i];
        // if sum existed earlier or current sum is 0 
        // or current element is 0 means 0 sum sub array exist
        
        if (prefixSums.has(sum) || arr[i]==0 || sum==0 ) {return true};
        // add sum to prefixSums set
        prefixSums.add(sum);
        console.log(sum,prefixSums,i)
    }
    return false

}


console.log(subarraySumZero(4, [633,633,633,-1899] ));