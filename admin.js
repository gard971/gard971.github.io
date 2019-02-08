function logout(){
localStorage.removeItem("password")
sessionStorage.removeItem("password")
window.location.href="pass.html"

}




(function() {



		log(); 
		function log(){ 
                
		        var b = localStorage.getItem("password") 
		        var pass1 = localStorage.getItem("password")
			var pass2 = SessionStorage.getItem("password")
			if(pass1 == "true" || pass2 == "true" || pass1 == "true" && pass2 == "true"){
			}
                   
                        
                        else if(pass1 == undefined && pass2 == undefined){
				
				
				window.location.href="pass.html"
			}
	else{
                         
                        window.location.href="pass.html"

                        }

			}
		

	)();
