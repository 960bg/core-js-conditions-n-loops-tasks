/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(...c) {
  if (c.length === 0) {
    return c;
  }
  let max = -Infinity;
  for (let i = 0; i < c.length; i += 1) {
    if (max < c[i]) {
      max = c[i];
    }
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === queen.y && king.x === king.y) {
    return true;
  }
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || c === 0 || b === 0) {
    return false;
  }
  if (a + b < c) {
    return false;
  }
  if (a + c < b) {
    return false;
  }
  if (c + b < a) {
    return false;
  }

  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const rim = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };

  if (num <= 10) {
    return rim[num];
  }

  const f = num % 10;
  let s = num - f;
  if (s === 10) {
    return `${rim[s]}${rim[f]}`;
  }
  let digits = '';
  while (s > 10) {
    digits += rim[10];
    s -= 10;
  }
  const str = digits + rim[s] + rim[f];
  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    let el = '';
    switch (numberStr[i]) {
      case '1':
        el = 'one';
        break;
      case '2':
        el = 'two';
        break;
      case '3':
        el = 'three';
        break;
      case '4':
        el = 'four';
        break;
      case '5':
        el = 'five';
        break;
      case '6':
        el = 'six';
        break;
      case '7':
        el = 'seven';
        break;
      case '8':
        el = 'eight';
        break;
      case '9':
        el = 'nine';
        break;
      case '0':
        el = 'zero';
        break;
      case ',':
        el = 'point';
        break;
      case '.':
        el = 'point';
        break;
      case '-':
        el = 'minus';
        break;
      default:
        break;
    }

    str += `${el}`;
    if (i !== numberStr.length - 1) {
      str += ' ';
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < Math.trunc(str.length / 2); i += 1) {
    str1 += str[i];
    str2 += str[str.length - 1 - i];
  }
  return str1 === str2;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    const el = str[i];
    if (el === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const res = getIndexOf(`${num}`, `${digit}`);
  if (res !== -1) {
    return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }

  for (let i = 1; i < arr.length; i += 1) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < i; j += 1) {
      sum1 += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      sum2 += arr[j];
    }
    if (sum1 === sum2) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 'a';
    }
  }

  let line = 'a';

  let changeLine = 0;
  let index = 0;

  let isBegin = true;

  let count = 1;

  let rowA = 0;

  let rowC = 0;

  let colB = 0;

  let colD = 0;

  let isSwapLine = false;

  const end = size * size;
  while (count <= end) {
    if (line === 'b') {
      for (let c = 0; c < size - index; c += 1) {
        arr[c + rowA][size - colB - 1] = count;
        count += 1;
      }
      colB += 1;
      isSwapLine = true;
    }

    if (line === 'c') {
      for (let c = 0; c < size - index; c += 1) {
        arr[size - rowC - 1][size - 1 - (c + colB)] = count;
        count += 1;
      }
      rowC += 1;
      isSwapLine = true;
    }

    if (line === 'd') {
      for (let c = 0; c < size - index; c += 1) {
        arr[size - 1 - (c + rowC)][colD] = count;
        count += 1;
      }
      colD += 1;
      isSwapLine = true;
    }

    if (line === 'a') {
      for (let c = 0; c < size - index; c += 1) {
        arr[rowA][c + colD] = count;
        count += 1;
      }
      rowA += 1;
      isSwapLine = true;
    }

    if (isSwapLine === true) {
      isSwapLine = false;
      changeLine += 1;

      if (line === 'a' && isBegin === true) {
        index += 1;
        isBegin = false;
        changeLine = 0;
      }

      if (changeLine === 2) {
        index += 1;
        changeLine = 0;
      }

      switch (line) {
        case 'a':
          line = 'b';
          break;
        case 'b':
          line = 'c';
          break;
        case 'c':
          line = 'd';
          break;
        case 'd':
          line = 'a';
          break;

        default:
          break;
      }
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  const m = matrix;
  const row = matrix.length;
  const col = matrix[0].length;
  const arr = new Array(row);
  for (let r = 0; r < row; r += 1) {
    arr[r] = new Array(col);
    for (let c = 0; c < col; c += 1) {
      arr[r][col - c - 1] = matrix[c][r];
    }
  }

  for (let r = 0; r < row; r += 1) {
    for (let c = 0; c < col; c += 1) {
      m[r][c] = arr[r][c];
    }
  }
  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(A) {
  const arr2 = new Array(A.length);
  for (let i = 0; i < A.length; i += 1) {
    arr2[i] = A[i];
  }

  if (arr2.length <= 1) {
    return arr2;
  }

  function getPivot2(arr) {
    const aInd = Math.floor(Math.random() * arr.length);
    const a = arr[aInd];
    const bInd = Math.floor(Math.random() * arr.length);
    const b = arr[bInd];
    const cInd = Math.floor(Math.random() * arr.length);
    const c = arr[cInd];

    let median = null;

    if (a <= Math.min(b, c)) {
      const med = Math.min(b, c);
      switch (med) {
        case b:
          median = bInd;
          break;
        case c:
          median = cInd;
          break;
        default:
          break;
      }
    }

    if (b <= Math.min(a, c)) {
      const med = Math.min(a, c);
      switch (med) {
        case a:
          median = aInd;
          break;
        case c:
          median = cInd;
          break;
        default:
          break;
      }
    }

    if (c <= Math.min(a, b)) {
      const med = Math.min(a, b);
      switch (med) {
        case a:
          median = aInd;
          break;
        case b:
          median = bInd;
          break;
        default:
          break;
      }
    }

    return median;
  }

  function sort(ar) {
    if (ar.length <= 1) {
      return ar;
    }
    const arr = ar;

    const pivotIndex = getPivot2(arr);
    const pivot = arr[pivotIndex];

    const less = [];
    const equalPivotArr = [];
    const more = [];
    let isSortLess = true;
    let isSortMore = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (pivot > arr[i]) {
        less.length += 1;
        less[less.length - 1] = arr[i];
        isSortLess = false;
      }

      if (pivot < arr[i]) {
        more.length += 1;
        more[more.length - 1] = arr[i];
        isSortMore = false;
      }
      if (pivot === arr[i] && pivotIndex !== i) {
        equalPivotArr.length += 1;
        equalPivotArr[equalPivotArr.length - 1] = arr[i];
      }
    }

    if (isSortLess === true && isSortMore === true) {
      const res = [...less, pivot, ...equalPivotArr, ...more];
      return res;
    }

    let l = less;
    let m = more;
    if (isSortLess === false) {
      l = sort(less);
    }
    if (isSortMore === false) {
      m = sort(more);
    }

    return [...l, pivot, ...equalPivotArr, ...m];
  }

  const res = sort(arr2);

  const A2 = A;
  for (let i = 0; i < A.length; i += 1) {
    A2[i] = res[i];
  }

  return A;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
const hist = [];
function shuffleChar(st1, iterations1) {
  hist.length += 1;
  hist[hist.length - 1] = st1;

  function inside(strOriginal, iterations) {
    const it = iterations;

    let str = strOriginal;
    let str1 = '';
    let str2 = '';
    let isSave = true;
    const hashValue = {};
    let periodOriginalValue = 0;

    for (let j = 0; j < it; j += 1) {
      if (str.length % 2 === 0) {
        for (let i = 1; i < str.length; i += 2) {
          str2 += str[i];
          str1 += str[i - 1];
        }
      } else {
        for (let i = 1; i < str.length; i += 2) {
          str2 += str[i];
          str1 += str[i - 1];
        }
        str1 += str[str.length - 1];
      }
      str = str1 + str2;
      str1 = '';
      str2 = '';
      if (isSave === true) {
        hashValue[j + 1] = str;
        periodOriginalValue = j + 1;
      }
      if (str === strOriginal) {
        isSave = false;
        break;
      }
    }

    let index = it % periodOriginalValue;
    if (index === 0) {
      index = periodOriginalValue;
    }

    const strRes = hashValue[index];
    return strRes;
  }

  const result = inside(st1, iterations1);

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
