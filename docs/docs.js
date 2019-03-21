function save(form){
	localStorage.setItem("savedItem", form.mainText.value)
}
function load(form){
	form.mainText.value = localStorage.getItem("savedItem")
}
       
	function enter(){
		document.getElementById("mainText").value = localStorage.getItem("savedItem")
		
		}
	enter2();
	function enter2(){
		if(localStorage.getItem("p1Name") != undefined){
			document.getElementById("name").placeholder = localStorage.getItem("p1Name")
			document.getElementById("T").innerHTML = localStorage.getElementById("p1Name")
	}
}
	function saveName(){
		localStorage.setItem("p1Name", document.getElementById("name").value)
		document.getElementById("name").value=""
		enter2();
	}
