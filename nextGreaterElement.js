/**
 * @param {number} n
 * @return {number}
 */
function nextGreaterElementWithSameSetOfDigits(n) {
  if (n.length == 1) return;
  // break number into array of digits
  let nums = new Array();
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    nums.push(n[i]);
  }
  // Iterate array in reverse manner from right to left
  let i;
  for (i = nums.length - 1; i >= 1; i--) {
    // untill we find number less than the current one
    if (nums[i] > nums[i - 1]) break;
  }
//   console.log(i);
  // find the smallest number possible on right
  if (i != 0) {
    for (let j = nums.length - 1; j >= i; j--) {
      // such that current element is less than i-1  if it is found then swap
      if (nums[j] > nums[i - 1]) {
        let temp = nums[j];
        nums[j] = nums[i - 1];
        nums[i - 1] = temp;
        break;
      }
    }
    }
  else {
      return -1
    }

  // concatenate number
  nums = Number((nums.slice(0, i).concat(nums.slice(i, nums.length).reverse())).join(""));
//   console.log(nums);
  return nums;
}

console.log(nextGreaterElementWithSameSetOfDigits(40060));
