/**
 * @param {number} N
 * @param {number[]} nums
 * @return {number}
 */

function peakElement(N, nums) {
  let first = 0,
    last = nums.length - 1;

  while (first <= last) {
    let mid = parseInt(first + (last - first) / 2);
    console.log(first, last, mid);
    if (
      (mid - 1 == -1 ? -Infinity : nums[mid - 1] < nums[mid]) &&
      (mid + 1 == N ? -Infinity : nums[mid + 1] < nums[mid])
    ) {
      return mid;
    }
    if (nums[mid - 1] > nums[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
}

console.log(peakElement(4, [1, 2, 3, 1]));
