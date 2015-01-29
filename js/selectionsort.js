
///////selection SORT

function selectionSort(arr){
 for(var outer = 0; outer<arr.length; outer++){
  for(var inner = 0; inner<arr.length; inner++){
      if (arr[outer]<arr[inner]){
         swap(arr, inner, outer);
      }
    
   }
 }
}


function swap(arr, index, index1){
 var temp = arr[index]
 arr[index] = arr[index1];
 arr[index1] = temp;
}



//////MANUAL TEST SELECTION SORT


var grades = [70,65,60,75,80,100,90,95];
document.getElementById('print').innerHTML = grades + "<br/>";
selectionSort(grades);

document.getElementById('print').innerHTML += grades ;