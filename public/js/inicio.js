let menu = document.querySelector("#menu");
let nav = document.querySelector("nav");
let volt = document.querySelector("#volt");

menu.addEventListener("click", () => {
    nav.classList.add("active");
    menu.style.display = "none"; 
});

volt.addEventListener("click", () => {
    nav.classList.remove("active"); 
    setTimeout(() => {
        menu.style.display = "block";
    }, 500); 
});
