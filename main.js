btn = document.querySelector("button")
window.onscroll = function () {
    if (window.scrollY >= 200) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}



