let envelope = document.getElementById('envelope');
let photoGallery = document.getElementById('photoGallery');
let message = document.getElementById('message');
let photos = document.querySelectorAll('.photo');
let music = document.getElementById('music');
let continueButton = document.getElementById('continueButton');

function openEnvelope() {
    // Play music when the envelope is clicked
    if (music.paused) {
        music.play().catch((error) => console.error('Error playing audio:', error));
    }

    // Hide envelope and show photo gallery
    envelope.style.transform = 'scale(0)';
    setTimeout(() => {
        photoGallery.style.display = 'flex';
        animatePhotos();
    }, 1000);
}

function animatePhotos() {
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.opacity = '1';
            photo.style.transform = 'translateY(0)';
        }, index * 500); // Delay animation for each photo
    });
    setTimeout(() => {
        continueButton.style.opacity = '1';
    }, photos.length * 500);
}

function showMessage() {
    photoGallery.style.display = 'none';
    message.style.display = 'block';
}
