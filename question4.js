function combine(s){
  combined_string = new Array();
  for(let i=0; i<s.length; i++){
    for(let j=i+1; j<s.length+1; j++){
      combined_string.push(s.slice(i,j));
    }
  } 
  return combined_string;
}
console.log(combine("gulshan"));