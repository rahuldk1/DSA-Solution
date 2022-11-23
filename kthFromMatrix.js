function kthSmallestElementInMatrix(matrix, k) {
  let r = matrix.length;
  let c = matrix[0].length;
  let startVal = matrix[0][0];
  let endVal = matrix[r - 1][r - 1];

  while (startVal <= endVal) {
    let MID = (startVal + endVal) / 2;
    let ans = 0;
    for (let i = 0; i < r; i++) {
      let lowInd = 0;
      let highInd = c - 1;
      while (lowInd <= highInd) {
          let m = parseInt(lowInd + (highInd-lowInd) / 2);
          if (matrix[i][m] <= MID) {
              lowInd = m + 1;
            } else {
                highInd = m - 1;
            }
        }
        ans += lowInd;
    }
 
    if (ans <k) {
        startVal = MID + 1;
    } else {
      endVal = MID - 1;
    }
  }
  return startVal;
}

console.log(
  kthSmallestElementInMatrix(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    9
  )
);
