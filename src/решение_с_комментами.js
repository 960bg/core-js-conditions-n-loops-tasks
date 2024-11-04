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
  console.log('============ МАТРИЦА ============');
  console.log(`====== ${size} x ${size} ======`);
  console.log('arr ============');
  console.log(arr);

  // сторона матрицы
  let line = 'a';
  // счетчик смены стороны, при проходе 2-х сторон
  // увеличиваем index++, исключение первый проход по стороне А
  // - там сразу увеличиваем после прохода стороны А index на 1
  let changeLine = 0;
  let index = 0;
  // флаг первого прохода по стороне А
  let isBegin = true;
  // счетчик значений для заполения матрицы
  let count = 1;
  // строки стороны А
  let rowA = 0;
  // строки стороны C
  let rowC = 0;
  // колонки стороны B
  let colB = 0;
  // колонки стороны D
  let colD = 0;
  // флаг смены стороны
  let isSwapLine = false;

  const end = size * size;
  while (count <= end) {
    console.log('----ЦИКЛ----');
    console.log('сторона: ', line);

    // сторона b
    if (line === 'b') {
      for (let c = 0; c < size - index; c += 1) {
        console.log('arr row = ', c + rowA);
        console.log('arr col = ', size - colB - 1);
        console.log('count: ', count);
        arr[c + rowA][size - colB - 1] = count;
        count += 1;
      }
      colB += 1;
      isSwapLine = true;
    }
    // сторона c
    if (line === 'c') {
      for (let c = 0; c < size - index; c += 1) {
        console.log('arr row = ', size - rowC - 1);
        console.log('arr col = ', size - 1 - (c + colB));
        console.log('count: ', count);
        arr[size - rowC - 1][size - 1 - (c + colB)] = count;
        count += 1;
      }
      rowC += 1;
      isSwapLine = true;
    }
    // сторона d
    if (line === 'd') {
      for (let c = 0; c < size - index; c += 1) {
        console.log('arr row = ', size - 1 - (c + rowC));
        console.log('arr col = ', colD);
        console.log('count: ', count);
        arr[size - 1 - (c + rowC)][colD] = count;
        count += 1;
      }
      colD += 1;
      isSwapLine = true;
    }
    // сторона a
    if (line === 'a') {
      for (let c = 0; c < size - index; c += 1) {
        console.log('arr row = ', rowA);
        console.log('arr col = ', c + colD);
        console.log('count: ', count);
        arr[rowA][c + colD] = count;
        count += 1;
      }
      rowA += 1;
      isSwapLine = true;
    }

    // смена сторон
    if (isSwapLine === true) {
      isSwapLine = false;
      changeLine += 1;
      console.log('Смена сторон');

      if (line === 'a' && isBegin === true) {
        console.log('Сторону А прошли. Сменить индекс +1');
        index += 1;
        isBegin = false;
        changeLine = 0;
      }

      if (changeLine === 2) {
        console.log('Две стороны прошли. Сменить индекс +1');
        index += 1;
        changeLine = 0;
      }

      switch (line) {
        case 'a':
          console.log('a --> b');
          line = 'b';
          break;
        case 'b':
          console.log('b --> c');
          line = 'c';
          break;
        case 'c':
          console.log('c --> d');
          line = 'd';
          break;
        case 'd':
          console.log('d --> a');
          line = 'a';
          break;

        default:
          break;
      }
    }
  }
  console.log(arr);
  console.log(arr.join('\n'));
  return arr;
}



sortByAsc([2, 9, 5, 4, 9, 11]);
sortByAsc([1, 1, 1, 1, 1, 1]);
const mas = [];
const max = 1000;
for (let i = 0; i < max; i += 1) {
  mas.length += 1;
  mas[mas.length - 1] = Math.floor(Math.random() * max);
}
console.log('mas', mas.join());

