let arr = [1,2,3,4,5];

let maxSum = arr[0];
let currSum = 0;

for(let i=0; i<arr.length; i++){
    currSum = Math.max(arr[i], currSum + arr[i])
    maxSum = Math.max(maxSum, currSum);
}

console.log("Maximum subarray sum is " + maxSum);