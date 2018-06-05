// You will be given a number and you will need to return it as a string in Expanded Form.

function expandedForm(num) {
  // Your code here
  var digits = num.toString();
  var output = [];

  for (var i = 0; i < digits.length; i++) {
    if (digits[i] > 0) {
      var zeros = "";
      for (var z = digits.length - i - 1; z > 0; z--) {
        console.log(z);
        zeros += "0";
      }
      output.push(Number(digits[i] + zeros));
    }
  }
  return output.join(" + ");
}
