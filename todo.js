var items = []
getItems();
list();
function Todo(name){
	this.name = name;
	this.completed = "Completed: No";
	this.id = items.length
}
function completeItem(index){
  if(items[index].completed == "Completed: No"){
  items[index].completed = "Completed: Yes"
  save()
}
  else{
  	items[index].completed = "Completed: No"
  	save()
  }
}

function newItem(){
	if(document.getElementById("newItem").value != "" ){
	document.getElementById("err").innerHTML = ""
	var t = new Todo(document.getElementById("newItem").value)
	items.push(t)
	save();
	console.log(items.name)
	document.getElementById("newItem").value = ""	
}
else{
document.getElementById("err").innerHTML = "Please input som text"
}
}
	


function save(){
	var save = JSON.stringify(items)
	localStorage.setItem("localsave", save)
	list();
}
function deleteall(){
	if(confirm("Are you sure you want to delete all items?")){
		items = []
		save()
	}
}

function list(name){
	var html = "";
	console.log(items)
	
	for(var h in items){
     var todo = items[h];
     var id = todo.id
     var name = todo.name; 
     var completed = todo.completed;
     html += "<li onclick='completeItem("+id+")'>"+name+" "+completed+"</li>"
	}

	$("#ul").html(html);
	
}
function getItems(){
	var temp = localStorage.getItem("localsave")
    if(temp){
    	 items = JSON.parse(temp)

    }
    else{
    	items = []
    }
	
}



