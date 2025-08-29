let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let obj = -Infinity;

for (let st = 0; st < n; st++) {
  let row = " ";
  for (let ed = st; ed < n; ed++) {
    let sum = 0;
    for (let i = st; i < ed; i++) {
      sum += arr[i];
      for (let j = 0; j < sum; j++) {
        if (sum > obj) {
          obj = sum;
        }
      }
    }
    row += sum + " ";
  }
  console.log(row);
  console.log(" ");
}
console.log("this is maximum of subarray " + obj);
