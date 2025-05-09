let myarray = [2, 3, 6, 5, 9, 8, 2];
let anotherarray = [];

function sumfac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    //sum += numbers[i];
  }
  return sum;
}

let result = sumfac(myarray);
console.log(result);

let anotherresult = sumfac([2, 2, 4, 5, 6, 3, 9]);
console.log(`my result is ${anotherresult}`);
