/*
Given a string, find the length of the longest substring that contains at 
most K distinct characters.

Note:

Uppercase and Lowercase characters should be considered as different characters.

There can be numbers and special characters as well.
*/

/*
 *
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

function lengthOfLongestSubstringKDistinct(s, k) {
  let distCharMap = new Map();
  let maxLength = 0;
  let windowStartPt = 0;
  for (let windowEndPt = 0; windowEndPt < s.length; windowEndPt++) {
    if (distCharMap.has(s[windowEndPt])) {
      distCharMap.set(s[windowEndPt], distCharMap.get(s[windowEndPt]) + 1);
    } else {
      distCharMap.set(s[windowEndPt], 1);
    }
    //   move windowStartPt till no of distinct character less or equal to k
    if (distCharMap.size > k) {
      maxLength = Math.max(maxLength, windowEndPt - windowStartPt);
      while (distCharMap.size > k) {
        if (distCharMap.get(s[windowStartPt]) > 1) {
          distCharMap.set(
            s[windowStartPt],
            distCharMap.get(s[windowStartPt] - 1)
          );
        } else {
          distCharMap.delete(s[windowStartPt]);
        }
        windowStartPt++;
      }
    }
  }
  maxLength = Math.max(maxLength, s.length - windowStartPt);
  return maxLength;
}

console.log(lengthOfLongestSubstringKDistinct(`hMjE65z|Zaf"/)VF}V^#wt<]?wne3,9zr>ZCSU[H8BI`K~'co!!g0<Fh5Ohat<v#ZlEHB!os]SUCRu'C1'EA]&*-TrmII~K$k,eIFU=$C-F1$fmNm3nK94WlA_Qix7)!BmI$^e'".g21h~^VMh<e7.lW(X[<oc<LRdOKdpL-rx=[37M_:$EP2MBS&|n0a+vN*`x*Q_6^XmU'?#eX@FCk.d@3a/]CTTp]5%""d8_W@O]^k^Q-%/w2r8^na<M6o>.@]JAB{!x<Pq5<P!bT/[!<.^+n6W?@1g_m2!J.<]c'O3\~3@m[6)vC#<M8/kW?m8G~RpGmhEs9WQR%,[_Acpce.18<8ot&B<&sGf|0-pbc\6hg,b)nTlo{8(R`,70));
