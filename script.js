const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Usplash API
const count = 10;
const apiKey = 'DZoa-hhg8ZUaCk6k90i_XZH9Fdiqwobr5KWJzcn1Bqc';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// Helper Function to Set Attributes on DOM

//Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        //Catch here
    }
}

//On Load
getPhotos();