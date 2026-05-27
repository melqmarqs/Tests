class SlidingWindow {
  constructor(arr = []) {
    this.arr = arr;
  }

  findLargestSum(interval = 2) {
    let window_sum = 0;

    if (this.arr.length <= 0 && this.arr.length < interval)
      return 0;

    for (let i = 0; i < interval; i++) {
      window_sum += this.arr[i];
    }

    let largest = window_sum;

    for (let right = interval; right < this.arr.length; right++) {
      const left = right - interval;
      window_sum -= this.arr[left];
      window_sum += this.arr[right];
      largest = Math.max(largest, window_sum);
    }

    return largest;
  }
}

const sw = new SlidingWindow([9, 3, 5, 19, 1, 20, 3, 2]);
console.log(sw.findLargestSum(3));