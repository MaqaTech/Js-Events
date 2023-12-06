var overlay = document.querySelector(".overlay");
var call = document.querySelector(".call");
var openBtn = document.querySelector(".btn_phone");
var closeBtn = document.querySelector(".btn_close");

function openСall() {
    call.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeCall() {
    call.classList.add("hidden")
    overlay.classList.add("hidden")
}

openBtn.addEventListener("click", openСall);
closeBtn.addEventListener("click", closeCall);
overlay.addEventListener("click", closeCall);