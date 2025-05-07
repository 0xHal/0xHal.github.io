// ../script/script.js
/*
console.log("Script.js loaded successfully");

// Test DOM access for all grid items
for (let i = 1; i <= 9; i++) {
    const imgElement = document.querySelector(`img[data-id="${i}"]`);
    const descElement = document.getElementById(`desc-${i}`);
    const linkElement = document.getElementById(`link-${i}`);

    if (!imgElement) {
        console.error(`Image element for item ${i} not found in the DOM`);
    } else {
        console.log(`Image element for item ${i} found:`, imgElement);
    }
    if (!descElement) {
        console.error(`Description element for item ${i} not found`);
    } else {
        console.log(`Description element for item ${i} found:`, descElement);
    }
    if (!linkElement) {
        console.log(`Link element for item ${i} not found (optional)`);
    } else {
        console.log(`Link element for item ${i} found:`, linkElement);
    }
}

// Fetch a list of objects from the Metropolitan Museum of Art API
fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11") // Department 11 = European Paintings
    .then(response => {
        console.log("Met API Response Status (Object List):", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Met API Object IDs:", data);

        // Ensure we have at least 9 objects
        if (!data.objectIDs || data.objectIDs.length < 9) {
            throw new Error("Not enough objects returned from Met API");
        }

        // Take the first 9 object IDs
        const objectIds = data.objectIDs.slice(0, 9);
        console.log("Selected Object IDs:", objectIds);

        // Fetch details for each of the 9 objects
        const fetchPromises = objectIds.map((objectId, index) => {
            console.log(`Fetching details for object ID ${objectId} (item ${index + 1})...`);
            return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error for object ${objectId}! Status: ${response.status}`);
                    }
                    return response.json();
                });
        });

        // Wait for all fetch requests to complete
        return Promise.all(fetchPromises);
    })
    .then(artworks => {
        console.log("Fetched Artworks:", artworks);

        // Update each grid item with the corresponding artwork
        artworks.forEach((artwork, index) => {
            const itemIndex = index + 1; // 1 to 9 for data-id
            const imageUrl = artwork.primaryImage || "https://via.placeholder.com/600x400?text=No+Image";
            const title = artwork.title || "Untitled";
            const objectId = artwork.objectID;

            console.log(`Updating item ${itemIndex} with image URL:`, imageUrl);

            // Update the image
            const imgElement = document.querySelector(`img[data-id="${itemIndex}"]`);
            if (imgElement) {
                imgElement.src = imageUrl;
                imgElement.alt = title;
                imgElement.classList.remove("loading");

                imgElement.onload = () => {
                    console.log(`Image for item ${itemIndex} loaded successfully:`, imageUrl);
                };
                imgElement.onerror = () => {
                    console.error(`Failed to load image for item ${itemIndex}:`, imageUrl);
                    imgElement.src = "https://via.placeholder.com/600x400?text=Image+Load+Failed";
                };
            }

            // Update the description
            const descElement = document.getElementById(`desc-${itemIndex}`);
            if (descElement) {
                descElement.textContent = title;
            }

            // Update the "Learn More" link if it exists
            const linkElement = document.getElementById(`link-${itemIndex}`);
            if (linkElement) {
                linkElement.href = `https://www.metmuseum.org/art/collection/search/${objectId}`;
            }
        });
    })
    .catch(error => {
        console.error("Error fetching art images from Met API:", error);
        // Fallback: Set placeholders for all items if the API call fails
        for (let i = 1; i <= 9; i++) {
            const imgElement = document.querySelector(`img[data-id="${i}"]`);
            if (imgElement) {
                imgElement.src = "https://via.placeholder.com/600x400?text=Error+Loading+Image";
                imgElement.classList.remove("loading");
            }
            const descElement = document.getElementById(`desc-${i}`);
            if (descElement) {
                descElement.textContent = "Error Loading Artwork";
            }
        }
    });
*/
// Existing modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

if (!modal || !modalImg) {
    console.error("Modal or modal image element not found");
} else {
    console.log("Modal elements found successfully");
}

function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});