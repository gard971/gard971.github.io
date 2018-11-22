(function(){
enter2();
function enter2(){

  var Terms2 = localStorage.getItem("Terms")

  if(Terms2 == undefined){

  	window.location.href="Terms.html"
  }
   else if(Terms2 == "true"){

   }
   
   else{

   	window.location.href="Terms.html"
   }
}



}
)();

(function(){


enter();
function enter(){
sessionStorage.setItem("index", "true")
}



}

)();