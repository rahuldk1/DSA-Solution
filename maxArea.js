function maxArea(height) {
    let ans = 0;
    let leftPt, rightPt;
    leftPt = 0, rightPt = height.length-1;
    for (let i = 0; i < height.length; i++){
        ans =Math.max( Math.min(height[leftPt], height[rightPt]) *(rightPt-leftPt),ans);
        console.log(ans,rightPt,leftPt);
        if (height[rightPt] < height[leftPt]) {
            rightPt--;
        }
        else {
            leftPt++;
        }
    }

    return ans;
}




