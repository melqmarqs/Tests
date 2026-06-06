class BinarySearch {
  constructor(arr = []) {
    this.arr = arr;
  }

  firstTrueSearch() {
    let left = 0, right = this.arr.length - 1, mid = 0;
    let firstTrueIndex = -1;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (this.arr[mid]) {
        firstTrueIndex = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return firstTrueIndex;
  }

  findPivot() {
    let left = 0, right = this.arr.length - 1, mid = 0;
    const lastValue = this.arr[this.arr.length - 1];
    let currentPivot = -1;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (this.arr[mid] <= lastValue) {
        currentPivot = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return currentPivot;
  }
}

// const bs = new BinarySearch([false, false, false, false, false, true]);
// console.log(bs.firstTrueSearch())

const bs = new BinarySearch([11, 12, 13, 14, 20, 22, 23, 28, 29, 10]);
console.log(bs.findPivot())