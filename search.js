const itemsPerPage = 17;
const numberButtons = 5;

const items = 
// [{"title": "1984", "author": ["George Orwell"], "section": ["Fiction"], "type": "Book", "cost": 6.26, "stock": 1, "location": "Stittsville"}, {"title": "Percy Jackson and the Olympians - The Lightning Thief", "author": ["Rick Riordan"], "section": ["Fiction"], "type": "Book", "cost": 9.26, "stock": 2, "location": "Riverside South"}, {"title": "Percy Jackson and the Olympians - The Lightning Thief", "author": ["Rick Riordan"], "section": ["Fiction"], "type": "Book", "cost": 4.08, "stock": 2, "location": "Stittsville"}, {"title": "The Martian", "author": ["Andy Weir"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 4.01, "stock": 2, "location": "Riverside South"}, {"title": "The Martian", "author": ["Andy Weir"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 9.96, "stock": 3, "location": "Stittsville"}, {"title": "The Three-Body Problem", "author": ["Liu Cixin"], "section": ["Fiction", "Science Fiction"], "type": "Book", "cost": 8.57, "stock": 1, "location": "Riverside South"}, {"title": "Star Wars - A New Hope", "author": [""], "section": ["Fiction", "Science Fiction"], "type": "DVD", "cost": 4.16, "stock": 3, "location": "Stittsville"}];

