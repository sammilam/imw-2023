// Get all elements with the 'window' class
const windows = document.querySelectorAll('.window');

// Add click event listener to each window
windows.forEach(windowElement => {
    windowElement.addEventListener('click', () => {
        // Add class to the window to trigger the fade out transition
        windowElement.classList.add('hide');

        setTimeout(() => {
            windowElement.remove();
        }, 500); // transition time
    });
});

