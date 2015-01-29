/////////////////////////////////GRAPHS

//////Vertex Class

function Vertex(label){
  this.label = label;
}


//////Graph Class

function Graph(v){

 this.vertices = v;
 this.edges = 0;
 this.adj = [];
 for(var i = 0; i< this.vertices; i++){
  this.adj[i]= [];
  this.adj[i].push("");
 }
 this.addEdge = addEdge;
 this.showGraph = showGraph;
 this.marked = [];
 for(var i = 0; i< this.vertices; i++){
  this.marked[i]=false;
 }
 this.depthFirst = depthFirst;
 this.breadthFirst = breadthFirst;
}


function addEdge(v,w){
 this.adj[v].push(w);
 this.adj[w].push(v);
 this.edges++;
}


function showGraph(){

  for(var  i =0; i<this.vertices; i++){
   print(i+ " -> ") 
   for (var j = 0; j<this.vertices; j++){
     if(this.adj[i][j]!=undefined){
      print(this.adj[i][j]+" ");
     }
   }
   print("<br/>") 
 }
}


function depthFirst(v){
  this.marked[v] = true;
  if(this.adj[v] != undefined){
   print("Visited Vertex : "+ v + " Paths:  " + this.adj[v]);
    print("<br/>");  
  }
  for (var w  = 0; w <this.adj[v].length; w++){
    if(!this.marked[w]){
     this.depthFirst(w);
    }
  }   
}


function breadthFirst(s){

  var que = [];
  this.marked[s] = true;
  que.push(s);
  while(que.length > 0){
    var v = que.shift();
    if(v!= undefined){
      print("Visited Vertex : "+ v + " Paths:  " + this.adj[v]);
      print("<br/>");
    }
     for (var w  = 0; w <this.adj[v].length; w++){
       if(!this.marked[w]){
         this.marked[w] =true;
         que.push(w);
       }
   }
   

 }
}



function print(value){
 document.getElementById('print').innerHTML += value;
}




//////////Manual Test Graph

g = new Graph(5); 
g.addEdge(0,1); 
g.addEdge(0,2); 
g.addEdge(1,3); 
g.addEdge(2,4);
g.showGraph();
g.breadthFirst(0);
