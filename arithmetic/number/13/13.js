function romanToInt(s) {
  const hashTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let ret = 0
  const isSpecialNum = (c, cNext) => {
    if (!cNext) {
      return false
    }
    return c === 'I' && (cNext === 'V' || cNext === 'X')
      || c === 'X' && (cNext === 'L' || cNext === 'C')
      || c === 'C' && (cNext === 'D' || cNext === 'M')
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isSpecialNum(char, s[i+1])) {
      ret += {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
      }[`${char}${s[i+1]}`]
      i++
    } else {
      ret += hashTable[char]
    }
  }
  return ret;
}

console.log(
  romanToInt(
    'MCMXCIV'
  )
)