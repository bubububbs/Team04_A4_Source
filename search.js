const ITEMS_PER_PAGE = 10;
const NUMBER_BUTTONS = 5;

function addClickEvents() {
	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL") {
			for (let li of child.children) {
				li.addEventListener("click", (e) => {
					// extend click to the white space on rightside
					if (e.target.nodeName !== "INPUT") {
						li.children[0].children[0].checked = !li.children[0].children[0].checked;
					}
					// prevent double click event
					if (e.target.nodeName === "LABEL") {
						e.preventDefault();
					}
					let id = li.children[0].children[0].checked ? child.id : "";
					update(1, child.id);
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
		if (li.children[0].children[0].checked) {
			li.hidden = false;
			filterUnhidden = true;
			continue;
		}
		if ((li.hidden && !unhide)) {
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
	return name.toLowerCase();
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

	let temp;

	let price = document.createElement("span");
	temp = document.createElement("span");
	price.className = "itemPrice";
	temp.textContent = "$" + item.cost.toFixed(2);
	price.appendChild(temp);
	info2.appendChild(price);

	let stock = document.createElement("span");
	temp = document.createElement("span");
	stock.className = "itemStock";
	temp.textContent = item.stock + " in stock";
	stock.appendChild(temp);
	info2.appendChild(stock);

	let location = document.createElement("span");
	temp = document.createElement("span");
	location.className = "itemLocation";
	temp.innerHTML = "&#128205; " + item.location;
	location.appendChild(temp);
	info2.appendChild(location);

	let type = document.createElement("span");
	temp = document.createElement("span");
	type.className = "itemType";
	temp.textContent = item.type;
	temp.className = "type" + item.type;
	type.appendChild(temp);
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

async function getItems() {
	return await (await fetch("items.json")).json();
}

async function update(pageNum = 1, checkboxSectionId = "") {
	let items = await getItems();

	let params = new URLSearchParams(document.location.search);
	if (params.get("q") !== null) {document.getElementById("search").value = params.get("q");}

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
	let numFilters = filters.location.length + filters.type.length + filters.section.length;
	document.getElementById("filtersApplied").textContent = numFilters + " filter" + (numFilters !== 1 ? "s" : "") + " applied";

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
					break;
				}
			}
			if (exit) {continue;}
		}
		if (params.get("q") !== null) {
			let regex = RegExp(strip(params.get("q")), "i");
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

	document.getElementById("numberFound").textContent = filtered.length + " result" + (filtered.length !== 1 ? "s" : "") + " found";

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

		if ((pageNum-1)*ITEMS_PER_PAGE <= index && index < pageNum*ITEMS_PER_PAGE) {
			resultsList.appendChild(createItem(item));
		}
	}

	document.getElementById("noResultsFound").hidden = filtered.length != 0;
	let feedback = [];
	if (params.get("q") !== null) { feedback.push("a query of \"" + params.get("q").trim() + "\"");}
	if (filters.location.length != 0) { feedback.push("a location of " + filters.location.join(" or "));}
	if (filters.type.length != 0) { feedback.push("an item type of " + filters.type.join(" or "));}
	if (filters.section.length != 0) { feedback.push("a section of " + filters.section.join(" or "));}
	document.getElementById("noResultsFeedback").textContent = "No items were found matching\n" + feedback.join(" and\n") + 
		"\n\nTry changing your search query or removing some filters";

	for (let child of document.getElementById("filters").children) {
		if (child.nodeName === "UL" && (checkboxSectionId !== child.id || numFilters === 0)) {
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
	let pageCount = Math.ceil(filtered.length/ITEMS_PER_PAGE);
	pageList.innerHTML = "";
	if (filtered.length == 0) {return; }
	pageList.appendChild(createPageButton("<<", 1));
	pageList.appendChild(createPageButton("<", Math.max(pageNum - 1, 1)));
	if (pageCount <= NUMBER_BUTTONS) {
		for (let i = 1; i <= pageCount; i++) {
			pageList.appendChild(createPageButton(i, i, i == pageNum));
		}
	} else {
		let startIndex = Math.max(1, pageNum - Math.floor(NUMBER_BUTTONS/2));
		if (startIndex + NUMBER_BUTTONS > pageCount) {startIndex = pageCount - NUMBER_BUTTONS + 1; }
		for (let i = 0; i < NUMBER_BUTTONS; i++) {
			pageList.appendChild(createPageButton(startIndex+i, startIndex+i, (startIndex+i) == pageNum));
		}
	}
	pageList.appendChild(createPageButton(">", Math.min(pageNum + 1, pageCount)));
	pageList.appendChild(createPageButton(">>", pageCount));
}

async function init() {
	let items = await getItems();

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