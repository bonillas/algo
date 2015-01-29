
///////MERGE SORT

function mergeSort(arr){
 var n = arr.length
 if(n<2) return;
 mid = Math.floor(n/2);
 var left  = Array(mid);
 var right = Array(n-mid);
 for (var i =0; i<left.length; i++){
  left[i] = arr[i];
 }
 for (var i =mid; i<n; i++){
  right[i-mid] = arr[i];
 }

 mergeSort(left);
 mergeSort(right);
 merge(left,right,arr);
}



//merge helper function
function merge(left, right, arr){
 var  l = left.length;
 var r = right.length;

 var i = 0;
 var j = 0; 
 var k = 0;
 while(i<l && j<r){
   if(left[i] <= right[j]){
    arr[k] = left[i];
    i++;
   }else{
    arr[k] = right[j];
    j++;
   }
   k++;
 }
 
 while(i<l){
  arr[k] = left[i];
  k++;
  i++;
 }
 
 while(j<r){
  arr[k] = right[j];
  k++;
  j++;
 }
}





//////MANUAL TEST MERGE SORT


var grades = [70,65,60,75,80,100,90,95,55];
document.getElementById('print').innerHTML = grades + "<br/>";
mergeSort(grades);

document.getElementById('print').innerHTML += grades ;
