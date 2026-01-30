 
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
        sections.forEach(section => observer.observe(section));

        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.skill-fill');
                    fills.forEach(fill => {
                        fill.style.width = fill.getAttribute('data-width');
                    });
                }
            });
        });
        skillObserver.observe(document.getElementById('skills'));

        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const messageDiv = document.getElementById('formMessage');

            if (!name || !email || !message) {
                messageDiv.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
                return;
            }
            
            messageDiv.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent.</div>';
            this.reset();
        });

        
    