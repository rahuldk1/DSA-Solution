/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function equalPartition(n, arr) {
    let ans = -1;
    // Declare two variable rightSum and leftSum 
    let rightSum, leftSum;
    // initialize with right most and left most element of given array
    rightSum = 0;
    leftSum = 0;
    // initialize two pointer right and left
    let rightPt = n-1, leftPt = 0;
    // while leftPt is less than rightPt
    while (rightPt >= leftPt) {
        // Compare leftSum and rightSum
        if (leftSum > rightSum) {
            // if rightSum is less than rightSum then add right Element to rightSum
            rightSum+=arr[rightPt]
            // decrement right pointer
            rightPt--;      
        }
        else if(leftSum < rightSum){
            // add left element to leftSum
            leftSum += arr[leftPt];
            // increment left Pointer
            leftPt++;
            
        }
        else {
            if (leftPt == rightPt) {
                ans = leftPt;
                break;
            }
            else {
                leftSum += arr[leftPt];
                leftPt++
            }
        }   
        console.log(leftPt,rightPt,leftSum,rightSum)
    }
    return ans;
}

console.log(equalPartition(8, [4,5,6,3,11,8,9,1]))