[{"title": "title 1", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.23, "stock": 3, "location": "Riverside South"}, {"title": "title 2", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.74, "stock": 3, "location": "Stittsville"}, {"title": "title 3", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.25, "stock": 2, "location": "Riverside South"}, {"title": "title 4", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.04, "stock": 1, "location": "Stittsville"}, {"title": "title 5", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.61, "stock": 1, "location": "Riverside South"}, {"title": "title 6", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.42, "stock": 1, "location": "Stittsville"}, {"title": "title 7", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.22, "stock": 2, "location": "Riverside South"}, {"title": "title 8", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.58, "stock": 3, "location": "Stittsville"}, {"title": "title 9", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.63, "stock": 1, "location": "Riverside South"}, {"title": "title 10", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.46, "stock": 3, "location": "Stittsville"}, {"title": "title 11", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.51, "stock": 3, "location": "Riverside South"}, {"title": "title 12", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.16, "stock": 3, "location": "Stittsville"}, {"title": "title 13", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.82, "stock": 1, "location": "Riverside South"}, {"title": "title 14", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.55, "stock": 2, "location": "Stittsville"}, {"title": "title 15", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.45, "stock": 2, "location": "Riverside South"}, {"title": "title 16", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.33, "stock": 1, "location": "Stittsville"}, {"title": "title 17", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.2, "stock": 1, "location": "Riverside South"}, {"title": "title 18", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.93, "stock": 2, "location": "Stittsville"}, {"title": "title 19", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.41, "stock": 3, "location": "Riverside South"}, {"title": "title 20", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.9, "stock": 3, "location": "Stittsville"}, {"title": "title 21", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.86, "stock": 3, "location": "Riverside South"}, {"title": "title 22", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.07, "stock": 2, "location": "Stittsville"}, {"title": "title 23", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.57, "stock": 3, "location": "Riverside South"}, {"title": "title 24", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.01, "stock": 2, "location": "Stittsville"}, {"title": "title 25", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.8, "stock": 1, "location": "Riverside South"}, {"title": "title 26", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.49, "stock": 2, "location": "Stittsville"}, {"title": "title 27", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.77, "stock": 3, "location": "Riverside South"}, {"title": "title 28", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.13, "stock": 1, "location": "Stittsville"}, {"title": "title 29", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.02, "stock": 1, "location": "Riverside South"}, {"title": "title 30", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.26, "stock": 3, "location": "Stittsville"}, {"title": "title 31", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.92, "stock": 2, "location": "Riverside South"}, {"title": "title 32", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.31, "stock": 3, "location": "Stittsville"}, {"title": "title 33", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.73, "stock": 2, "location": "Riverside South"}, {"title": "title 34", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.98, "stock": 2, "location": "Stittsville"}, {"title": "title 35", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.15, "stock": 2, "location": "Riverside South"}, {"title": "title 36", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.13, "stock": 3, "location": "Stittsville"}, {"title": "title 37", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.06, "stock": 1, "location": "Riverside South"}, {"title": "title 38", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.23, "stock": 2, "location": "Stittsville"}, {"title": "title 39", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.73, "stock": 1, "location": "Riverside South"}, {"title": "title 40", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.05, "stock": 2, "location": "Stittsville"}, {"title": "title 41", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.39, "stock": 3, "location": "Riverside South"}, {"title": "title 42", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.13, "stock": 1, "location": "Stittsville"}, {"title": "title 43", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.7, "stock": 3, "location": "Riverside South"}, {"title": "title 44", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.84, "stock": 3, "location": "Stittsville"}, {"title": "title 45", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.73, "stock": 3, "location": "Riverside South"}, {"title": "title 46", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.67, "stock": 3, "location": "Stittsville"}, {"title": "title 47", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.87, "stock": 2, "location": "Riverside South"}, {"title": "title 48", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.93, "stock": 2, "location": "Stittsville"}, {"title": "title 49", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.75, "stock": 1, "location": "Riverside South"}, {"title": "title 50", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.91, "stock": 1, "location": "Stittsville"}, {"title": "title 51", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.51, "stock": 2, "location": "Riverside South"}, {"title": "title 52", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.37, "stock": 1, "location": "Stittsville"}, {"title": "title 53", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.65, "stock": 3, "location": "Riverside South"}, {"title": "title 54", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.26, "stock": 1, "location": "Stittsville"}, {"title": "title 55", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.88, "stock": 3, "location": "Riverside South"}, {"title": "title 56", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.97, "stock": 1, "location": "Stittsville"}, {"title": "title 57", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.72, "stock": 1, "location": "Riverside South"}, {"title": "title 58", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.76, "stock": 2, "location": "Stittsville"}, {"title": "title 59", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.25, "stock": 1, "location": "Riverside South"}, {"title": "title 60", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.87, "stock": 3, "location": "Stittsville"}, {"title": "title 61", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.98, "stock": 2, "location": "Riverside South"}, {"title": "title 62", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.28, "stock": 3, "location": "Stittsville"}, {"title": "title 63", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.67, "stock": 2, "location": "Riverside South"}, {"title": "title 64", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.39, "stock": 1, "location": "Stittsville"}, {"title": "title 65", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.89, "stock": 2, "location": "Riverside South"}, {"title": "title 66", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.78, "stock": 2, "location": "Stittsville"}, {"title": "title 67", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.27, "stock": 1, "location": "Riverside South"}, {"title": "title 68", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.29, "stock": 2, "location": "Stittsville"}, {"title": "title 69", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.81, "stock": 2, "location": "Riverside South"}, {"title": "title 70", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.43, "stock": 3, "location": "Stittsville"}, {"title": "title 71", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.59, "stock": 3, "location": "Riverside South"}, {"title": "title 72", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.32, "stock": 2, "location": "Stittsville"}, {"title": "title 73", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.01, "stock": 3, "location": "Riverside South"}, {"title": "title 74", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.29, "stock": 1, "location": "Stittsville"}, {"title": "title 75", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.78, "stock": 1, "location": "Riverside South"}, {"title": "title 76", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.63, "stock": 1, "location": "Stittsville"}, {"title": "title 77", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.33, "stock": 3, "location": "Riverside South"}, {"title": "title 78", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.04, "stock": 2, "location": "Stittsville"}, {"title": "title 79", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.5, "stock": 2, "location": "Riverside South"}, {"title": "title 80", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.43, "stock": 1, "location": "Stittsville"}, {"title": "title 81", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.34, "stock": 1, "location": "Riverside South"}, {"title": "title 82", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.9, "stock": 1, "location": "Stittsville"}, {"title": "title 83", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.22, "stock": 1, "location": "Riverside South"}, {"title": "title 84", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.76, "stock": 3, "location": "Stittsville"}, {"title": "title 85", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.21, "stock": 1, "location": "Riverside South"}, {"title": "title 86", "author": ["john doe"], "section": [""], "type": "Book", "cost": 3.01, "stock": 3, "location": "Stittsville"}, {"title": "title 87", "author": ["john doe"], "section": [""], "type": "Book", "cost": 8.15, "stock": 1, "location": "Riverside South"}, {"title": "title 88", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.39, "stock": 1, "location": "Stittsville"}, {"title": "title 89", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.33, "stock": 1, "location": "Riverside South"}, {"title": "title 90", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.56, "stock": 3, "location": "Stittsville"}, {"title": "title 91", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.73, "stock": 3, "location": "Riverside South"}, {"title": "title 92", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.46, "stock": 2, "location": "Stittsville"}, {"title": "title 93", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.99, "stock": 2, "location": "Riverside South"}, {"title": "title 94", "author": ["john doe"], "section": [""], "type": "Book", "cost": 5.74, "stock": 1, "location": "Stittsville"}, {"title": "title 95", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.95, "stock": 3, "location": "Riverside South"}, {"title": "title 96", "author": ["john doe"], "section": [""], "type": "Book", "cost": 9.17, "stock": 1, "location": "Stittsville"}, {"title": "title 97", "author": ["john doe"], "section": [""], "type": "Book", "cost": 6.66, "stock": 2, "location": "Riverside South"}, {"title": "title 98", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.11, "stock": 2, "location": "Stittsville"}, {"title": "title 99", "author": ["john doe"], "section": [""], "type": "Book", "cost": 7.14, "stock": 1, "location": "Riverside South"}, {"title": "title 100", "author": ["john doe"], "section": [""], "type": "Book", "cost": 4.31, "stock": 3, "location": "Stittsville"}]
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
					update(1, id);
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

	let img = document.createElement("img");
	img.className = "itemImg";
	img.alt = "no image found";
	img.src = "./noImg.png";
	li.appendChild(img);

	let info = document.createElement("div");
	info.className = "itemText";

	let title = document.createElement("h2");
	title.className = "itemTitle";
	title.textContent = item.title;
	info.appendChild(title);

	let author = document.createElement("span");
	author.className = "itemAuthor";
	if (item.author[0] === "") {
		author.textContent = "by nan";
	} else {
		author.textContent = "by " + item.author.join(", ");
	}
	info.appendChild(author);

	let info2 = document.createElement("div");
	info2.classList.add("center", "itemDetails");

	let price = document.createElement("span");
	price.className = "itemPrice";
	price.textContent = "$" + item.cost.toFixed(2);
	info2.appendChild(price);

	let stock = document.createElement("span");
	stock.className = "itemStock";
	stock.textContent = item.stock + " in stock";
	info2.appendChild(stock);

	let location = document.createElement("span");
	location.className = "itemLocation";
	location.textContent = "📍 " + item.location;
	info2.appendChild(location);

	let type = document.createElement("span");
	type.className = "itemType";
	type.textContent = item.type;
	info2.appendChild(type);

	info.appendChild(info2);
	li.appendChild(info);
	return li;
}

