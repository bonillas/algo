/////////SET CLASS
function Set(){
 
 this.dataStore = [];
 this.add=add;
 this.remove=remove;

 this.size=size;
 this.union=union;
this.intersect = intersect;
 this.subset=subset;
 this.difference=difference;
 this.contains=contains;
 this.show=show;
 this.print="";

}

function add(data){ 
 if(this.dataStore.indexOf(data) <0){
  this.dataStore.push(data);
  return true;
 }
 return false;
}


function remove(data){
 var pos= this.dataStore.indexOf(data);
 if(pos>(-1)){
  this.dataStore.splice(pos,1);
  return true;
 }
 return false;
}

function show(){
 return this.dataStore;
}

function contains(data){
 if(this.dataStore.indexOf(data)> -1){
  return true;
 }
 return false;
}



function union(set){
 var tempSet = new Set();
 for(var i = 0; i<this.dataStore.length; i++){
  tempSet.add(this.dataStore[i]);
 
 }

 for(var i = 0; i<set.dataStore.length; i++){
  if(!tempSet.contains(set.dataStore[i])){
    tempSet.dataStore.push(set.dataStore[i]);
  }
 
 }
 
 return tempSet;
}



function intersect(set){
  var tempSet = new Set();

  for (var i = 0; i<this.dataStore.length; i++){
    if(set.contains(this.dataStore[i])){ 
      tempSet.add(this.dataStore[i]);
    }
  }
 return tempSet;
}


function difference(set){
  var tempSet = new Set();

  for (var i = 0; i<this.dataStore.length; i++){
    if(!set.contains(this.dataStore[i])){ 
      tempSet.add(this.dataStore[i]);
    }
  }
 return tempSet;
}



function subset(set){

 if(this.size() > set.size()){
  return false;
 }
 
 for(var i=0; i<this.size();  i++){
  if(!set.contains(this.dataStore[i])){
    return false;
  }
 }
 return true;
}



function size(){
 return this.dataStore.length;
}





/////////MANUAL TEST SHOW CLASS

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
document.getElementById("print").innerHTML += "First set :"+ cis.show()+"<br/>";
document.getElementById("print").innerHTML += "Second set :" +dmp.show()+"<br/>";
//Union
var un = new Set();
un = cis.union(dmp);
document.getElementById("print").innerHTML += "UNION :"+ un.show() +"<br/>";
//Intersection
var inter = new Set();
inter = cis.intersect(dmp);
document.getElementById("print").innerHTML += "INTERSECTION :" + inter.show()+"<br/>";;
//Difference
var diff = new Set();
diff = cis.difference(dmp);
document.getElementById("print").innerHTML += "DIFFERENCE :" + diff.show()+"<br/>";;

//Subset
var it = new Set(); 
it.add("Cynthia"); 
it.add("Clayton"); 
it.add("Jennifer"); 
it.add("Danny"); 
it.add("Jonathan"); 
it.add("Terrill"); 
it.add("Raymond");
it.add("Mike");
var dmp = new Set(); 
dmp.add("Cynthia"); 
dmp.add("Raymond"); 
dmp.add("Jonathan"); 
document.getElementById("print").innerHTML += "<br/><br/>";
document.getElementById("print").innerHTML += "First set :"+ it.show()+"<br/>";
document.getElementById("print").innerHTML += "Second set :" +dmp.show()+"<br/>";
if (dmp.subset(it)) {
   document.getElementById("print").innerHTML += "Second set is a subset of First";
}
else {
  document.getElementById("print").innerHTML += "Second set is not a subset of First.";
}

