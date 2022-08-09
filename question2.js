const capital = function(sentence){

  let string = sentence.split(" ");
  for(let i=0; i<string.length; i++){
    string[i] = string[i][0].toUpperCase() + string[i].substring(1);
    
  }
  return string.join(" ");
}

console.log(capital("the quick brown fox"));