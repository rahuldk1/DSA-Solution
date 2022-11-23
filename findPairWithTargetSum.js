/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // initialize hash table for storing difference between target sum and current element, and index
  let storePairValue = {};
  // itterate over array to check if current element exist in has table
  for (let i = 0; i < nums.length; i++) {
    // if current element exist in hash table then return value that is index stored and current index
      console.log(storePairValue[nums[i]]);
    if (storePairValue[nums[i]]!=undefined) return [storePairValue[nums[i]] / 1, i];
    // if does not exist then store item and index in hash table as key value pair
    storePairValue[target - nums[i]] = i;
    console.log(storePairValue)
      
  }
  // once current index reach end of array return [0,0]
  return [0, 0];
}

console.log(twoSum([1, 4, 5, 9], 10));
