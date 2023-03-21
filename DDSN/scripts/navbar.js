const nav = document.getElementById("navLinks");

function toggleMenu() {
    if (nav.className === "") {
        nav.className += "showMenu";
    } else {
        nav.className = "";
    }
}

// Close the menu on window resize
window.onresize = () => {
    nav.className = "";
}