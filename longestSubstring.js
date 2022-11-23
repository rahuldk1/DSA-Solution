// function longestSubstringWithoutRepeatingCharacter(s) {
//   // initialize hash map to keep track of alphabets in word
//   let charMap = {};
//   // initialize count to keep word count and maxCount to store previously max count
//   let count = 0;
//   let maxCount = 0;

//   // Iterate through string
//   for (let i of s) {
//     if (charMap[i]) {
//       charMap = {};
//       charMap[i] = 1;
//       maxCount = Math.max(count, maxCount);
//       count = 1;
//     } else {
//       count++;
//       charMap[i] = 1;
//     }
//     console.log(i, count, charMap);
//   }
//   maxCount = Math.max(count, maxCount);
//   return maxCount;
// }

function longestSubstringWithoutRepeatingCharacter(s) {
  // initialize two pointers  to represent startPt and endPt of window traversing  string
  let startPt = 0,
    endPt = 0;
  // initialize variable to store maximum length non repeating substring
  let maxLength = 0;
  // initialize set to store unique charter incounterd
  let uniqueChar = new Set();
  // itterate through string
  while (endPt < s.length ) {
    // console.log(s[endPt])
    console.log(startPt, endPt, maxLength, uniqueChar);
    // check if i th character exist in set or not
    if (uniqueChar.has(s[endPt])) {
      // if exist then increment startPt pointer
      uniqueChar.delete(s[startPt])
      startPt++;
    } else {
      // if does not exist
      // then add it to set
      uniqueChar.add(s[endPt]);
      //  replace maxLength with max of maxLength and set size
      maxLength = Math.max(maxLength, uniqueChar.size);
      //increment endPt pointer
      endPt++;
    }
  }
  // return maxLength
  return maxLength;
}
console.log(
  longestSubstringWithoutRepeatingCharacter(
    "zZ"
  )
);
