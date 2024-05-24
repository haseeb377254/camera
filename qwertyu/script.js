const startButton = document.getElementById('start-button');
const landingPage = document.getElementById('landing-page');
const cameraPage = document.getElementById('camera-page');
const video = document.getElementById('video');
const zoomSlider = document.getElementById('zoom-slider');

const photoButton = document.getElementById('photo-button');
const videoButton = document.getElementById('video-button');
const portraitButton = document.getElementById('portrait-button');
const nightButton = document.getElementById('night-button');

let stream;

startButton.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    cameraPage.classList.remove('hidden');
    getCameraStream();
});

async function getCameraStream() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera: ', error);
    }
}

zoomSlider.addEventListener('input', (event) => {
    const zoomLevel = event.target.value;
    video.style.transform = `scale(${zoomLevel})`;
});

photoButton.addEventListener('click', () => {
    // Add functionality to take a photo
    alert('Photo mode activated');
});

videoButton.addEventListener('click', () => {
    // Add functionality to record a video
    alert('Video mode activated');
});

portraitButton.addEventListener('click', () => {
    // Add functionality for portrait mode
    alert('Portrait mode activated');
});

nightButton.addEventListener('click', () => {
    // Add functionality for super night mode
    alert('Super Night mode activated');
});
