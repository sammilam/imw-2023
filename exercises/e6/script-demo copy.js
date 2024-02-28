console.log("Testing to see if js file is linked");

// INTERACTION
// const greenCircle = document.getElementById("green");
// const pinkCircle = document.getElementById("plum");
// const blueCircle = document.getElementById("blue");

let interactionContainer = document.getElementById("interactionContainer");

// greenCircle.addEventListener("click", function () {
//     console.log(interactionContainer);
//     interactionContainer.style.backgroundColor = "lightgreen";
// })

// pinkCircle.addEventListener("click", function () {
//     interactionContainer.style.background = "plum"
// })

// blueCircle.addEventListener("click", function () {
//     interactionContainer.style.background = "lightblue"
// })

// LOOPING
/*
Loop Task
1. select container
2. declare message variable and assign text
3. for loop
*/

const loopContainer = document.getElementById("loopContainer");
let message = "hello";

for (let i = 0; i < 10; i++) {
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}


// CONDITION

const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

// When hover for more than 2 seconds, change colour to blue
conditionContainer.addEventListener("mouseover", function () {
    setTimeout(function () {
        square.style.backgroundColor = "blue";

    }, 2000);
});

conditionContainer.addEventListener("mouseover", function () {
    square.style.backgroundColor = "green";

});

conditionContainer.addEventListener("mouseout", function () {
    square.style.backgroundColor = "lightsalmon";
});

// TIME
const increaseText = document.getElementById("increaseText");
let fontSize = 12;
let timeIncrease = setInterval(increaseFontSize, 1000);


function increaseFontSize() {
    fontSize++;
    increaseText.style.fontSize = fontSize + "px";
}

// referenced from https://www.w3schools.com/js/js_timing.asp


const inputText = document.getElementById("inputText").value;
const textLength = inputText.length;

// When button is clicked, collect the input value and find the string length
document.getElementById('submit').addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const textLength = inputText.length;

    // replaces text text-length
    document.getElementById("text-length").innerHTML = "Text Length: " + textLength;
});


/* references: https://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript
https://www.w3schools.com/js/tryit.asp?filename=tryjs_string_length
*/

// CONSOLE
console.log("AHAHHAHAHA");


const colorBtns = document.querySelectorAll(".colors");
console.log(colorBtns.length);

for (let i = 0; i < colorBtns.length; i++) {
    // takes the element colour buttons and change based on i
    colorBtns[i].addEventListener('click', function () {
        interactionContainer.style.backgroundColor = getComputedStyle(colorBtns[i]).backgroundColor;
    })
}

//    getComputedStyle(colorBtns[i]).backgroundColor;


    // if (i==0){
    //     console.log ("lightgreen");
    // }
    // else if (i==1){
    //     console.log("plum");
    // }
    // else {
    //     console.log ("pink");
    // }
// }
