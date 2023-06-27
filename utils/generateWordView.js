function generateWordView(answer, attempts) {
  let wordView = "";
  
  for (let i = 0; i < answer.length; i++) {
    const currentLetter = answer[i];
    if (attempts?.includes(currentLetter)) {
      wordView += currentLetter;
    } else {
      wordView += "_";
    }
    
    if (i < answer.length - 1) {
      wordView += " ";
    }
  }
  
  return wordView;
}

module.exports = {generateWordView}