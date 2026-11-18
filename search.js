const items = 
[{"title": "1984", "author": ["George Orwell"], "section": ["Fiction"], "type": "Book", "cost": 4.53, "stock": 2, "location": "Riverside South"}, {"title": "1984", "author": ["George Orwell"], "section": ["Fiction"], "type": "Book", "cost": 8.51, "stock": 3, "location": "Stittsville"}, {"title": "Percy Jackson and the Lightning Thief", "author": ["Rick Riordan"], "section": ["Fiction"], "type": "Book", "cost": 4.73, "stock": 1, "location": "Riverside South"}, {"title": "Percy Jackson and the Lightning Thief", "author": ["Rick Riordan"], "section": ["Fiction"], "type": "Book", "cost": 9.9, "stock": 2, "location": "Stittsville"}, {"title": "The Martian", "author": ["Andy Weir"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 4.61, "stock": 3, "location": "Stittsville"}, {"title": "The Three-Body Problem", "author": ["Liu Cixin"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 6.67, "stock": 2, "location": "Stittsville"}, {"title": "Star Wars - A New Hope", "author": [""], "section": ["Fiction", "Science Fiction"], "type": "DVD", "cost": 9.22, "stock": 3, "location": "Riverside South"}]
;
// i forgot you cant read local files so im leaving this here for now

function addClickEvents() {
	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL") {
			for (let li of child.children) {
				li.addEventListener("click", (e) => {
					// extend click to the white space on rightside
					if (e.target.nodeName === "LI" || e.target.nodeName === "SPAN") {
						li.children[0].children[0].checked = !li.children[0].children[0].checked;
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
				li.children[0].children[0].checked = false;
			}
		}
	}
	update();
}

function createItem(item) {
	
}

function strip(text) {
	return text.trim().replace("- ", "").replace("-", " ").replace(/[^a-zA-Z0-9 ]/g, "");
}

function update(page = 0) {
	let params = new URLSearchParams(document.location.search);
	if (params.get("search") !== null) {document.getElementById("search").value = params.get("search");}

	let filters = {location: [], type: [], section: []};
	for (let li of document.getElementById("locationList").children) {
		if (li.children[0].children[0].checked) {
			filters.location.push(li.children[0].textContent.trim());
		}
	}
	for (let li of document.getElementById("typeList").children) {
		if (li.children[0].children[0].checked) {
			filters.type.push(li.children[0].textContent.trim());
		}
	}
	for (let li of document.getElementById("sectionList").children) {
		if (li.children[0].children[0].checked) {
			filters.section.push(li.children[0].textContent.trim());
		}
	}
	document.getElementById("filtersAppliedLabel").textContent =
		(filters.location.length + filters.type.length + filters.section.length) + " filters applied";

	let filtered = [];
	for (let item of items) {
		if (filters.location.length !== 0 && !filters.location.includes(item.location)) {
			continue;
		}
		if (filters.type.length !== 0 && !filters.type.includes(item.type)) {
			continue;
		}
		if (filters.section.length !== 0) {
			let exit = true;
			for (let section of filters.section) {
				if (item.section.includes(section)) {
					exit = false;
				}
			}
			if (exit) {continue;}
		}
		if (params.get("search") !== null && params.get("search").trim() !== "" &&
				!RegExp(strip(params.get("search")), "i").test(strip(item.title))) {
			continue;
		}
		filtered.push(item);
	}

	document.getElementById("numberFoundLabel").textContent = filtered.length + " results found"

	// sort by the dropdown

	// update the filter counts
	// hide/unhide filters with 0?

	// add items into resultsList with class=result
	let resultsList = document.getElementById("resultsList");
	resultsList.innerHTML = "";
	for (item of filtered) {
		let li = document.createElement("li");
		li.className = "item";
		li.textContent = item.title + "\n" + item.type + "\n" + item.section;
		resultsList.appendChild(li);
	}

	// update and connect the page navigation buttons
}

function init() {
	console.log(items);

	document.getElementById("clearFilters").addEventListener("click", clearFilters);
	document.getElementById("topButton").addEventListener("click", () => {
		window.scrollTo(0, 0);
	})

	// add the section filters
	let sections = new Set();
	for (let item of items) {
		for (let section of item.section) {
			sections.add(section);
		}
	}
	let sectionList = document.getElementById("sectionList");
	sectionList.innerHTML = "";
	for (let section of Array.from(sections).sort()) {
		let li = document.createElement("li");
		li.innerHTML = "<label><input type=\"checkbox\">" + section + "</label><span class=\"filterCount\"></span>";
		sectionList.appendChild(li);
	}

	addClickEvents();
	update();
}