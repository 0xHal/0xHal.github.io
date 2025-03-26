// ../script/script.js
// Get the modal
const modal = document.getElementById("imageModal");

// Get the image inside the modal
const modalImg = document.getElementById("modalImage");

// Function to open the modal with the clicked image
function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});