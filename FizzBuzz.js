// If the value is a multiple of 3: return 'Fizz' instead
// If the value is a multiple of 5: return 'Buzz' instead
// If the value is a multiple of 3 & 5: return 'FizzBuzz' instead

myArr = [1, 3, 5, 6, 7, 9, 2];

const fizzBuzz = arr => {
  for (let i = 0; i <= arr.length; i++) {
    if (i % 15 == 0) {
      return "FizzBuzz";
    } else if (i % 3 == 0) {
      return "Fizz";
    } else if (i % 5 == 0) {
      return "Buzz";
    } else return i;
  }
};

fizzBuzz(myArr);
