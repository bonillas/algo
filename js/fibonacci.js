//Fibonacci

function fibonacci(n){

   if(n<2){
     return n; 
    } 
  return fibonacci(n-1) + fibonacci(n-2);
}



function dynamicFibonacci(n){
  var val = [];
  if(n<=2){
   return 1;
  }
  val[0]= 1;
  val[1] =  1;
  val[2] = 2;
 for(var i = 3; i<=n; i++){
     val[i] = val[i-1] +  val[i-2];
 }
 return val[n-1]; 
}

function getFibonacci(n){
 document.getElementById("print").innerHTML = fibonacci(n);
}

function getDynamicFibonacci(n){
 document.getElementById("print").innerHTML = dynamicFibonacci(n);
}