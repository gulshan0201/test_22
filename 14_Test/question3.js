function square_sum(arr) {
  var sum = 0, 
      i = arr.length;
  while (i--) 
   sum = sum + Math.pow(arr[i], 2);
  return sum;
}
 
console.log(square_sum([0,1,2,3,4])); 