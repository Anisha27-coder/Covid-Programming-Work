const readline = require("readline");
var i, j, temp;
var arr = [10, 3, 5, 6, 8, 34, 4];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    console.log(arr)
  }
}
console.log(arr);
