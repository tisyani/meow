document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            const name = this.querySelector('.name');
            name.style.opacity = '1';
            name.style.transform = 'scale(1.2)';
            
            const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.style.borderColor = randomColor;
            this.style.boxShadow = `0 0 15px ${randomColor}`;
            
            this.style.transform = 'translateY(-10px)';
        });
        
        section.addEventListener('mouseleave', function() {
            const name = this.querySelector('.name');
            name.style.opacity = '0';
            name.style.transform = 'scale(0.5)';
            
            this.style.borderColor = '#00FFFF';
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
        
        const name = section.querySelector('.name');
        name.style.transitionDelay = `${Math.random() * 0.1}s`;
    });
    
    setInterval(() => {
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        });
    }, 1000);
    
    createStars();

    document.addEventListener('mousemove', function(e) {
        createTrail(e.clientX, e.clientY);
    });
});

function createStars() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite alternate`;
        
        document.body.appendChild(star);
    }
    
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes twinkle {
            0% { opacity: 0.2; transform: scale(0.8); }
            100% { opacity: ${0.8 + Math.random() * 0.2}; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.width = '10px';
    trail.style.height = '10px';
    trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    trail.style.borderRadius = '50%';
    trail.style.left = `${x - 5}px`;
    trail.style.top = `${y - 5}px`;
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9999';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.transform = 'scale(2)';
        trail.style.opacity = '0';
        setTimeout(() => {
            trail.remove();
        }, 500);
    }, 50);
}