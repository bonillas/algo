/////NODE CLASS
function Node(element){
   this.element= element;
   this.next = null;
   this.previous =  null;
}


/////DOUBLE LINKED LIST CLASS

function DList(){
this.head = new Node("head");
this.find = find;
this.insert = insert;
this.remove = remove;
this.display = display;
this.dispReverse = dispReverse;
this.findLast = findLast;
this.print = "";
}

function dispReverse(){
 var currNode = this.head;
 currNode = this.findLast();
 while(currNode!=null){
this.print.innerHTML += currNode.element + " ";
console.log(currNode.element);
currNode = currNode.previous;
}
}



function findLast(){
   var currNode = this.head;
   while(currNode.next != null){
    currNode = currNode.next;
   }
  return currNode;
}



function remove(item){
  var currNode = this.find(item);
   if (currNode.next != null){
    currNode.previous.next = currNode.next;
    currNode.next.previous =  currNode.previous;
    currNode.next = null;
    currNode.previous = null;
   }
}


function display(){
  var currNode = this.head;
   while(currNode!= null){
   this.print.innerHTML += currNode.element + " ";
console.log(currNode.element);
   currNode = currNode.next;
  }
}


function find(item){
 var currNode = this.head;
 while (currNode.element!=item){
 currNode = currNode.next;
}
return currNode;
}


function insert(newElement, item){
var newNode = new Node(newElement);
var current = this.find(item);
newNode.next = current.next;
newNode.previous = current;
current.next = newNode;
}


////test class
var cities = new DList(); 
cities.print = document.getElementById('print');
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville");
 cities.insert("Alma", "Carlisle"); 
cities.display();
cities.remove("Carlisle");
cities.display();

cities.dispReverse();