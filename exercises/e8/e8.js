
// let plants = [
// {
//     "plants" : [
//         {
//             "name": "Rubber Plant",
//             "photo": "rubberplant.jpg",
//             "description": "Easy to take care of"

//         },
//         {
//             "name": "Monstera",
//             "photo": "monsterra.jpg",
//             "description": "Easy to take care of"
//         },
//         {
//             "name": "ZZplant",
//             "photo": "zzplant.jpg",
//             "description": "Easy to take care of"
//         }
//     ]
// }

// can put in variables inside string
// send text to html to display
// $('body').append(`<p>${plant.name}<p>`);

// console.log(plants.description);

// create loop and display values


// fetch("plants.json")
fetch("https://ghibliapi.vercel.app/species")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Display data to document
        // console(data.plants[0].description);
        // for (let i = 0; i < plant.length; i++) {
        //     $('body').append(`
        //     <div>
        //     <h2>${plant[i].name}<h2>`);

        // $('body').append(`<p>${plant[i].description}</p>
        //         <img src="${plant[i].photo}">

        // //         </div>
        // //             `);
        data.forEach(dataPoint => {
            console.log(dataPoint.name);
            $('body').append(`<div>
            <h1>${dataPoint.name}</h1>
            <p>${dataPoint.eye_colors}<p>
            </div>`)
        })
        console.log(data);


    })

    .catch(function (error) {
        $('body').append(`<h1>Error!</h1> <p> Try again later </p>`)
        console.log(error);
        // error message
    })





