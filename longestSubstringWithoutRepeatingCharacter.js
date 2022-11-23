/**
 *
 * @param {string} s
 * @return {number}
 */

function longestSubstringWithoutRepeatingCharacter(s) {
  // window starting pointer
  let windowStartPt = 0;
  // map to store unique character
  let uniqueChar = new Map();
  // maximum length of substring
  let maxLength = 0;
  // iterate string
  for (let windowEndPt = 0; windowEndPt < s.length; windowEndPt++) {
    // check if current element is already exist in map or not
    if (uniqueChar.has(s[windowEndPt])) {
      while (uniqueChar.has(s[windowEndPt])) {
        uniqueChar.delete(s[windowStartPt]);

        windowStartPt++;
      }
    }
    // console.log(windowStartPt, windowEndPt, uniqueChar);
    uniqueChar.set(s[windowEndPt], 1);
    maxLength = Math.max(maxLength, uniqueChar.size);
  }
  return maxLength;
}

console.log(
  longestSubstringWithoutRepeatingCharacter(
    "rtmnxgmasjxanjkicwbbaefglqilrrizhpbettrlbumsimjwuylewpvimnoffhyspcihyzhcajtjceanyoeisnqqpqtunkgcztcy"
  )
);
