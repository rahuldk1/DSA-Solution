/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function lengthOfLongestSubstringKDistinct(s, k) {
    let distCharMap = {};
    let maxLength = 0;
    let windowStartPt = 0;
    // console.log(distCharMap)
    for (let i = 0; i < s.length; i++){
        
        distCharMap[s[i]] = (distCharMap[s[i]] || 0) + 1;
        // console.log(maxLength,distCharMap, s[i],windowStartPt,i)
        while (Object.keys(distCharMap).length > k) {
            
            // console.log(Object.keys(distCharMap).length)
            distCharMap[s[windowStartPt]] = distCharMap[s[windowStartPt]] - 1;
            if (distCharMap[s[windowStartPt]] == 0) {
                delete distCharMap[s[windowStartPt]];
            }
            windowStartPt++;
        }
        maxLength = Math.max(maxLength, i - windowStartPt + 1)
    }
    return maxLength;
}



console.log(lengthOfLongestSubstringKDistinct("aafbeeyyzxg", 3))