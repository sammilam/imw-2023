let paragraphs = [
    {
        "p": "A website can be a human being sharing similarities with constant growth and creative expression. "
    },
    {
        "p": "We all have stages of life from childhood to adulthood, which can relate to website phases from Skeuomorphism to flat design. The early web represents children with more personality and liveliness on the internet, creating potential methods for creative expression and displaying passionate interests. "
    },
    {
        "p":"Meanwhile, in the modern-day, the web takes a corporate approach in maturity with flat designs and structured compositions. These are much like how we, human beings, grow into adulthood, where we continue a sense of self, yet society pressures us to conform as ‘professional’ and ‘contained.’  "
    },
    {
        "p": "With individual websites within our hands for creation, we should use them to display our personality and values. Forget the 'How to create a professional website that gets you hired' mentality. The idea of a website should be an interactive, lively persona that prioritizes enjoyment in expressing oneself. "
    }
];

let message = "hello";
let people = document.getElementById("people");

people.addEventListener("click", function() {
    // Change background to a gradient
    document.body.style.background = "linear-gradient(to bottom right, #FF512F, #F09819)";

    // Clear existing content
    document.getElementById("container").innerHTML = "";

    // Loop through paragraphs and create white boxes for each
    paragraphs.forEach(function(paragraph) {
        let whiteBox = document.createElement("div");
        whiteBox.classList.add("white-box");
        whiteBox.textContent = paragraph.p;
        document.getElementById("container").appendChild(whiteBox);
    });
});
