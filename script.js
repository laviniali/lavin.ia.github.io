const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
})

// ------ light and dark mode -------
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
    
function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

// -- rotating descriptions animation -- 
const words = ["Cat Mom", "Coffee Enthusiast", "Blindbox Collector"];
    let index = 0;
    const textElement = document.getElementById("rotating-text");

    function rotateText() {
      gsap.to(textElement, {
        duration: 0.3, // Time for animation
        y: -50, // Move upward
        opacity: 0, // Fade out
        onComplete: () => {
          index = (index + 1) % words.length; // Move to next word
          textElement.textContent = words[index]; // Update text
          gsap.fromTo(
            textElement,
            { y: 50, opacity: 0 }, // Start below
            { y: 0, opacity: 1, duration: 0.3 } // Move to position and fade in
          );
        },
      });
    }
    setInterval(rotateText, 2000);