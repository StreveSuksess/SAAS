const headerBurger = document.getElementById("headerBurger");
const filterBurger = document.getElementById("filterBurger");

headerBurger.addEventListener("click", () => document.body.classList.toggle("active-burger-menu"));
if(filterBurger != null) filterBurger.addEventListener("click", () => document.body.classList.toggle("active-filter-menu"));
