function factorial (n){
 if(n<=1){
  return n;
}else{
return n*factorial(n-1);
}

}


function getFactorial(){
var print =  document.getElementById("print");
var number = document.getElementById("number").value;
print.innerHTML = "Factorial is "+ factorial(number);
}