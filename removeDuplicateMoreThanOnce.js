/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
function removeDuplicatesFromSortedArrayII(n, nums) {
  let firstPt = 0,
    secondPt = 1;
  for (let i = 0; i < n; i++) {
    // console.log(nums);
    if (nums[firstPt] == nums[secondPt]) {
      secondPt - firstPt == 1 ? secondPt++ : nums.splice(secondPt, 1);
    } else {
      firstPt = secondPt;
      secondPt++;
    }
  }
  return nums.length;
}

console.log(removeDuplicatesFromSortedArrayII(8, [2,2,4,4,5,5,5,9]));
