const themes = 
{
    beach: ['b1.jpg','b2.jpg','b3.jpg','b4.jpg','b5.jpg','b6.webp','b7.jpg','b8.jpg','b9.jpg','b10.jpg'],
    mountains: ['m1.jpg','m2.jpg','m3.jpg','m4.webp','m5.jpg','m6.jpg','m7.avif','m8.jpeg','m9.jpg','m10.jpg'],
    sky: ['s1.jpg','s2.jpg','s3.jpg','s4.jpg','s5.jpg','s6.jpg','s7.jpg','s8.webp','s9.avif','s10.jpg'],
    forest: ['f1.jpg','f2.jpeg','f3.avif','f4.jpg','f5.jpg','f6.jpg','f7.jpg','f8.jpg','f9.jpg','f10.jpg',]
};

const gallery = document.querySelector('.gallery');
const themeButtons = document.querySelectorAll('.theme-btn');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.theme;
        loadGallery(theme);
    });
});
function loadGallery(theme) {
    gallery.innerHTML = '';
    themes[theme].forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        gallery.appendChild(img);
    });
}
window.addEventListener('load', () => {
    loadGallery('beach');
});
