/////////Simple Sequential Search in array

function seqSearch(data, arr){
   for(var i = 0; i<arr.length; i++){
      if(data==arr[i]){
         return arr[i];
       }
    }
   return false;
}

///Finding Minimum and maximum Values in array

function findMin(arr){
  var min = arr[0];
  for(var i = 0; i<arr.length; i++){
    if(arr[i]<min){
       min = arr[i];
    }
  }
 return min;
  
}


function findMax(arr){
  var max = arr[0];
  for(var i = 0; i<arr.length; i++){
    if(arr[i]>max){
       max = arr[i];
    }
  }
 return max;
  
}




/*   Self Organizing Array search
The fastest successful sequential searches on unordered data occur when the data being searched for is located at the beginning of the data set. You can ensure that a successfully found data item will be found quickly in the future by moving it to the beginning of a data set after it has been found in a search. 

The concept behind this strategy is that we can minimize search times by locating items that are frequently searched for at the beginning of a data set.

It makes sense to allow your data to self-organize since the data being searched most likely follow the “80-20 rule,” meaning that 80% of the searches made on a data set are searching for just 20% of the data in the set. Self-organization will eventually put that 20% at the beginning of the data set, where a simple sequential search will find them quickly.

We can modify our seqSearch() function to include self-organization fairly easily.
 */

function seqSearchOrg(data, arr){
   for(var i = 0; i<arr.length; i++){
      if(data==arr[i]){
           if(arr[i] > 0){
             swap(arr,i, i-1);
           }
         return arr[i-1];
       }
    }
   return false;
}


function swap(arr, index, index1){
   var temp = arr[index1];
   arr[index1] = arr[index];
   arr[index] =  temp; 
}



//////Manual test for simple sequential search , O(n)

var grades = [70,65,60,75,80,100,90,95];

document.getElementById("print").innerHTML = "Finding grade in array: " + seqSearch(90,grades)+ " <br/>";


document.getElementById("print").innerHTML += "Array is : " + grades+ " <br/>";
document.getElementById("print").innerHTML += "Self organizing search " + seqSearchOrg(90,grades)+ " <br/>";
document.getElementById("print").innerHTML += "Organized Array is : " + grades+ " <br/>";


document.getElementById("print").innerHTML += "Lowest grade is: " + findMin(grades) + " <br/>";

document.getElementById("print").innerHTML += "Highest grade is: " + findMax(grades);