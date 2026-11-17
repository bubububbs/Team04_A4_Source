const items = 
[{"title": "1984", "authors": ["George Orwell"], "sections": ["Fiction"], "type": "Book", "cost": 9.22, "stock": 2, "location": "Riverside South"}, {"title": "1984", "authors": ["George Orwell"], "sections": ["Fiction"], "type": "Book", "cost": 4.35, "stock": 1, "location": "Stittsville"}, {"title": "Farenheit 451", "authors": ["Ray Bradbury"], "sections": ["Fiction"], "type": "Book", "cost": 5.19, "stock": 1, "location": "Stittsville"}, {"title": "Percy Jackson and the Lightning Thief", "authors": ["Rick Riordan"], "sections": ["Fiction", "Children"], "type": "Book", "cost": 3.18, "stock": 1}, {"title": "The Martian", "authors": ["Andy Weir"], "sections": ["Fiction", "Science Fiction"], "type": "Book", "cost": 6.21, "stock": 1, "location": "Riverside South"}, {"title": "The Martian", "authors": ["Andy Weir"], "sections": ["Fiction", "Science Fiction"], "type": "Book", "cost": 5.49, "stock": 3, "location": "Stittsville"}, {"title": "The Three-Body Problem", "authors": ["Liu Cixin"], "sections": ["Fiction", "Science Fiction"], "type": "Book", "cost": 5.37, "stock": 1, "location": "Stittsville"}, {"title": "Star Wars - A New Hope", "authors": [""], "sections": ["Fiction", "Science Fiction"], "type": "DVD", "cost": 8.5, "stock": 2, "location": "Riverside South"}, {"title": "Star Wars - A New Hope", "authors": [""], "sections": ["Fiction", "Science Fiction"], "type": "DVD", "cost": 9.74, "stock": 3, "location": "Stittsville"}]
;
// i forgot you cant read local files so im leaving this here for now

function addClickEvents() {
	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL") {
			for (let li of child.children) {
				li.addEventListener("click", (e) => {
					if (e.target.nodeName !== "INPUT") {
						li.firstChild.checked = !li.firstChild.checked;
					}
					update();
				});
			}
		}
	}
}

function clearFilters() {
	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL") {
			for (let li of child.children) {
				li.firstChild.checked = false;
			}
		}
	}
	update();
}

function createItem(item) {
	
}

function update(page = 0) {
	let params = new URLSearchParams(document.location.search);
	if (params.get("search") !== null) {document.getElementById("search").value = params.get("search");}

	// collect the checkboxes
	// update filtersAppliedLabel

	let filtered = [];
	// do the search
	// sort by the dropdown

	// update numberFoundLabel

	// update the filter counts
	// hide/unhide filters with 0?

	// add items into resultsList with class=result

	// update and connect the page navigation buttons
}

function init() {
	console.log(items);

	document.getElementById("clearFilters").addEventListener("click", clearFilters);

	// add the section filters
	let sections = new Set();
	for (let item of items) {
		for (let section of item.sections) {
			sections.add(section);
		}
	}
	let sectionList = document.getElementById("sectionList");
	sectionList.innerHTML = "";
	for (let section of Array.from(sections).sort()) {
		let li = document.createElement("li");
		li.innerHTML = "<input type=\"checkbox\">" + section + "<span class=\"filterCount\">12</span>"
		sectionList.appendChild(li);
	}

	addClickEvents();
	update();
}