console.log("hello");


// function that when yellow is clicked on create more waves
$(document).ready(function () {
    $(".yellowCircle1").on("click", function () {
        var $newWave = $("<div>").addClass("waves");
        $(".circle1").append($newWave);

        setTimeout(function () {
            $newWave.remove();
        }, 3000);

        console.log("clicked");
    });
});

// same as first function but for the other side
$(document).ready(function () {
    $(".yellowCircle2").on("click", function () {
        var $newWave = $("<div>").addClass("waves");
        $(".circle2").append($newWave);

        setTimeout(function () {
            $newWave.remove();
        }, 3000);

        console.log("clicked");
    });
});


// Plays music and display its name
document.addEventListener('DOMContentLoaded', function () {
    var disc = document.getElementById('disc');
    var audio = document.getElementById('audio');
    var songNameElement = document.getElementById('songName');
    var currentSong = 0;
    // song in an array and aligns along with the names
    var songs = ['Fret.mp3', 'Girl.mp3', 'Woodshedder.mp3'];
    var songNames = ['Dont Fret by Quincas Moreira', 'Girl on Top by Amy Lynn & The Honey Men', 'Woodshedder Quincas Moreira'];

    disc.addEventListener('click', function () {
        currentSong = (currentSong + 1) % songs.length;
        audio.src = songs[currentSong];
        audio.play();
        displaySongName(); // Call the function to update the displayed song name
    });

    function displaySongName() {
        songNameElement.textContent = songNames[currentSong]; // Update the text content of the song name element
    }
});


// music from: https://studio.youtube.com/channel/UC6IN2OLxk1RlNRH_CDt0hMQ/music