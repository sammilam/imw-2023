console.log("hello");

// Detect when waves touch the edges
// window.addEventListener('animationiteration', function (event) {
//     if (event.animationName === 'animate') {
//         var waves = document.querySelector('.waves');
//         var rect = waves.getBoundingClientRect();
//         if (rect.top <= 0 || rect.bottom >= window.innerHeight || rect.left <= 0 || rect.right >= window.innerWidth) {
//             document.body.style.overflow = 'hidden'; // Disable scrolling
//             waves.style.display = 'none';
//             setTimeout(function () {
//                 document.body.style.overflow = ''; // Re-enable scrolling after waves disappear
//             }, 2000); // Adjust the duration to match the animation duration
//         }
//     }
// });

$(document).ready(function () {
    $(".yellowCircle1").on("click", function () {
        var $newWave = $("<div>").addClass("waves");
        $(".circle1").append($newWave);

        setTimeout(function () {
            $newWave.remove();
        }, 3000); // 2000 milliseconds = 2 seconds

        console.log("clicked");
    });
});

$(document).ready(function () {
    $(".yellowCircle2").on("click", function () {
        var $newWave = $("<div>").addClass("waves");
        $(".circle2").append($newWave);

        setTimeout(function () {
            $newWave.remove();
        }, 3000); // 2000 milliseconds = 2 seconds

        console.log("clicked");
    });
});


// function ripple() {

// }


// $(document).ready(function () {
//     $('.yellowCircle').on('click', function () {
//         $('.waves').addClass('ripple');
//         setTimeout(function () {
//             $('.waves').removeClass('ripple');
//         }, 2000); // Adjust animation duration
//     });
// });


