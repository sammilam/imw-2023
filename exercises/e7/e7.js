
// Uses Effects + Events click
// When click button, trigger animation and revert back to original position
$(document).ready(function () {
    $(".sway").click(function () {
        $("#eyeMove").animate({ left: '180px' }, 1000, function () {
            $(this).animate({ left: '120px' }, 2000);
            // console.log("click");
        });
    });
});

// Inspired by: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1

$(document).ready(function () {

    redEye();
    jumpy();
    reset();

});
// https://api.jquery.com/css/

// Manipulation
function redEye() {
    $(document).ready(function () {
        $(".red").on("click", function () {
            // Check if the background color is red
            if ($(".eyes").css("background-color") === "rgb(255, 0, 0)") {
                // If it's red, change back to the original color
                $(".eyes").css("background-color", "");
            } else {
                // Change background to red
                $(".eyes").css("background-color", "red");
            }
        });
    });
}
// https://api.jquery.com/css/

function jumpBread() {
    var jumpHeight = 50; // Initial jump height
    var jumpDuration = 500; // jump duration

    // bread jump
    $(".bread").animate({ top: `-=${jumpHeight}px` }, jumpDuration)
        .animate({ top: `+=${jumpHeight}px` }, jumpDuration, function () {
            // Call jumpBread function
            jumpBread();
        });

    // Increase jump height increment of 50x
    jumpHeight += 50;
}

function jumpy() {
    $(".bread").hover(function () {
        //jump when mouse enters
        jumpBread();
    }, function () {
        // Stop jumping when mouse leaves
        $(".bread").stop(true, false);
        // Reset jump height
        jumpHeight = 0;
    });
}
// https://api.jquery.com/stop/#stop-clearQueue-jumpToEnd

// key press to rest everything

function reset() {
    $(document).ready(function () {
        // Function to refresh the page
        function refreshPage() {
            location.reload();
        }
        // reset when pressing a key
        $(document).keydown(function (event) {
            refreshPage();
        });
    });
}
