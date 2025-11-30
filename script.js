document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Detection --- //
    const navbar = document.querySelector('nav .container');
    const navbarline = document.querySelector('.line');
    const welcomeSection = document.querySelector('section.welcome');

    if (navbar && welcomeSection) {
        const handleNavbarStyle = () => {
            const welcomeRect = welcomeSection.getBoundingClientRect();
            const isInWelcome = welcomeRect.bottom > 0;

            if (isInWelcome) {
                // Di atas (welcome section) - transparan dan teks putih
                navbar.classList.add('bg-transparent');
                navbarline.classList.add('line-transparent');
                // navbar.classList.remove('navbar-solid');
            } else {
                // Sudah scroll ke bawah - solid dan teks hitam
                navbar.classList.remove('bg-transparent');
                navbarline.classList.remove('line-transparent');
                // navbar.classList.add('navbar-solid');
            }
        };

        // Jalankan saat load
        handleNavbarStyle();

        // Jalankan saat scroll
        window.addEventListener('scroll', handleNavbarStyle, { passive: true });
    }

    // --- Timeline Animation Fallback --- //
    const isAnimationTimelineSupported = CSS.supports('animation-timeline', 'view()');

    if (!isAnimationTimelineSupported) {
        // Tambahkan class ke body jika fallback diperlukan
        document.body.classList.add('js-timeline');

        // Konfigurasi observer untuk berbagai elemen
        const observerConfig = {
            threshold: [0.1, 0.25, 0.4],
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, observerConfig);

        // Timeline items
        const timelineItems = document.querySelectorAll('.timeline li');
        timelineItems.forEach(item => observer.observe(item));

        // Animated sections (.about)
        const animatedSections = document.querySelectorAll('.about');
        animatedSections.forEach(section => observer.observe(section));

        // Background animation elements
        const bgAnimateElements = document.querySelectorAll('.bg-animate');
        bgAnimateElements.forEach(element => observer.observe(element));

        // Welcome section bigtitle
        const bigTitles = document.querySelectorAll('.bigtitle');
        bigTitles.forEach(title => observer.observe(title));

        // About image
        const aboutImages = document.querySelectorAll('.about-image');
        aboutImages.forEach(img => observer.observe(img));

        // Text wrappers
        const textWrappers = document.querySelectorAll('.text-wrapper h1, .text-wrapper p');
        textWrappers.forEach(element => observer.observe(element));

        // Pages links
        const pageLinks = document.querySelectorAll('.pages-link');
        pageLinks.forEach(link => observer.observe(link));

        // Gallery cards
        const galleryCards = document.querySelectorAll('.gallery-card');
        galleryCards.forEach(card => observer.observe(card));

        // Project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => observer.observe(card));

        // Post cards
        const postCards = document.querySelectorAll('.post-card');
        postCards.forEach(card => observer.observe(card));
    }
});


function copyDscUsername() {
    const textToCopy = "@sean372id";
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Text copied to clipboard: ' + textToCopy);
        }).catch((error) => {
            alert('Failed to copy text: ' + error);
        });
}