//////////////////BINARY SEARCH TREE IMPLEMENTATION

/////NODE CLASS

function Node(data, left, right) { 
 this.data = data;
 this.left = left;
 this.right = right;
 this.show = show; 
}

function show() {
 return this.data;
}


/////BINARY SEARCH TREE CLASS

function BST() {
 this.root = null; 
this.print = "";
this.insert = insert; 
this.inOrder = inOrder;
this.preOrder = preOrder;
this.postOrder = postOrder;
this.breadth = breadth;
this.getMin = getMin;
this.getMax = getMax;
this.find = find;
this.remove = remove;
this.removeNode = removeNode;
}




function insert(data){

var n = new Node(data, null,null);

 if(this.root == null){
   this.root = n;
   return;
 }
   var current = this.root;
   while(true){
     if(n.data < current.data){
      if(current.left == null){
          current.left = n;
          break;
       }
       current = current.left;
      }else if( n.data> current.data){
       if(current.right == null){
           current.right = n;
           break;
         }
       current = current.right;
      }    
   }//end while
  

}



function breadth(node){
 var qu= [];
 if(node == null) return;
 qu.push(node);
 while(qu.length > 0){
    var current = qu[0];
   print(current.show() + " ");
   if(current.left!=null) qu.push(current.left);
   if(current.right!=null) qu.push(current.right);
   qu.shift();
  }
}




function inOrder(node) { 
  if (node != null) { 
    inOrder(node.left);
    print(node.show()+ " "); 
    inOrder(node.right);
   }
}


function preOrder(node) { 
  if (node != null) {
    print(node.show()+ " ");  
    preOrder(node.left);
    preOrder(node.right);
   }
}

function postOrder(node) { 
  if (node != null) { 
    postOrder(node.left);
    postOrder(node.right);
    print(node.show()+ " "); 
   }
}


function getSmallest(node){
 var current = node.root;
 while (current.left !=  null){
      current= current.left;
  }
 return current.data;
}



function getMin(){
 var current = this.root;
 while (current.left !=  null){
      current= current.left;
  }
 return current.data;
}




function getMax(){
  var current = this.root;
  while (current.right !=  null){
       current= current.right;
   }
  return current.data;
}



function find(data){
 var current = this.root;
 while (current.data != data){
   if(data < current.data){
      current =  current.left;
   }
   else if (data>current.data){
    current =  current.right;
   }
   if(current==null){
     return null;
   } 
 }
 return current.data;

}





function remove(data){
 root = removeNode(this.root, data);
}

function removeNode(node, data){
 if(node==null){
  return null;
 }
 if(data==node.nata){
  //node has no children
  if(node.left == null && node.right == null){
    return null;
  }
  //node has no left child
  if(node.left ==null){
   return node.right;
  }
  //node has no right child
  if(node.right==null){
   return node.left 
  }
  //node has two children
  var tempNode = getSmallest(node.right);
  node.data = tempNode.data;
  node.right = removeNode(node.right,tempNode.data);
  return node;
 }else if(data < node.data){
  node.left = removeNode(node.left, data);
  return node;
 }else{
  node.right = removeNode(node.right, tempNode.data);
  return node;
 }
}



function print(data){
 document.getElementById("print").innerHTML += data;
}

/// MANUAL TEST 
var nums = new BST();
nums.insert(23); 
nums.insert(45); 
nums.insert(16); 
nums.insert(37); 
nums.insert(3); 
nums.insert(99); 
nums.insert(22); 

print("minimum value is " + nums.getMin() + "<br/>");
print("maximum value is " + nums.getMax() + "<br/>");

print("Find node 23: "+nums.find(23)+ "<br/>");

// 3 16 22 23 37 45 99
print("Inorder traversal: ");
inOrder(nums.root);
print("<br/>");

// 23 16 3 22 45 37 99
print("Preorder traversal: ");
preOrder(nums.root);
print("<br/>");

//3 22 16 37 99 45 23
print("Postorder traversal: ");
postOrder(nums.root);
print("<br/>");

//23 16 45 3 22 37 99 
print("Breadth traversal: ");
breadth(nums.root);
print("<br/>");