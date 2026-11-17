function search() {
    let url = "search.html"
    if (document.getElementById("search").value !== "") {
        url += "?search=" + encodeURIComponent(document.getElementById("search").value);
    }
    document.location.href = url;
}

document.write(`
<header class="center">
    <h1 id="logo" class="left">Re-Used Used Books
    </h1>

    <input type="search" id="search" placeholder="Search for item">
    <input type="image" id="searchImg" src="./searchIcon.png">

    <div id="links">
        <a href="home.html"> Home</a>
        <a href="search.html"> Search</a>
    </div>
</header>
<hr>
`);

document.getElementById("logo").addEventListener("click", () =>
    {document.location.href = "home.html";})

document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {search();}});
document.getElementById("searchImg").addEventListener("click", search);