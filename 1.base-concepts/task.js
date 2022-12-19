"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c;
  
  if (D > 0) {
    arr.push((-b + Math.sqrt(D) )/(2*a), (-b - Math.sqrt(D) )/(2*a));
  } else if (D === 0) {
    arr.push(-b/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  if (typeof(percent) === 'number' && typeof(contribution) === 'number' && typeof(amount) === 'number' && typeof(countMonths) === 'number') {
    let monthPercent = ((percent / 100)/12);
    let creditBody = amount - contribution;
    let monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));

    return Number((countMonths * monthPayment).toFixed(2));

  } else {

    return false;
  }
}
