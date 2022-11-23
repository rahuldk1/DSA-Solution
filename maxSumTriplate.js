/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
// function maxSumTriplet(n, nums) {
//     // initialize defaul answer that is 0
//     let ans = 0;
//     // to find right most number of triplet which is to be maximum of three
//     // itterate array in reverse order to find right most max number
//     // eg [3 6 2 1 5 4]  => [6 6 5 5 5 4]

//     // assume right most max is 0
//     let max = 0;
//     // initialize array to store right most max numbers
//     let suffixArray = [];
//     for (let i = n - 1; i >= 0; i--) {
//         //   find max of previously stored max and current number
//         max = Math.max(nums[i], max);
//         // replace each number with right most max number
//         suffixArray.unshift(max);
        
//         // console.log(Math.max(nums[i], max), i);
//     }

//     //  To find second and first element of triplets, elements need to
//     //  be sorted so to find number and number less than it
//     // initialize array with nums[] first number as its first number so make comparison with previous number handy
//         let sortArray = [nums[0]];
//         // Itterate over given array from index 1 since index 0 number is already stored 
//         for (let i = 1; i < n; i++) {
//             // push number for nums[] to sortArray and sort it
//             sortArray.push(nums[i]);
//             sortArray.sort();
//         /*
//             eg 3 6 2 1 5
//             3
//             3 6
//             2 3 6
//             1 2 3 6
//             1 2 3 5 6

//         */
//         // get new index of number after sorting
//             let index = sortArray.indexOf(nums[i]);
//         // get previous number that of current number in sorted array that means it is smaller than current number
//         // only if index not being 0 and nums[i] not equal to that of suffixArray[i] if they are equal means
//         // current item has no right max
//             if (index != 0 && suffixArray[i] != nums[i]) {
//             // find max of previously stored max sum and current max sum
//         ans = Math.max(sortArray[index - 1] + nums[i] + suffixArray[i], ans);
//         }
//         }
        
//     return ans;
// }

function maxSumTriplet(n, nums) {
    // initialize variable to store maximum sum
    let maxSum = 0;
    // initialize array with right most element to store suffix array to store right most max value
    let rightMaxs = [nums[n-1]];
    // initialize array with first element of nums to store left max values 
    let leftMaxs = [nums[0]]
    // Create suffix array
    for (let i = n - 2; i > -1; i--){
        // compare right most element of rightMaxs with current element of nums
        if (rightMaxs[0] > nums[i]) {
            // if ith element of nums is less than right most element of rightMaxs then replace with right most
            rightMaxs.unshift(rightMaxs[0])
        }  
        else {
            // else put element as it is
            rightMaxs.unshift(nums[i])
        }
    }
    // itterate nums array
    for (let i = 1; i < n; i++){
        // push ith element in leftMaxs
        leftMaxs.push(nums[i])
        // compare ith element with rightMax
        // if there is greator value than in rightMaxs
        if (rightMaxs[i + 1] > nums[i]) {
            // find is there max value in leftMaxs less than ith element
            leftMaxs.sort((a, b) => a - b);
            if (leftMaxs[leftMaxs.indexOf(nums[i])-1]) {
                maxSum=Math.max(maxSum,leftMaxs[leftMaxs.indexOf(nums[i])-1]+nums[i]+rightMaxs[i+1])
            }       
        }
    }

    return maxSum;
 }


console.log(maxSumTriplet(7, [5,6,2]));
