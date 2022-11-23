/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function swapAllOddAndEvenBits(n) {
    
    for (let i = 0; i < 32; i +=2){
        let i_bit=(1<<i) & n
        let i_1_bit=(1 << i+1) & n
        n=n-(i_bit)-(i_1_bit)+(i_bit<<1)+(i_1_bit>>1)
       Math.expm1
    }
    return n
}

console.log(swapAllOddAndEvenBits(1331455715))