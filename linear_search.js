let arr = [4, 2, 7, 8, 1, 2, 5];
let obj = 8;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === obj) {
    console.log(`Found ${obj} at index ${i}`);
  }
}