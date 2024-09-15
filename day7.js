const images = [
    'url("https://wallpapers.com/images/hd/black-yamaha-mt-15-under-a-bridge-6yvt9v13fo9cg8qv.jpg")',
    'url("https://wallpapers.com/images/hd/man-driving-yamaha-mt-15-0ko5elbhf7p9v2fd.jpg")',
    'url("https://c4.wallpaperflare.com/wallpaper/961/40/938/500px-motorcycle-yamaha-yamaha-mt-09-wallpaper-preview.jpg")',
];

const backgroundSlider = document.querySelector('.background-slider');
let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundSlider.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds

// Initialize the background image
backgroundSlider.style.backgroundImage = images[currentIndex];
