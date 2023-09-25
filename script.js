
let burgBar = document.querySelector(".fa-bars");
let mobilemenu = document.querySelector(".main_header_nav");
let xMark = document.querySelector(".fa-xmark");

burgBar.addEventListener("click", ()=> 
{
    mobilemenu.classList.add("show");
    burgBar.style.display = "none";
    xMark.style.display = "block";
});

xMark.addEventListener("click",()=>{
    mobilemenu.classList.remove("show");
    burgBar.style.display = "block";
    xMark.style.display = "none";
});


