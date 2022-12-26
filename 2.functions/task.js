function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else if (arr[i] < min) {
      min = arr[i]
    };

    sum += arr[i];
  } 

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }; 
  
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);

  if (arr.length === 0) {
    return 0 
  };

  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

   if (arr.length === 0) {
    return 0 
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else if (arr[i] % 2 === 1) {
      sumOddElement += arr[i];
    }
  } return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0 
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  } return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let iteratorResult = func(...arrOfArr[i]);
    if (iteratorResult > maxWorkerResult) {
      maxWorkerResult = iteratorResult;
    }
  } return maxWorkerResult;
};

