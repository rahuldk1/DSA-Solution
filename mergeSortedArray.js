/**
 * @param {number} m
 * @param {number[]} nums1
 * @param {number} n
 * @param {number[]} nums2
 * @return {number[]}
 */
function mergeSortedArray(m, nums1, n, nums2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  for (let l = 0; l < m + n; l++) {
    
    if (nums1[i] == undefined) {
      mergedArr.push(...nums2.slice(j, n));
      break;
    } else if (nums2[j] == undefined) {
      mergedArr.push(...nums1.slice(i, m));
      break;
    }

    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
      continue;
    } else if (nums1[i] == nums2[j]) {
      mergedArr.push(nums1[i]);
      mergedArr.push(nums2[j]);

      i++;
      j++;
      continue;
    } else if (nums1[i] > nums2[j]) {
      mergedArr.push(nums2[j]);
      j++;
      }
      console.log(i, j);
  }
  return mergedArr;
}

console.log(mergeSortedArray(3, [3, 4, 5], 4, [2, 3, 7, 8]));