sortByAsc(mas);

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
  const arr = A;
  console.log('function sortByAsc(A) Start arr:', arr.join());

  if (arr.length <= 1) {
    return arr;
  }

  let deepRec = 0;
  const res = sort(arr);
  console.log('function sortByAsc(A) res:', res.join());
  console.log('function sortByAsc(A) arr.length', arr.length);
  console.log('function sortByAsc(A) res.length', res.length);


  function sort(ar) {
    if (ar.length <= 1) {
      return ar;
    }
    const arr = ar;

    // разбить массив, выделить опорный элемент
    const pivotIndex = getPivot2(arr);
    // const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    console.log('arr.length::::', arr.length);


    deepRec += 1;

    const less = new Array();
    const equalPivotArr = new Array();
    const more = new Array();
    let isSortLess = true;
    let isSortMore = true;
    for (let i = 0; i < arr.length; i += 1) {
      // перекинуть влево от опорный элемент все что меньше его 
      if (pivot > arr[i]) {
        less.length += 1;
        less[less.length - 1] = arr[i];
        isSortLess = false;
      }
      // перекинуть вправо от опорный элемент все что больше его 
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

    // если не было перестановок элементов то массив отсортирован
    if (isSortLess === true && isSortMore === true) {
      const res = [...less, ...equalPivotArr, pivot, ...more];
      console.log('Массив отсортирован', res.join());
      return res;
    }

    // console.log('arr', arr);
    // console.log('pivot', pivot);
    // console.log('pivotIndex', pivotIndex);
    // console.log('less', less);
    // console.log('more', more);

    let l = less;
    if (isSortLess === false) {
      l = sort(less);
    }

    let m = more;
    if (isSortMore === false) {
      m = sort(more);
    }

    return [...l, ...equalPivotArr, pivot, ...m];
  }


  console.log('Глубина рекурсии = ', deepRec);

  return arr;

  function getPivot(arr) {
    console.log('getPivot(arr): arr.length', arr.length);

    const aInd = Math.floor(Math.random() * (arr.length));
    const a = arr[aInd];
    const bInd = Math.floor(Math.random() * (arr.length));
    const b = arr[bInd];
    const cInd = Math.floor(Math.random() * (arr.length));
    const c = arr[cInd];

    console.log('a', a, 'aInd', aInd);
    console.log('b', b, 'bInd', bInd);
    console.log('c', c, 'cInd', cInd);

    let median = null;

    if (b <= a <= c || c <= a <= b) {
      median = aInd;
    }
    if (a <= b <= c || c <= b <= a) {
      median = bInd;
    }
    if (a <= c <= b || b <= c <= a) {
      median = cInd;
    }

    console.log('return median:', arr[median], 'cInd', median);

    return median;
  }

  function getPivot2(arr) {
    console.log('getPivot(arr): arr.length', arr.length);

    const aInd = Math.floor(Math.random() * (arr.length));
    const a = arr[aInd];
    const bInd = Math.floor(Math.random() * (arr.length));
    const b = arr[bInd];
    const cInd = Math.floor(Math.random() * (arr.length));
    const c = arr[cInd];

    console.log('a', a, 'aInd', aInd);
    console.log('b', b, 'bInd', bInd);
    console.log('c', c, 'cInd', cInd);

    let median = null;

    if (a <= Math.min(b, c)) {
      let med = Math.min(b, c);
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
      let med = Math.min(a, c);
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
      let med = Math.min(a, b);
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
    console.log('return median:', arr[median], 'cInd', median);

    return median;
  }
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
  console.log('string:', st1);
  console.log('iterations:', iterations1);

  hist.length += 1;
  hist[hist.length - 1] = st1;

  for (let i = 0; i < hist.length; i += 1) {
    console.log('hist:', hist[i]);
  }

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
        // запомнить период повтора
        periodOriginalValue = j + 1;
      }
      // закончить записывать значения строк в массив, тк потом идут повторы
      if (str === strOriginal) {
        // break;
        isSave = false;
      }
    }
    console.log(
      'закончить записывать значения строк в массив, тк потом идут повторы'
    );
    console.log('str = ', str);
    console.log('strOriginal=', strOriginal);
    console.log(' период повтора:', periodOriginalValue);

    // определить значение строки из сохранений
    let index = it % periodOriginalValue;
    if (index === 0) {
      index = periodOriginalValue;
    }

    console.log('период сохранений:', periodOriginalValue);
    console.log('индекс строки из сохранений:', index);
    // получить значение
    const strRes = hashValue[index];
    console.log('str из кэш:', strRes);
    console.log('str вычисленная:', str);
    console.log('hashValue:', hashValue);

    return str;
  }

  const result = inside(st1, iterations1);
  console.log('result', result);

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
function getNearestBigger(number) {
  console.log('=================================');
  console.log('function getNearestBigger(number)');
  console.log('number:', number);
  console.log('number.length:', `${number}`.length);

  const numToArr = (num) => {
    const mas = [];
    for (let i = 0; i < `${num}`.length; i += 1) {
      mas.length += 1;
      mas[mas.length - 1] = Number(`${num}`[i]);
    }
    return mas;
  };

  const arrToNum = (arrNum) => {
    let num = 0;
    for (let i = 0; i < arrNum.length; i += 1) {
      num += arrNum[arrNum.length - 1 - i] * 10 ** i;
    }
    console.log('arrToNum:', arrNum, '=>', 'num:', num);
    return num;
  };

  const reverseArr = (arr) => {
    const mas = [];
    for (let i = 0; i < arr.length; i += 1) {
      mas.length += 1;
      mas[mas.length - 1] = arr[arr.length - 1 - i];
    }
    return mas;
  };

  const swap = (swapMas2, i1, i2) => {
    const swapMas = swapMas2;
    [swapMas[i1], swapMas[i2]] = [swapMas[i2], swapMas[i1]];
  };

  const findIndex = (arr, member) => {
    let index = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[arr.length - 1 - i] === member) {
        index = arr.length - 1 - i;
        break;
      }
    }
    return index;
  };

  const numArr = numToArr(number);
  console.log('numArr', numArr);

  // sortByAsc(A);
  const str = '';
  console.log(reverseArr(str));
  let biggest = NaN;
  const currArr = [];
  for (let i = numArr.length - 1; i >= 1; i -= 1) {
    const curr = numArr[i];
    const next = numArr[i - 1];
    console.log(
      'Сравниваем цифры:',
      'текущая curr:',
      curr,
      'и следующая next',
      next
    );

    // частный случай если на конце цифра больше чем ее сосед
    if (i === numArr.length - 1) {
      if (curr > next) {
        console.log('curr > next:', curr > next);
        console.log(
          'Массив CurrMas До___ перестановки numArr.join',
          numArr.join(', ')
        );
        swap(numArr, i, i - 1);
        console.log(
          'Массив CurrMas После перестановки numArr.join',
          numArr.join(', ')
        );
        console.log('swap done: numArr:', numArr);
        return arrToNum(numArr);
      }
      // currArr.length += 1;
      // currArr[currArr.length - 1] = curr;
    } else if (curr > next && currArr.length > 0) {
      console.log(
        'curr > next && currArr.length > 0',
        curr > next && currArr.length > 0
      );
      console.log(
        'Текущее зн больше след. и массив текущих зн не пустой currArr:',
        currArr.join()
      );
      console.log('занести в массив текущих зн текущее значение curr,', curr);
      console.log(
        'потому что мы будем сравнивать след значение со значениями из currArr'
      );
      console.log('для поиска самого близкого большего зн из текущих');
      console.log('массив текущих значений До___ занесения:', currArr);
      currArr.length += 1;
      currArr[currArr.length - 1] = curr;
      console.log('массив текущих значений После занесения:', currArr);

      console.log('+ Поиск самого близкого большего зн из текущих');
      console.log('Сортируем массив CurArr');
      console.log('currArr До___ сортировки', currArr.join(', '));
      sortByAsc(currArr);
      console.log('currArr После сортировки', currArr.join(', '));
      console.log('перебираем все значения из массива');
      for (let l = 0; l < currArr.length; l += 1) {
        if (currArr[l] > next) {
          console.log('нашли ближайшее большее зн из текущих:', currArr[l]);
          console.log('next:', next);
          biggest = currArr[l];
          console.log(
            'необходимо заменить в массиве currArr элемент biggest на значение Next'
          );
          console.log('тк Next в массиве numArr будет заменен на biggest');
          console.log('массив currArr до___ замены', currArr.join());
          currArr[l] = next;
          console.log('массив currArr после замены', currArr.join());
          break;
        }
      }

      console.log(
        'поменять местами в numArr тек зн с ближайшее большее зн из текущих знач'
      );
      console.log('меняем next', next, 'на biggest', biggest);

      console.log(
        'найти индекс biggest в массиве numArr для дальнейшей перестановки'
      );
      const indNumOfNumArr = findIndex(numArr, biggest);
      console.log('нашли индекс biggest в массиве numArr:', indNumOfNumArr);

      console.log('Выполняем перестановку', next, 'на biggest', biggest);
      console.log(
        'Массив numArr До___ перестановки numArr.join',
        numArr.join(', ')
      );
      swap(numArr, i - 1, indNumOfNumArr);
      console.log(
        'Массив numArr После перестановки numArr.join',
        numArr.join(', ')
      );
      console.log('swap done: numArr:', numArr);

      console.log('Дальше нужно сортировать массив текущих зн  ');
      console.log(
        'и занести в numArr по восходящей все значения начиная с тек+1'
      );
      console.log('currArr До___ сортировки', currArr.join(', '));
      sortByAsc(currArr);
      console.log('currArr После сортировки', currArr.join(', '));

      console.log('Вставляем цифры по возрастанию');
      for (let k = 0; k < currArr.length; k += 1) {
        console.log('Тек. цифра', currArr[k]);
        console.log(
          'Цифра в массиве numArr которую меняем на тек: ',
          numArr[i + k]
        );

        numArr[i + k] = currArr[k];
      }
      console.log('Сформировали число', Number(numArr.join('')));
      return Number(numArr.join(''));

      // удалить посл цифру из currArr тк она была самая маленьк
      // из всех из пройденных по масс numArr, и ее поменяли уже
      //  при сравнении с текущей цифры(curr) и соседа(next)

      // 1. проход с конца числа
      // 2. если тек цифр > соседа -> меняем и возв рез-т работа окончена
      // 3. если 2 п. не сработал то копим массив пройденных цифр с конца числа
      // и когда встретится ситуация что тек цифр > соседа нужно выбрать
      // из массива пройденных цифр самую маленьк и поменять с текущей
      // удалить из массива пройденных цифр эту самую маленьк
      // 4. далее та цифра что была соседом (которого поменяли) записывается
      // в массив пройденных цифр, массив сортируем в возр порядке
      // и начиная после тек позиции меняем числа исх массива на сортированный
    }

    console.log(
      'curr > next && currArr.length > 0',
      curr > next && currArr.length > 0
    );
    console.log(
      'Текущее значение',
      curr,
      'меньше следующего',
      next,
      'значит заносим его в массив'
    );
    console.log(
      'массив текущих значений до добавления тек зн:',
      currArr.join()
    );
    currArr.length += 1;
    currArr[currArr.length - 1] = curr;
    console.log(
      'массив текущих значений после добавления тек зн:',
      currArr.join()
    );
  }

  return number;
}

