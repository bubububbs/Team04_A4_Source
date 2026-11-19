const items = 
[{"title": "1984", "author": ["George Orwell"], "section": ["Fiction", "test"], "type": "Book", "cost": 4.53, "stock": 2, "location": "Riverside South"}, {"title": "1984", "author": ["George Orwell"], "section": ["Fiction"], "type": "Book", "cost": 8.51, "stock": 3, "location": "Stittsville"}, {"title": "Percy Jackson and the Lightning Thief", "author": ["Rick Riordan"], "section": ["Fiction"], "type": "Book", "cost": 4.73, "stock": 1, "location": "Riverside South"}, {"title": "Percy Jackson and the Lightning Thief", "author": ["Rick Riordan"], "section": ["Fiction"], "type": "Book", "cost": 9.9, "stock": 2, "location": "Stittsville"}, {"title": "The Martian", "author": ["Andy Weir"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 4.61, "stock": 3, "location": "Stittsville"}, {"title": "The Three-Body Problem", "author": ["Liu Cixin"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 6.47, "stock": 2, "location": "Stittsville"}, {"title": "Star Wars - A New Hope", "author": [""], "section": ["Fiction", "Science Fiction"], "type": "DVD", "cost": 9.22, "stock": 3, "location": "Riverside South"}];

// [{"title": "title 1", "author": "john doe", "section": [""], "type": "Book", "cost": 9.0, "stock": 3, "location": "Riverside South"}, {"title": "title 2", "author": "john doe", "section": [""], "type": "Book", "cost": 3.35, "stock": 1, "location": "Stittsville"}, {"title": "title 3", "author": "john doe", "section": [""], "type": "Book", "cost": 3.69, "stock": 3, "location": "Riverside South"}, {"title": "title 4", "author": "john doe", "section": [""], "type": "Book", "cost": 6.14, "stock": 2, "location": "Stittsville"}, {"title": "title 5", "author": "john doe", "section": [""], "type": "Book", "cost": 9.64, "stock": 2, "location": "Riverside South"}, {"title": "title 6", "author": "john doe", "section": [""], "type": "Book", "cost": 7.72, "stock": 1, "location": "Stittsville"}, {"title": "title 7", "author": "john doe", "section": [""], "type": "Book", "cost": 5.81, "stock": 3, "location": "Riverside South"}, {"title": "title 8", "author": "john doe", "section": [""], "type": "Book", "cost": 6.78, "stock": 2, "location": "Stittsville"}, {"title": "title 9", "author": "john doe", "section": [""], "type": "Book", "cost": 5.72, "stock": 2, "location": "Riverside South"}, {"title": "title 10", "author": "john doe", "section": [""], "type": "Book", "cost": 3.8, "stock": 1, "location": "Stittsville"}, {"title": "title 11", "author": "john doe", "section": [""], "type": "Book", "cost": 5.69, "stock": 3, "location": "Riverside South"}, {"title": "title 12", "author": "john doe", "section": [""], "type": "Book", "cost": 4.41, "stock": 1, "location": "Stittsville"}, {"title": "title 13", "author": "john doe", "section": [""], "type": "Book", "cost": 9.79, "stock": 1, "location": "Riverside South"}, {"title": "title 14", "author": "john doe", "section": [""], "type": "Book", "cost": 3.27, "stock": 2, "location": "Stittsville"}, {"title": "title 15", "author": "john doe", "section": [""], "type": "Book", "cost": 5.49, "stock": 3, "location": "Riverside South"}, {"title": "title 16", "author": "john doe", "section": [""], "type": "Book", "cost": 3.55, "stock": 2, "location": "Stittsville"}, {"title": "title 17", "author": "john doe", "section": [""], "type": "Book", "cost": 6.54, "stock": 1, "location": "Riverside South"}, {"title": "title 18", "author": "john doe", "section": [""], "type": "Book", "cost": 5.85, "stock": 2, "location": "Stittsville"}, {"title": "title 19", "author": "john doe", "section": [""], "type": "Book", "cost": 7.76, "stock": 3, "location": "Riverside South"}, {"title": "title 20", "author": "john doe", "section": [""], "type": "Book", "cost": 6.32, "stock": 2, "location": "Stittsville"}, {"title": "title 21", "author": "john doe", "section": [""], "type": "Book", "cost": 9.35, "stock": 3, "location": "Riverside South"}, {"title": "title 22", "author": "john doe", "section": [""], "type": "Book", "cost": 5.48, "stock": 3, "location": "Stittsville"}, {"title": "title 23", "author": "john doe", "section": [""], "type": "Book", "cost": 5.52, "stock": 3, "location": "Riverside South"}, {"title": "title 24", "author": "john doe", "section": [""], "type": "Book", "cost": 7.12, "stock": 3, "location": "Stittsville"}, {"title": "title 25", "author": "john doe", "section": [""], "type": "Book", "cost": 8.26, "stock": 1, "location": "Riverside South"}, {"title": "title 26", "author": "john doe", "section": [""], "type": "Book", "cost": 7.45, "stock": 2, "location": "Stittsville"}, {"title": "title 27", "author": "john doe", "section": [""], "type": "Book", "cost": 4.84, "stock": 3, "location": "Riverside South"}, {"title": "title 28", "author": "john doe", "section": [""], "type": "Book", "cost": 6.79, "stock": 2, "location": "Stittsville"}, {"title": "title 29", "author": "john doe", "section": [""], "type": "Book", "cost": 9.65, "stock": 3, "location": "Riverside South"}, {"title": "title 30", "author": "john doe", "section": [""], "type": "Book", "cost": 8.12, "stock": 3, "location": "Stittsville"}, {"title": "title 31", "author": "john doe", "section": [""], "type": "Book", "cost": 3.35, "stock": 1, "location": "Riverside South"}, {"title": "title 32", "author": "john doe", "section": [""], "type": "Book", "cost": 9.21, "stock": 1, "location": "Stittsville"}, {"title": "title 33", "author": "john doe", "section": [""], "type": "Book", "cost": 6.74, "stock": 3, "location": "Riverside South"}, {"title": "title 34", "author": "john doe", "section": [""], "type": "Book", "cost": 4.81, "stock": 1, "location": "Stittsville"}, {"title": "title 35", "author": "john doe", "section": [""], "type": "Book", "cost": 9.02, "stock": 1, "location": "Riverside South"}, {"title": "title 36", "author": "john doe", "section": [""], "type": "Book", "cost": 9.37, "stock": 1, "location": "Stittsville"}, {"title": "title 37", "author": "john doe", "section": [""], "type": "Book", "cost": 8.55, "stock": 1, "location": "Riverside South"}, {"title": "title 38", "author": "john doe", "section": [""], "type": "Book", "cost": 6.42, "stock": 1, "location": "Stittsville"}, {"title": "title 39", "author": "john doe", "section": [""], "type": "Book", "cost": 6.6, "stock": 1, "location": "Riverside South"}, {"title": "title 40", "author": "john doe", "section": [""], "type": "Book", "cost": 8.78, "stock": 3, "location": "Stittsville"}, {"title": "title 41", "author": "john doe", "section": [""], "type": "Book", "cost": 7.78, "stock": 3, "location": "Riverside South"}, {"title": "title 42", "author": "john doe", "section": [""], "type": "Book", "cost": 9.43, "stock": 2, "location": "Stittsville"}, {"title": "title 43", "author": "john doe", "section": [""], "type": "Book", "cost": 3.3, "stock": 3, "location": "Riverside South"}, {"title": "title 44", "author": "john doe", "section": [""], "type": "Book", "cost": 7.34, "stock": 3, "location": "Stittsville"}, {"title": "title 45", "author": "john doe", "section": [""], "type": "Book", "cost": 6.95, "stock": 2, "location": "Riverside South"}, {"title": "title 46", "author": "john doe", "section": [""], "type": "Book", "cost": 7.93, "stock": 2, "location": "Stittsville"}, {"title": "title 47", "author": "john doe", "section": [""], "type": "Book", "cost": 8.12, "stock": 2, "location": "Riverside South"}, {"title": "title 48", "author": "john doe", "section": [""], "type": "Book", "cost": 6.37, "stock": 2, "location": "Stittsville"}, {"title": "title 49", "author": "john doe", "section": [""], "type": "Book", "cost": 5.69, "stock": 3, "location": "Riverside South"}, {"title": "title 50", "author": "john doe", "section": [""], "type": "Book", "cost": 3.95, "stock": 3, "location": "Stittsville"}, {"title": "title 51", "author": "john doe", "section": [""], "type": "Book", "cost": 9.13, "stock": 3, "location": "Riverside South"}, {"title": "title 52", "author": "john doe", "section": [""], "type": "Book", "cost": 3.57, "stock": 2, "location": "Stittsville"}, {"title": "title 53", "author": "john doe", "section": [""], "type": "Book", "cost": 9.05, "stock": 1, "location": "Riverside South"}, {"title": "title 54", "author": "john doe", "section": [""], "type": "Book", "cost": 5.78, "stock": 3, "location": "Stittsville"}, {"title": "title 55", "author": "john doe", "section": [""], "type": "Book", "cost": 4.04, "stock": 3, "location": "Riverside South"}, {"title": "title 56", "author": "john doe", "section": [""], "type": "Book", "cost": 7.32, "stock": 3, "location": "Stittsville"}, {"title": "title 57", "author": "john doe", "section": [""], "type": "Book", "cost": 3.95, "stock": 1, "location": "Riverside South"}, {"title": "title 58", "author": "john doe", "section": [""], "type": "Book", "cost": 5.02, "stock": 1, "location": "Stittsville"}, {"title": "title 59", "author": "john doe", "section": [""], "type": "Book", "cost": 7.0, "stock": 3, "location": "Riverside South"}, {"title": "title 60", "author": "john doe", "section": [""], "type": "Book", "cost": 6.72, "stock": 2, "location": "Stittsville"}, {"title": "title 61", "author": "john doe", "section": [""], "type": "Book", "cost": 3.77, "stock": 1, "location": "Riverside South"}, {"title": "title 62", "author": "john doe", "section": [""], "type": "Book", "cost": 6.64, "stock": 1, "location": "Stittsville"}, {"title": "title 63", "author": "john doe", "section": [""], "type": "Book", "cost": 8.54, "stock": 3, "location": "Riverside South"}, {"title": "title 64", "author": "john doe", "section": [""], "type": "Book", "cost": 9.07, "stock": 3, "location": "Stittsville"}, {"title": "title 65", "author": "john doe", "section": [""], "type": "Book", "cost": 9.0, "stock": 3, "location": "Riverside South"}, {"title": "title 66", "author": "john doe", "section": [""], "type": "Book", "cost": 7.9, "stock": 2, "location": "Stittsville"}, {"title": "title 67", "author": "john doe", "section": [""], "type": "Book", "cost": 4.66, "stock": 3, "location": "Riverside South"}, {"title": "title 68", "author": "john doe", "section": [""], "type": "Book", "cost": 9.27, "stock": 1, "location": "Stittsville"}, {"title": "title 69", "author": "john doe", "section": [""], "type": "Book", "cost": 4.4, "stock": 2, "location": "Riverside South"}, {"title": "title 70", "author": "john doe", "section": [""], "type": "Book", "cost": 6.64, "stock": 1, "location": "Stittsville"}, {"title": "title 71", "author": "john doe", "section": [""], "type": "Book", "cost": 7.38, "stock": 2, "location": "Riverside South"}, {"title": "title 72", "author": "john doe", "section": [""], "type": "Book", "cost": 7.36, "stock": 1, "location": "Stittsville"}, {"title": "title 73", "author": "john doe", "section": [""], "type": "Book", "cost": 9.37, "stock": 3, "location": "Riverside South"}, {"title": "title 74", "author": "john doe", "section": [""], "type": "Book", "cost": 6.48, "stock": 1, "location": "Stittsville"}, {"title": "title 75", "author": "john doe", "section": [""], "type": "Book", "cost": 6.18, "stock": 2, "location": "Riverside South"}, {"title": "title 76", "author": "john doe", "section": [""], "type": "Book", "cost": 9.21, "stock": 2, "location": "Stittsville"}, {"title": "title 77", "author": "john doe", "section": [""], "type": "Book", "cost": 7.53, "stock": 3, "location": "Riverside South"}, {"title": "title 78", "author": "john doe", "section": [""], "type": "Book", "cost": 9.56, "stock": 3, "location": "Stittsville"}, {"title": "title 79", "author": "john doe", "section": [""], "type": "Book", "cost": 5.53, "stock": 2, "location": "Riverside South"}, {"title": "title 80", "author": "john doe", "section": [""], "type": "Book", "cost": 5.41, "stock": 3, "location": "Stittsville"}, {"title": "title 81", "author": "john doe", "section": [""], "type": "Book", "cost": 5.19, "stock": 1, "location": "Riverside South"}, {"title": "title 82", "author": "john doe", "section": [""], "type": "Book", "cost": 5.96, "stock": 2, "location": "Stittsville"}, {"title": "title 83", "author": "john doe", "section": [""], "type": "Book", "cost": 4.27, "stock": 1, "location": "Riverside South"}, {"title": "title 84", "author": "john doe", "section": [""], "type": "Book", "cost": 7.48, "stock": 3, "location": "Stittsville"}, {"title": "title 85", "author": "john doe", "section": [""], "type": "Book", "cost": 9.08, "stock": 2, "location": "Riverside South"}, {"title": "title 86", "author": "john doe", "section": [""], "type": "Book", "cost": 6.87, "stock": 1, "location": "Stittsville"}, {"title": "title 87", "author": "john doe", "section": [""], "type": "Book", "cost": 9.73, "stock": 3, "location": "Riverside South"}, {"title": "title 88", "author": "john doe", "section": [""], "type": "Book", "cost": 7.83, "stock": 2, "location": "Stittsville"}, {"title": "title 89", "author": "john doe", "section": [""], "type": "Book", "cost": 5.35, "stock": 2, "location": "Riverside South"}, {"title": "title 90", "author": "john doe", "section": [""], "type": "Book", "cost": 9.45, "stock": 3, "location": "Stittsville"}, {"title": "title 91", "author": "john doe", "section": [""], "type": "Book", "cost": 6.28, "stock": 1, "location": "Riverside South"}, {"title": "title 92", "author": "john doe", "section": [""], "type": "Book", "cost": 8.35, "stock": 2, "location": "Stittsville"}, {"title": "title 93", "author": "john doe", "section": [""], "type": "Book", "cost": 9.08, "stock": 1, "location": "Riverside South"}, {"title": "title 94", "author": "john doe", "section": [""], "type": "Book", "cost": 3.7, "stock": 3, "location": "Stittsville"}, {"title": "title 95", "author": "john doe", "section": [""], "type": "Book", "cost": 7.66, "stock": 3, "location": "Riverside South"}, {"title": "title 96", "author": "john doe", "section": [""], "type": "Book", "cost": 6.37, "stock": 1, "location": "Stittsville"}, {"title": "title 97", "author": "john doe", "section": [""], "type": "Book", "cost": 4.95, "stock": 3, "location": "Riverside South"}, {"title": "title 98", "author": "john doe", "section": [""], "type": "Book", "cost": 8.65, "stock": 1, "location": "Stittsville"}, {"title": "title 99", "author": "john doe", "section": [""], "type": "Book", "cost": 6.6, "stock": 3, "location": "Riverside South"}, {"title": "title 100", "author": "john doe", "section": [""], "type": "Book", "cost": 8.32, "stock": 1, "location": "Stittsville"}];
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
					let id = li.children[0].children[0].checked ? child.id : "";
					update(0, id);
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

function searchFilters(unhide = true) {
	let search = strip(document.getElementById("filterSearch").value.toLowerCase());
	let filterUnhidden = false;
	for (let li of document.getElementById("sectionList").children) {
		if (li.hidden && !unhide) {
			continue;
		}
		li.hidden = !strip(li.children[0].textContent).toLowerCase().includes(search);
		if (!li.hidden) {filterUnhidden = true};
	}
	document.getElementById("noSectionsFound").hidden = filterUnhidden;
}

function strip(text) {
	return text.trim().replace("- ", "").replace("-", " ").replace(/[^a-zA-Z0-9 ]/g, "");
}

function getFirstAuthorName(item) {
	if (item.author.length === 0) {
		return "";
	}
	let name = item.author[0].split(" ");
	name = name[name.length - 1];
	return name;
}

function createItem(item) {
	let li = document.createElement("li");
	li.className = "item";
	// add defaults for missing authors
	li.textContent = item.title + "\n" + item.author +
		"\n" + item.type + "\n" + item.section + "\n" + item.location + 
		"\n$" + item.cost.toFixed(2) + "\n" + item.stock + " in stock";
	return li;
}

function update(page = 0, checkboxSectionId = "") {
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
	document.getElementById("filtersApplied").textContent =
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
		if (params.get("search") !== null) {
			let regex = RegExp(strip(params.get("search")), "i");
			let found = regex.test(strip(item.title));
			if (!found) {
				for (let author of item.author) {
					if (regex.test(strip(author))) {
						found = true;
						break;
					}
				}
			}
			if (!found) {continue;}
		}
		filtered.push(item);
	}

	document.getElementById("numberFound").textContent = filtered.length + " results found";

	filtered = filtered.sort((a, b) => {
		let comp1, comp2, sign;
		switch (document.getElementById("sortDropdown").value) {
			case "titleAZ":
				comp1 = a.title;
				comp2 = b.title;
				sign = 1;
				break;
			case "titleZA":
				comp1 = a.title;
				comp2 = b.title;
				sign = -1;
				break;
			case "authorAZ":
				comp1 = getFirstAuthorName(a);
				comp2 = getFirstAuthorName(b);
				sign = 1;
				break;
			case "authorZA":
				comp1 = getFirstAuthorName(a);
				comp2 = getFirstAuthorName(b);
				sign = -1;
				break;
			case "priceLH":
				comp1 = a.cost;
				comp2 = b.cost;
				sign = 1;
				break;
			case "priceHL":
				comp1 = a.cost;
				comp2 = b.cost;
				sign = -1;
				break;
		}
		if (typeof comp1 === "string") {
			return strip(comp1).localeCompare(strip(comp2))*sign;
		} else {
			return (comp1 - comp2)*sign;
		}
	});

	let counts = {};
	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL") {
			for (let li of child.children) {
				counts[li.children[0].textContent.trim()] = 0;
			}
		}
	}

	let resultsList = document.getElementById("resultsList");
	resultsList.innerHTML = "";
	for (item of filtered) {
		counts[item.location]++;
		counts[item.type]++;
		for (section of item.section) {counts[section]++;}
		resultsList.appendChild(createItem(item));
	}

	document.getElementById("noResultsFound").hidden = filtered.length != 0;
	let feedback = [];
	if (params.get("search") !== null) { feedback.push("a query of \"" + params.get("search").trim() + "\"");}
	if (filters.location.length != 0) { feedback.push("a location of " + filters.location.join(" or "));}
	if (filters.type.length != 0) { feedback.push("an item type of " + filters.type.join(" or "));}
	if (filters.section.length != 0) { feedback.push("a section of " + filters.section.join(" or "));}
	document.getElementById("noResultsFeedback").textContent = "No items were found matching\n" + feedback.join(" and\n") + 
		"\n\nTry changing your search query or removing some filters";

	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL" && checkboxSectionId !== child.id) {
			for (let li of child.children) {
				li.children[1].textContent = counts[li.children[0].textContent.trim()]
				if (child.id === "sectionList") {
					li.hidden = counts[li.children[0].textContent.trim()] === 0;
				}
			}
		}
	}
	searchFilters(false);

	// update and connect the page navigation buttons
}

function init() {
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
		if (section === "") {continue; }
		let li = document.createElement("li");
		li.innerHTML = "<label><input type=\"checkbox\">" + section + "</label><span class=\"filterCount\"></span>";
		sectionList.appendChild(li);
	}

	document.getElementById("clearFilters").addEventListener("click", clearFilters);
	document.getElementById("topButton").addEventListener("click", () => {
		window.scrollTo(0, 0);
	});
	document.getElementById("sortDropdown").addEventListener("change", update);

	document.getElementById("filterSearch").addEventListener("change", searchFilters);
	document.getElementById("filterSearch").addEventListener("keydown", (e) => {
		if (e.key === "Enter") {searchFilters();}});
	document.getElementById("filterImg").addEventListener("click", searchFilters);

	addClickEvents();
	update();
}