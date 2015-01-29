////////Palindrome Version 1////////
function isPalindrome(word){
var wordReverse ="";
 for(var i=word.length; i>0; i--){
  wordReverse+= word[i-1];
  }
if(wordReverse==word){
  return word + " is a palindrome. Version 1";
}
else{
  return word + " is not a palindrome. Version 1";
}
}



////////Palindrome Version 2////////
function isPalindromeBetter(word){
var j = 0;
 for(var i=word.length; i>=Math.ceil(word.length/2); i--){
  if(word[i-1]!== word[j]){
   return word + " is not a palindrome. Version 2";
  }
 j++;
  }
  return word + " is a palindrome. Version 2";
}




////////// Function test that calls isPalindrome//////
function checkPalindrome(version){
var print = document.getElementById("print");
var word = document.getElementById("word").value;
if(version===1){
var word = isPalindrome(word);
}else{
var word = isPalindromeBetter(word);
}
print.innerHTML = word;
}