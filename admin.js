function logout(){
localStorage.removeItem("password")
sessionStorage.removeItem("password")
window.location.href="pass.html"

}




(function() {



		log(); 
		function log(){ 
                
		        var b = localStorage.getItem("password") 
		       
			if(localStorage.getItem("password") == "true" || sessionStorage.getItem("password") == "true" || localStorage.getItem("password") == "true" && sessionStorage.getItem("password") == "true"){
			}
                   
                        
                        else{
				window.location.href="pass.html"
			}
                         
                        window.location.href="pass.html"

                        }

			}
		

	)();
