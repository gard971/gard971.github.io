function save(form){
	localStorage.setItem("savedItem", form.mainText.value)
}
function load(form){
	form.mainText.value = localStorage.getItem("savedItem")
}
       
	function enter(){
		document.getElementById("mainText").value = localStorage.getItem("savedItem")
	}
window.addEventListener("beforeunload", function (e) {

  (e || window.event).returnValue = null;

});