window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    if (window.scrollY === 0) {
        header.classList.remove('bg-dark');
    } else {
        header.classList.add('bg-dark');
    }
});
