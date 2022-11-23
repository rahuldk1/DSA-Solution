function maxSumTriplet(n, nums){
    let h, sum=0, oldjv, oldkv;
    let  A = nums;
    

    h=A.reduce(function(map, obj, i) {
        map[i]={i:i, v:obj};
        return map;
    }, []).sort((a,b)=>b.v-a.v);

    oldjv=oldkv=h[n-1].v;      

    for (let k = 0; k < n; k++) {
        if(h[k].v<=(sum/3)) break;

        if(h[k].i>=2){
            for (let j = k+1; j < n; j++) {
                if((h[j].v*2-1)<=(oldjv+1)) break;
                if((h[j].v*2-1)<=(sum-h[k].v)) break;

                if(h[j].i>=1 && h[j].i<h[k].i){
                    for (let i = j+1; i < n; i++) {
                        if(h[i].i>=0 && h[i].i<h[j].i){
                            // console.log(h[k].v, h[j].v, h[i].v, h[k].v+ h[j].v+ h[i].v);
                            sum=Math.max(sum, h[k].v+ h[j].v+ h[i].v);
                            break;
                        }
                    }
                }

                oldjv=h[j].v;
            }
        }
    }

    return sum;
}

// solve([ 18468, 6335, 26501, 19170, 15725, 11479, 29359, 26963, 24465, 5706, 28146, 23282, 16828, 9962, 492, 2996, 11943, 4828, 5437, 32392, 14605 ]);
// solve([2,5,3,1,4,9]);



//6 2 5 3 1 4 9
//6 2 5 3 1 4 9
//21 18468 6335 26501 19170 15725 11479 29359 26963 24465 5706 28146 23282 16828 9962 492 2996 11943 4828 5437 32392 14605

