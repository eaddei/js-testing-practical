function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number; // the "+" in front of the number converts the string into real numbers
  }
  return sum;
}
module.exports = {add};

