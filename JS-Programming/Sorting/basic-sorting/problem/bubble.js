function main() {
    let n = parseInt(readLine());
    let arr = [];
    for (let i = 0; i < n; i++) {
      let num = parseInt(readLine());
      arr.push(num);
    }
    console.log(bubbleSort(arr, n));
  }
  
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  
  function bubbleSort(arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
  
        }
      }
    }
    return arr;
  }