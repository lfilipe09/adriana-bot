function validateNumberArray(array, min = 0, max = 40) {
  for (let i = min; i <= max; i++) {
    if (!array.includes(i)) {
      return false;
    }
  }
  return true;
}

module.exports = {validateNumberArray}