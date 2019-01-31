(function(){
var pass = localStorage.getItem("password")
	enter4();
	function enter4(){
		if(pass == "true"){
		window.location.href="admin.html"
		
		}
		
		else{}
	
	
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
	
	
	
	
	
	 if(hacker == "3"){

          window.location.href="hacker.html"
        }

       else if(form.kku.value == "admin" && (form.kuu.value) == "28112003"){

       		
               
                window.location.href="admin.html"
                localStorage.setItem("password", "true");
              

       	}
	       
	else if(form.userid.value == "porn" && form.pswrd.value == "porn"){
	alert("The porn site is curently down")
	}

       

       	else{

            localStorage.setItem('hack',parseInt(localStorage.getItem('hack'))+1);
        		alert("Wrong password/username")
       	} 



       }
       
       
