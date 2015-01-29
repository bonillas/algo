   
///////Quick SORT


function quickSort(arr, start, end){
  if(start>=end) return;
  var pIndex = partition(arr,start,end); 
  quickSort(arr,start, pIndex-1);
  quickSort(arr,pIndex, end);
}


//quicksort helper function, partition
function partition(arr,start,end){
 var pivot = arr[end];
 var pIndex = start;
 for (var i = start; i<=end; i++){
   if(arr[i] <= pivot){
     swap(arr, i, pIndex);
     pIndex++;
   }
 } 
 return pIndex-1;
}



function swap(arr, index, index1){
 var temp = arr[index];
 arr[index] = arr[index1];
 arr[index1] = temp;
}



//////MANUAL TEST QUICKSORT


var grades = [70,65,60,75,80,100,95,90,55,50];
document.getElementById('print').innerHTML = grades + "<br/>";
quickSort(grades,0,grades.length-1);

document.getElementById('print').innerHTML += grades ;