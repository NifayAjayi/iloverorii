document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    const vinylDisc = document.querySelector('.vinyl-disc');

    // Remove loading screen
    window.addEventListener('load', () => {
        const loader = document.getElementById('loading');
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                loader.style.display = 'none';
                document.getElementById('intro').classList.add('active');
                gsap.to('#intro', { opacity: 1, duration: 1 });
            }
        });
    });

    // Floating heart click handler with music
    document.querySelector('.floating-heart').addEventListener('click', () => {
        bgMusic.play();
        vinylDisc.style.animationPlayState = 'running';
        
        gsap.to('#intro', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.getElementById('intro').classList.remove('active');
                document.getElementById('envelope').classList.add('active');
                gsap.to('#envelope', { opacity: 1, duration: 1 });
                
                setTimeout(() => {
                    document.querySelector('.envelope-wrap').classList.add('flipped');
                }, 1000);
            }
        });
    });

    // Gallery setup and animation
    function setupGallery() {
        const gallery = document.querySelector('.cinema-gallery');
        const photos = [
            { url: './IMG_7861.jpeg', caption: 'Our First Date' },
            { url: './IMG_7757.jpeg', caption: '' },
            { url: './IMG_7156.jpeg', caption: ' },
            { url: './IMG_7622.jpeg', caption: ' },
            { url: './FullSizeRender.jpeg', caption: '' },
            { url: './IMG_7863.jpeg', caption: ' },
            { url: './IMG_7762.jpeg', caption: '' },
            { url: './IMG_7778.jpeg', caption: '' }
        ];

        photos.forEach((photo, index) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid';
            polaroid.style.setProperty('--rotation', Math.random() * 20 - 10);
            
            polaroid.innerHTML = `
                <img src="${photo.url}" alt="${photo.caption}">
                <div class="caption">${photo.caption}</div>
            `;
            
            gallery.appendChild(polaroid);
            
            setTimeout(() => {
                polaroid.classList.add('show');
            }, index * 300);
        });
    }

    // Continue button handler
    document.querySelector('.continue-btn').addEventListener('click', () => {
        gsap.to('#envelope', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.getElementById('envelope').classList.remove('active');
                document.getElementById('gallery').classList.add('active');
                gsap.to('#gallery', { opacity: 1, duration: 1 });
                setupGallery();
            }
        });
    });

    // Vinyl player music controls
    vinylDisc.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            vinylDisc.style.animationPlayState = 'running';
        } else {
            bgMusic.pause();
            vinylDisc.style.animationPlayState = 'paused';
        }
    });
});
