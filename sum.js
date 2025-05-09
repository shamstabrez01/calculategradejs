let myarray = [2, 3, 6, 5, 9, 8, 2];
let anotherarray = [];

function sumfac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    //sum += numbers[i];
  }
}

let result = sumfac(myarray);
console.log(result);

let anotherresult = sumfac(anotherarray);
console.log(anotherresult);
