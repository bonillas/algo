///////BINARY SERACH IN SORTED ARRAY
function binarySearch(data, arr){
 var upperbound = arr.length-1;
 var lowerbound = 0;
 while (lowerbound<=upperbound){
   var mid = Math.floor((upperbound + lowerbound)/2 );
  if(data>arr[mid]){
    lowerbound = mid+1;
  } else if (data<arr[mid]){
    upperbound = mid-1;
  }
  else{
  return arr[mid];
 }
}
return false
}




//////test binary search

var numbers = [10,20,30,40,50,60,70,80,90,100]

document.getElementById("print").innerHTML = binarySearch(20,numbers);