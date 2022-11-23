// Given a sorted array of integers and a target, find if there’s a pair of elements that
// add up to the target.Return true if such a pair can be found, and false otherwise.

/**
 *
 * @param {number} n
 * @param {number[]} arr
 * @param {number} target_sum
 * @return {boolean}
 */
function twoSumInSortedArray(n, arr, target_sum) {
  //starting pointer
  let s = 0;
  //end pointer
  let e = n - 1;
  //Itterate over index
  for (let i = 0; i < n; i++) {
    // compare sum of start and end element of array with target sum
    // when starting pointer and end pointer becomes equal return false
    if (s == e) return false;
    // if sum is greater than target sum then decrease end pointer
    if (arr[s] + arr[e] > target_sum) {
      e--;
    }
    // if less increase starting pointer
    else if (arr[s] + arr[e] < target_sum) {
      s++;
    }
    // when get pair with target sum return true
    else if (arr[s] + arr[e] == target_sum) {
      return true;
    }
    // console.log(s,e)
  }
}

console.log(twoSumInSortedArray(5, [2, 4, 5, 8, 9], 9));
