function search() {
    const page = "search.html";
    let url = new URL(page, document.location.href);
    if (document.getElementById("search").value.trim() !== "") {
        url.searchParams.set("q", document.getElementById("search").value.trim());
    }

    if (document.location.href.includes(page)) {
        history.pushState({}, "", url);
        update();
    } else {
        document.location.href = url;
    }
}

document.write(`
<header class="center">
    <h1 id="logo" class="left">Re-Used Used Books
    </h1>

    <input type="search" id="search" placeholder="Search the store inventory">
    <input type="image" id="searchImg" alt="Search" src="./searchIcon.png">

    <div id="links" class="center">
        <a href="home.html"> Home</a>
    </div>
</header>
<hr>
`);

document.getElementById("logo").addEventListener("click", () =>
    {document.location.href = "home.html";})

document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {search();}});
document.getElementById("searchImg").addEventListener("click", search);