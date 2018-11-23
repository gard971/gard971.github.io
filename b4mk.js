
      
(function(){
var pass = localStorage.getItem("password")
	enter4();
	function enter4(){
	
	
	}


}
)();




(function(){

enter3();
function enter3(){
var index2 = sessionStorage.getItem("index")


if(index2 == "true"){}

else if(index2 == undefined){

window.location.href="index.html"

}






}



})();
      
      
        
        (function() {

      

		




    enter(); 
		function enter(){
    localStorage.removeItem("password")
    if(localStorage.getItem("hack") == undefined){

      localStorage.setItem("hack", "0")
    }

        
                
		        


		  
			}

			}
		

	)();



  (function(){
    var hacker = localStorage.getItem("hack")
                   

enter2();
function enter2(){

  if(hacker == "3"){

     window.location.href="hacker.html"
  }
}

  }

  )();

		
       function check(form)
       {
        var hacker = localStorage.getItem("hack")

       if(form.userid.value == "admin" && (form.pswrd.value) == "28112003"){

       		
               
                window.location.href="admin.html"
                localStorage.setItem("password", "true");
              

       	}

        else if(hacker == "3"){

          window.location.href="hacker.html"
        }

       	else{

            localStorage.setItem('hack',parseInt(localStorage.getItem('hack'))+1);
        		alert("Wrong password/username")
       	} 



       }
       
       
