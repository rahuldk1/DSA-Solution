/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function search(nums, target) {
  let first, last;
  first = 0;
  last = nums.length - 1;
  while (first <= last) {
    let mid = parseInt(first + (last - first) / 2);
    if (nums[mid] == target) return mid;
    if (nums[first] <= nums[mid]) {
      if (nums[first] <= target && target < nums[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[last]) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }
  return -1;
}


console.log(search([4,5,6,7,0,1,2],0))