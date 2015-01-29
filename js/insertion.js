
///////Insertion SORT

function insertionSort(arr){

 for(var outer = 1; outer<arr.length; outer++){
   for(var inner = outer; inner>=0; inner--){
    if(arr[inner] < arr[inner-1]){
       swap(arr, inner, inner-1);
     }
   }
 }
}


function swap(arr, index, index1){
 var temp = arr[index]
 arr[index] = arr[index1];
 arr[index1] = temp;
}



//////MANUAL TEST INSERTION SORT


var grades = [70,65,60,75,80,100,90,95];
document.getElementById('print').innerHTML = grades + "<br/>";
insertionSort(grades);

document.getElementById('print').innerHTML += grades ;