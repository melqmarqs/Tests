//Check if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.
//Example 1: "A man, a plan, a canal: Panama" → true
//Example 2: "race a car" → false

function isPalindrome(s) {
  const isAlnum = c => /[a-z0-9]/i.test(c);
  let left = 0, right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlnum(s[left])) left++;
    while (left < right && !isAlnum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase())
      return false;

    left += 1;
    right -= 1;
  }

  return true;
}

function test() {
  const phrases = [
    'A man, a plan, a canal: Panama',
    'race a car',
    'Do geese see God?'
  ];

  phrases.forEach(phrase =>
    console.log(phrase, isPalindrome(phrase))
  );
}

test();