// Usplash API
const count = 10;
const apiKey = 'DZoa-hhg8ZUaCk6k90i_XZH9Fdiqwobr5KWJzcn1Bqc';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //Catch here
    }
}

//On Load
getPhotos();