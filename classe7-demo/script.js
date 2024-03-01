console.log("hello");

$('body').css('background-color', 'white');

let text = 'hello';

$('.background').hide();

for (let i = 0; i < 500; i++) {
    let block = `<div style="width: ${i}px; height: 100vw; background-color: hsl(${i}, 100%, 50%)"> </div>`;
    $('.foreground').append(block);
}


$('div').each(function () {
    $(this).on('mouseenter', function () {
        $(this).addClass('no-width')
    })
})

$('body').on("keypress", function () {
    console.log("key pressed");
    $('div').removeClass('no-width')
})

