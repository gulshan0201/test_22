function reverse_number(number){
  number = number+"";
  return number.split('').reverse().join('');
}
console.log(reverse_number(1234556));