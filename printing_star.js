// function printStars(n) {
//   if (n < 0) return;

//   for (let i = 0; i < n; i++) {
//     let spaces = " ".repeat(n - i - 1);
//     let stars = "*".repeat(2 * i + 1);
//     console.log(spaces + stars);
//   }

//   for (let i = n; i >= 1; i--) {
//       let spaces = " ".repeat(n - i);
//       let stars = "*".repeat(2 * i + 1);
//       console.log(spaces + stars);
//     }
//     return "";
//   }

// console.log(printStars(5));


function printingStar (n){
    for(let i=0; i<n; i++){
        let row = " ";
        for(let j=0; j<i+1; j++){
            row += "*";
        }
        console.log(row);
    }

    for(let i=n; i>=0; i--){
        let row = " ";
        for (let j = 0; j < i; j++) {
        row += "*";
    }
        console.log(row);
    }
    return "";
}

console.log(printingStar(5));