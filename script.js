/**
 * Вопрос 1
 * Представим шахматную доску в виде 2-х мерной матрицы. 
 * В белых и чёрных клетках вписаны цифры.
 *
 * Задача: транспонировать матрицу вокруг главной диагонали, 
 * но не трогать цифры в белых клетках.
 */

// тестовый массив 8 * 8 с рандомными значениями

var arr = [];

for (var i = 0; i < 8; i++) {
  arr[i] = [];
  
  for (var j = 0; j < 8; j++) {
    arr[i][j] = Math.round(Math.random() * 89 + 10);
  } 
} 

//вспомогательная функция печати двумерного массива в консоль

function print(arr) {
  var len    = arr.length;
  
  console.log('--start--');
  
  for (var i = 0; i < len; i++) {
    str = '';
    
    for (var j = 0; j < len; j++) {
      str += ' ' + arr[i][j];
    }
    
    console.log(str);
  }
  
  console.log('--end--');
}

// транспонирование черных клеток  (без изменений исходного массива)

function transposeBlack(arr){
  var len    = arr.length; 
  var newArr = [];

  for (var i = 0; i < len; i++) {
    newArr[i] = arr[i].slice();
    
    for (var j = 0; j < len; j++) {
      if (i === j) continue; // главная диагональ
      
      //белые клетки пропускаем
      
      if ((i % 2) === 0) {
        if ((j % 2) === 0) continue;
      } else {
        if ((j % 2) === 1) continue;
      }
      
      newArr[i][j] = arr[j][i];
    } 
  }
  
  return newArr;
}

// транспонирование черных клеток через битовые операции (с изменением исходного массива)

function transposeBlackByte(arr){
  var len = arr.length; 

  for (var i = 0; i < len; i++) {
    
    for (var j = i; j < len; j++) {
      if (i === j) continue; // главная диагональ
      
      //пропускаем белые клетки
      
      if ((i % 2) === 0) {
        if ((j % 2) === 0) continue;
      } else {
        if ((j % 2) === 1) continue;
      }
      
      arr[i][j] = arr[i][j] ^ arr[j][i];
      arr[j][i] = arr[i][j] ^ arr[j][i];
      arr[i][j] = arr[i][j] ^ arr[j][i];
    } 
  }
  
  return arr;
}

// запуск

print(arr);

print(transposeBlack(arr));

print(transposeBlackByte(arr));