////////////Tests Class//////////
function Tests(){

this.assertsEqual = assertsEqual;

}

function assertsEqual(value, expected){

   if (value === expected){
       return true;
   }
   else {
      throw "Value not equal";
   } 
  }
//End  Tests Class



////////// Manual test of Test Class//////

var print = document.getElementById("print");
print.innerHTML = "";
var f = new Stack();
var t = new Tests();

f.push("Hello");
f.push("Booyaka");

var pushed = t.assertsEqual(f.peek(),"Booyak");


print.innerHTML = pushed;