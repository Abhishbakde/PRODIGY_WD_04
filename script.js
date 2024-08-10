document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic greeting message based on the current time of day
    const greetingElement = document.querySelector('#home p');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = 'Good morning! I\'m a web developer with a passion for creating beautiful and functional websites. Check out my work and get to know me better!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good afternoon! I\'m a web developer with a passion for creating beautiful and functional websites. Check out my work and get to know me better!';
    } else {
        greetingMessage = 'Good evening! I\'m a web developer with a passion for creating beautiful and functional websites. Check out my work and get to know me better!';
    }

    greetingElement.textContent = greetingMessage;
});
