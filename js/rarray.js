function runArray(arrayLength, array){
   if (arrayLength==1){
    print.innerHTML+=array[arrayLength-1];
   }else{
   print.innerHTML +=array[arrayLength-1];
   runArray(arrayLength-1, array);
  } 
}


var arrayTest = [6,5,4,3,2,1]
var print = document.getElementById("print");
runArray(arrayTest.length, arrayTest);