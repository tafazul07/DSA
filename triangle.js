function triangle(n) {
  let num = n.length;
  let row = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 1; j < i; j++) {
      row += j + " ";
    }
    row += "\n";
  }
  for (let i = num; i >= 1; i--) {
    for (let j =1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
    row += "\n";
  }

  return row;
}

console.log(triangle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
