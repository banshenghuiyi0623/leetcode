function isPalindrome(x) {
  if (x < 0 || x % 10 === 0 && x !== 0) {
    return false
  }
  let revertedNumber = 0;
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x /= 10
  }

  // 偶数位的数字相等，奇数位的数字翻转后的数字比未翻转的数字多一位
  return x === revertedNumber || x === revertedNumber / 10
}