function createPageButton(value, page, isCurrent = false){
	let button = document.createElement("input");
	button.className = "pageButton";
	button.type = "button";
	button.value = value;
	if (isCurrent) {button.classList.add("emphasize"); }
	button.addEventListener("click", () => {update(page); });
	return button;
}

function update(pageNum = 1, checkboxSectionId = "") {
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
			case "titleAZ":
			default:
				comp1 = a.title;
				comp2 = b.title;
				sign = 1;
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
	for ([index, item] of filtered.entries()) {
		counts[item.location]++;
		counts[item.type]++;
		for (section of item.section) {counts[section]++;}

		if ((pageNum-1)*itemsPerPage <= index && index < pageNum*itemsPerPage) {
			resultsList.appendChild(createItem(item));
		}
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

	let pageList = document.getElementById("pageList");
	let pageCount = Math.ceil(filtered.length/itemsPerPage)
	pageList.innerHTML = "";
	if (filtered.length == 0) {return; }
	pageList.appendChild(createPageButton("<<", 1));
	pageList.appendChild(createPageButton("<", Math.max(pageNum - 1, 1)));
	if (pageCount <= numberButtons) {
		for (let i = 1; i <= pageCount; i++) {
			pageList.appendChild(createPageButton(i, i, i == pageNum));
		}
	} else {
		let startIndex = Math.max(1, pageNum - Math.floor(numberButtons/2));
		if (startIndex + numberButtons > pageCount) {startIndex = pageCount - numberButtons + 1; }
		for (let i = 0; i < numberButtons; i++) {
			pageList.appendChild(createPageButton(startIndex+i, startIndex+i, (startIndex+i) == pageNum));
		}
	}
	pageList.appendChild(createPageButton(">", Math.min(pageNum + 1, pageCount)));
	pageList.appendChild(createPageButton(">>", pageCount));
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
	document.getElementById("sortDropdown").addEventListener("change", () => {update(); });

	document.getElementById("filterSearch").addEventListener("change", searchFilters);
	document.getElementById("filterSearch").addEventListener("keydown", (e) => {
		if (e.key === "Enter") {searchFilters();}});
	document.getElementById("filterImg").addEventListener("click", searchFilters);

	addClickEvents();
	update();
}