console.log("hello");

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

document.addEventListener('DOMContentLoaded', function () {
    var disc = document.getElementById('disc');
    var audio = document.getElementById('audio');
    var currentSong = 0;
    var songs = ['Fret.mp3', 'Girl on Top.mp3', 'Woodshedder.mp3'];

    disc.addEventListener('click', function () {
        currentSong = (currentSong + 1) % songs.length; // Increment current song index
        audio.src = songs[currentSong]; // Set the source of the audio element to the next song
        audio.play(); // Play the new song
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var disc = document.getElementById('disc');
    var audio = document.getElementById('audio');
    var songNameElement = document.getElementById('songName');
    var currentSong = 0;
    var songs = ['Fret.mp3', 'Girl on Top.mp3', 'Woodshedder.mp3'];
    var songNames = ['Dont Fret by Quincas Moreira', 'Girl on Top by Amy Lynn & The Honey Men', 'Woodshedder Quincas Moreira'];

    disc.addEventListener('click', function () {
        currentSong = (currentSong + 1) % songs.length;
        audio.src = songs[currentSong];
        audio.play();
        displaySongName(); // Call the function to update the displayed song name\
    });

    function displaySongName() {
        songNameElement.textContent = songNames[currentSong]; // Update the text content of the song name element
    }
});


// music from: https://studio.youtube.com/channel/UC6IN2OLxk1RlNRH_CDt0hMQ/music