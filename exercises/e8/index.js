function fetchImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const img = document.getElementById("img-api")
            img.src = data.message
        })
        .catch(function (error) {
            console.log(error);
        });
}


const button = document.getElementById('fetch-image-button');
button.addEventListener('click', fetchImage);


// API from https://dog.ceo/dog-api/