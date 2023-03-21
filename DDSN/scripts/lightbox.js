const lightBoxImage = document.getElementById("lightBoxImage")
lightBoxImage.addEventListener('click', ignoreClick);
const modal = document.getElementById("lightBoxModal")

// Open the Modal
function openModal(event) {

    document.getElementById("lightBoxModal").style.display = "flex";

    // Set the lightbox image to the clicked image
    lightBoxImage.src = event.src
    lightBoxImage.alt = event.alt
}

// Close the Modal
function closeModal() {
    document.getElementById("lightBoxModal").style.display = "none";
}


// When the lightbox image is clicked, ignore it
function ignoreClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }
