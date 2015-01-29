///////////////QUEUE CLASS//////////////

function Queue(){

this.dataStore = [];
this.enqueue = enqueue;
this.dequeue = dequeue;
this.front = front;
this.back = back;
 this.toString = toString;
 this.empty = empty;
}

function enqueue(element) {
 this.dataStore.push(element);
}

function dequeue() {
 return this.dataStore.shift();
}

function front() {
 return this.dataStore[0];
}

function back() {
 return this.dataStore[this.dataStore.length-1];
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
     retStr += this.dataStore[i] + "<br/>";
  }
  return retStr; 
}


function empty() {
  if (this.dataStore.length == 0) {
    return true; 
  }
 else {
   return false;
 } 
}

//end Queue Class

///////////////TEST QUEUE////////////
var print = document.getElementById('print');

var q = new Queue(); 
q.enqueue("Meredith"); 
q.enqueue("Cynthia"); 
q.enqueue("Jennifer");
print.innerHTML= q.toString();
q.dequeue();
print.innerHTML+= q.toString();
print.innerHTML+="Front of queue: " + q.front() + "<br/>";
print.innerHTML+="Back of queue: " + q.back() + "<br/>";
