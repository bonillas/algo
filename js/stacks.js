///////////////STACK CLASS///////////////
function Stack(){

this.dataStore =[];
this.top=0;
this.push=push;
this.pop=pop;
this.peek=peek;
this.length=length;
this.clear=clear;

}

function push(element){
this.dataStore[this.top++]= element;
}

function pop(){
return this.dataStore[--this.top];
}

function peek(){
return this.dataStore[this.top-1];
}

function length(){
return this.top;
}


function clear(){
this.top = 0;
}
// End stack class



/////////////TEST PROGRAM STARTS HERE////////////

var print = document.getElementById('print');
var newline = "<br/>";

var s = new Stack(); 
s.push("David"); 
s.push("Raymond"); 
s.push("Bryan");
print.innerHTML += "The Length of the stack is: " + s.length() + newline; 
print.innerHTML +="The top element is: " +s.peek() + newline;
var popped = s.pop();
print.innerHTML +="The popped element is: " + popped + newline; 
print.innerHTML += "The top element is: " + s.peek() + newline;
s.push("Cynthia");
print.innerHTML += "The top element is: " + s.peek()+ newline;
//End Test