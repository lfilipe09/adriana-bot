function getRandomNumberExcluding(min, max, exclusions) {
  const result = [];
  const exclusionsNumber = exclusions?.map(item => Number(item));
  
  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  const filteredArray = exclusions ? result.filter(item => !exclusionsNumber.includes(item)) : result

  const randomIndex = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[randomIndex];
}

module.exports = {getRandomNumberExcluding}