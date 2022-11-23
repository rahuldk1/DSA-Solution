/**
 * @param {number} n
 * @return {number[]}
 */
function marksSort(n, students) {
  let sum = (arr) => arr.reduce((c, d) => c + d, 0);
  let studData=Array.from(students)
  students = studData.sort((a, b) => 
  {
    if (sum(b.slice(2, 7)) > sum(a.slice(2, 7))) {
      return 1;
    }

    if (sum(b.slice(2, 7)) < sum(a.slice(2, 7))) {
      // console.log(true);
      return -1;
    }
    // return 0
    if (a[1].toLowerCase() < b[1].toLowerCase()) {
      return -1;
    }

    if (a[1].toLowerCase() > b[1].toLowerCase()) {
      return 1;
    }

    return a[0] - b[0];
  }
  )
  students.forEach((e,i,ar)=>ar[i]=e[0])
  return students;
}

console.log(
  marksSort(3, [
    [1, "Alan", 45, 56, 21, 32, 74],
    [3, "Gamora", 85, 65, 54, 65, 76],
    [2, "Fabien", 95, 94, 93, 92, 91],
    [8, "Aauan", 100, 100, 100, 100, 100],
    [4, "Aauan", 100, 100, 100, 100, 100],
    
  ])
);
