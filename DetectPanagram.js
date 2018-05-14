const isPangram = string => {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let lowerCaseString = string.toLowerCase();
  for (var i = 0; i < letters.length; i++) {
    if (lowerCaseString.indexOf(letters[i]) == -1) {
      return false;
    }
  }
  return true;
};
