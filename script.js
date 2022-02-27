function toggleMore() {
    const moreVersions = document.getElementById("more-versions");
    const more = document.getElementById("more");
    if (moreVersions.style.display == "none") {
        moreVersions.style.display = "block";
        more.classList.remove("btn-outline-primary");
        more.classList.add("btn-primary");
        more.innerText = "Hide";
    } else {
        moreVersions.style.display = "none";
        more.classList.remove("btn-primary");
        more.classList.add("btn-outline-primary");
        more.innerText = "More";
    }
}