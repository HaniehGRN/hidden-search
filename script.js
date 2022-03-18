const search_btn = document.querySelector(".btn");
const searchbox  = document.querySelector("input");

search_btn.addEventListener("click", () => {
    searchbox.classList.add("active");
    search_btn.classList.add("active");
    searchbox.focus();
})