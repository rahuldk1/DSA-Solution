function numSort(n, numbers) {
  // numbers=numbers.sort((a,b)=>
  //     {
  //     if(a.length!=b.length){
  //         console.log(a,b);
  //         return a.length-b.length
  //     }
  //     else{
  //         console.log(a,b)
  //         return Number(a)-Number(b)
  //     }
  // }
  // )
  let givenArr = [...numbers];
  givenArr.sort((a, b) => Number(a) - Number(b));
  return givenArr;
}

console.log(numSort(4, ["33", "789", "8", "22"]));
