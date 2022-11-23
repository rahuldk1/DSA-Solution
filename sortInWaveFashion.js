/*
Given an unsorted array, sort it in wave form. 
That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function wiggleSort(arr, n) {
  // iterate given array
  for (let i = 0; i < n - 1; i++) {
    // initialize variable for current and next element
    let curr = arr[i],
      next = arr[i + 1];
    // if index is even and current element is bigger than next
    // swap them
    // if index is odd and current element is smaller than next
    // swap it out
    if ((i % 2 == 0 && curr > next) || (i % 2 != 0 && curr < next)) {
      arr=swap(i, i + 1,arr);
    }
  }
  // return array
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

console.log(wiggleSort([1, 5, 1, 1, 6, 4], 6));
