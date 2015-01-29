
///////BUBBLE SORT


function bubbleSort(arr){
 var numElements = arr.length;
 var temp = arr;
 for(var outer = numElements; outer>=2; outer--){
  for (var inner = 0; inner<numElements; inner++){
   console.log(inner);
      if(arr[inner] > arr[inner+1]){
        console.log(arr[inner]+" "+arr[inner+1]);
        swap(arr, inner, inner+1);
      }
   }
 }
 
}



function swap(arr, index, index1){
 var temp = arr[index]
 arr[index] = arr[index1];
 arr[index1] = temp;
}



//////MANUAL TEST BUBBLE SORT


var grades = [70,65,60,75,80,100,90,95];
document.getElementById('print').innerHTML = grades + "<br/>";
bubbleSort(grades);

document.getElementById('print').innerHTML += grades ;