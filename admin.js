function logout(){
localStorage.removeItem("password")
window.location.href="pass.html"

}




(function() {



		log(); 
		function log(){ 
                
		        var b = localStorage.getItem("password") 	
			if( b === null){
                        window.location.href="pass.html"

                
			} 
			else if(b == "true")
			{


		  
			}
                        
                        else 
                        {
                         
                        window.location.href="pass.html"

                        }

			}
		}

	)();
