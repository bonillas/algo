////////////Sum Nested Array function
function addNestedArray(array){

  for (var i=0; i<array.length; i++){ 
   if(!(array[i] instanceof Array)){ 
     total += array[i]; //total is global variable
    }else{ 
     addNestedArray(array[i]);
    } 
  } 
return total; 

}



/////Test 
var total = 0; //Define global variable 
var newArray = [1, [2, [3, 4], 5], 6, [7, 8]]; 
document.getElementById("print").innerHTML = addNestedArray(newArray);