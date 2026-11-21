function search(queryText) {
  const page = "search.html";
  let url = new URL(page, document.location.href);
  if (queryText.trim() !== "") {
    url.searchParams.set("q", queryText.trim());
  }

  if (document.location.href.includes(page)) {
    history.pushState({}, "", url);
    update();
  } else {
    document.location.href = url;
  }
}

document.write(`
<header style="display: flex; align-items: center; justify-content: center; gap: 6px;">
    <input type="search" class="search" placeholder="Search the store inventory">
    <input type="image" class="searchImg" alt="Search" src="./searchIcon.png">
</header>
<hr>
`);

document.querySelectorAll(".search").forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      search(input.value);
    }
  });
});

document.querySelectorAll(".searchImg").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector(".search");
    search(input.value);
  });
});
