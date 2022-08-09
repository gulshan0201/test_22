const count_vowel = function(str){
  return str.replace(/[^aeiou]/gmi, "").length;
}
console.log(count_vowel('hello geeks welcome'));
