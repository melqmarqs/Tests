class SlidingWindow2 {
  constructor(text) {
    this.text = text;
  }

  FindTheLongestSubstring() {
    let longest = 0;
    let auxPointer = 0, auxString = '';
    for (let i = 0; i < this.text.length; i++) {
      auxPointer = i;
      auxString = '';
      while (!auxString.includes(this.text[auxPointer]) && auxPointer < this.text.length) {
        auxString += this.text[auxPointer];
        auxPointer++;
      }

      longest = Math.max(longest, auxString.length);
    }

    return longest;
  }

  x() {
    let walker = 0;
    let currentStg = '';
    while (walker < (this.text.length - 1)) {
      if (walker == 0) {
        currentStg += this.text[walker];
        walker++;
        continue;
      }

      if (currentStg.includes(this.text[walker])) {
        walker++;
      } else {
        currentStg += this.text[walker];
        walker++;
      }
    }

    return currentStg.length;
  }
}

const sw = new SlidingWindow2('abcdbea');
console.log(sw.x());