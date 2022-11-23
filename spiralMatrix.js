function spiral(n) {
  const res =new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  let t, b, l, r;
  (t = 0), (b = n - 1), (l = 0), (r = n - 1);
    let count = 1;
    
  while (b >=t || r >= l) {
    for (let i = l; i < r + 1; i++) {
      res[t][i] = count;
        count+=1;
    }
    
    t++;
    for (let i = t; i < b + 1; i++) {
        res[i][r] = count;
        count+=1;
    }
   
    r--;
    for (let i = r; i >= l; i--) {
        res[b][i] = count;
        count+=1;
    }
    
    b--;
    for (let i = b; i >= t; i--) {
        res[i][l] = count;
        count+=1;
    }
    // console.log(count,res)
    l++;
  }
  return res;
}


console.log(spiral(10));