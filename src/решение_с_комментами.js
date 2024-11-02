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
