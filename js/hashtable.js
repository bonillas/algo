/////////HASH TABLE Class

function HashTable() { 
   this.table = new Array(137); 
   this.simpleHash = simpleHash;
   this.betterHash = betterHash;
   this.showDistro = showDistro; 
   this.buildChains = buildChains;
   this.put = put;
   this.getData = getData;
   this.print = "";
}

function put(key, data) {
  var pos = this.simpleHash(key);
  //var pos = this.betterHash(key); 
  var index = 0;
  if(this.table[pos][index+1]==undefined){ 
  this.table[pos][index+1] = data;
  index++;
  }else{
   while(this.table[pos][index]!=undefined){
    index ++;
   }
   this.table[pos][index] = data;
  }
}


function getData(key){
  var index = 0;
  var pos  = this.simpleHash(key);
   if(this.table[pos][index+1]!=undefined){
      return this.table[pos];
   }
 return undefined;
}


function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
          total += data.charCodeAt(i);
  }
  return total % this.table.length; 
}


function betterHash(string){
  const H = 37;
  var total = 0;
  for (var i =0; i < string.length; i++){
    total+= H*total+string.charCodeAt(i);
  }
  total = total % this.table.length; 
  return parseInt(total);
}



function showDistro() { 

  for (var i = 0; i < this.table.length; i++) { 
    if (this.table[i] != undefined) {
      this.print.innerHTML += i +" : " +   this.table[i]+" <br/> "; 
    }
   }
}



function buildChains(){
  for (var i = 0; i<this.table.length; i++){
   this.table[i] = new Array; 
  }
}


//////MANUAL HASHTABLE CLASS TEST

var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Manny"]; 
var someOtherNames = ["Dav", "Jen", "Don", "Ray","Cyn", "Mik", "Cla", "Dan", "Man"]; 

var hTable = new HashTable();
hTable.buildChains();
hTable.print= document.getElementById("print");
for (var i = 0; i < someNames.length; i++) { 
hTable.put(someOtherNames[i], someNames[i]);
}

hTable.showDistro();

hTable.print.innerHTML += hTable.getData("Don");

















/////COMMENTED INTEGER HASHING TESTS


/*  Integer Hashing Test

function getRandomInt(min, max){
 
  return Math.floor(Math.random() * (max-min +1)) + min;
}



function genStuData(arr){
 for (var i = 0; i<arr.length; i++){
   var num = "";
   for (var j = 1; j<=9; j++){
    num +=  Math.floor(Math.random()*10);
   }
  num += getRandomInt(50,100);
  arr[i] = num;
 }
}


var numStudents = 10; 
var students = new Array(numStudents); 
genStuData(students);
document.getElementById('print2').innerHTML = "<br/>Student data: <br/>";
for (var i = 0; i < students.length; i++) {
document.getElementById('print2').innerHTML += students[i].substring(0,8) + " " + students[i].substring(9) + "<br/>";
}
document.getElementById('print2').innerHTML += "<br/><br/>Data distribution: <br/>";

var hTable = new HashTable();
hTable.print= document.getElementById("print3");
for (var i = 0; i < students.length; ++i) {
   hTable.put(students[i]);
}
hTable.showDistro();
*/ 