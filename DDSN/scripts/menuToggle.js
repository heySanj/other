function toggleMenuIcon() {

    const menuIcon = document.getElementById("menuToggleIcon")
    const toggle = document.getElementById("menuToggle")

    !toggle.checked ? menuIcon.src = "./images/close_icon.png" : menuIcon.src = "./images/menu_icon.png"
    
}