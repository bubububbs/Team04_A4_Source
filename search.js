function clearFilters() {
	
}

function update() {
	let params = new URLSearchParams(document.location.search);
	console.log(params);
	if (params.get("search") !== null) {document.getElementById("search").value = params.get("search");}
}

function init() {
	document.getElementById("clearFilters").addEventListener("click", clearFilters);
	// add a thing to make each list item click connect to its checkbox
	update();
}