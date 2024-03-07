function fetchImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        // Converts the response to JSON format
        .then(response => response.json())
        // Handles the data received from the API
        .then(data => {
            // Gets the image element by its ID from the HTML
            const img = document.getElementById("img-api");
            // Sets source of image element to URL of fetched image
            img.src = data.message;
        })
        // Catches any errors that occur during the fetch process
        .catch(function (error) {
            console.log(error);
        });
}

// Gets the button element from the HTML with the ID 'fetch-image-button'
const button = document.getElementById('fetch-image-button');
// event listener to the button which triggers the fetchImage function when clicked
button.addEventListener('click', fetchImage);

// API from https://dog.ceo/dog-api/
