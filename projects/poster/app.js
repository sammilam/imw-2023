console.log("hello")

    const dots = [];
    const cursor = {
        x: 0,
        y: 0,
    };

    for (let i = 0; i < 40; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        document.body.appendChild(dot);
        dots.push(dot);
    }

    // addded window.scrollY for dots to follow vertical scrolling
    document.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY + window.scrollY; 
    });

    function draw() {
        let x = cursor.x;
        let y = cursor.y;

        dots.forEach((dot, index) => {
            const nextDot = dots[index + 1] || dots[0];

            dot.style.left = x + "px";
            dot.style.top = y + "px";

            x += (nextDot.offsetLeft - dot.offsetLeft) * 0.5;
            y += (nextDot.offsetTop - dot.offsetTop) * 0.5;
        });
    }

    setInterval(draw, 10);

// tutorial from: https://www.youtube.com/watch?v=g33XyH8BDuM&ab_channel=SnippetsCode


const textElement = document.getElementById('text');
const textContent = textElement.textContent;
textElement.textContent = ''; // Clear the text content

for (const char of textContent) {
    const span = document.createElement('span');
    span.classList.add('char');
    span.textContent = char;
    textElement.appendChild(span);
}

const chars = document.querySelectorAll('.char');

// for mouse hovering on THEORIZING characters, change colours
chars.forEach(char => {
    char.addEventListener('mouseover', () => {
        char.style.color = getRandomColor();
    });

// mouse off = revert back to white
    char.addEventListener('mouseout', () => {
        char.style.color = 'white';
    });
});

function getRandomColor() {
    const colors = ['#00FFFF', '#800080', '#FF1493', '#00FF00']; 
    return colors[Math.floor(Math.random() * colors.length)];
}

// inspired by https://www.youtube.com/watch?v=upof5x4YGdM&ab_channel=CSSHero