// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode preference is saved in localStorage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
  body.classList.add('light-mode');
  darkModeToggle.checked = true;
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// GSAP Animations
gsap.from('.animated-text', {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: 'power3.out',
});

gsap.from('.animated-image', {
  opacity: 0,
  scale: 0.5,
  duration: 1.5,
  ease: 'elastic.out(1, 0.3)',
});

gsap.from('.card', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
  ease: 'power3.out',
});

gsap.from('.hire-me', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1.5,
  ease: 'power3.out',
});

// Hire Me Button Hover Effect
const hireMeButton = document.querySelector('.hire-me');

hireMeButton.addEventListener('mouseenter', () => {
  gsap.to(hireMeButton, {
    scale: 1.1,
    backgroundColor: '#00b3b3',
    duration: 0.3,
  });
});

hireMeButton.addEventListener('mouseleave', () => {
  gsap.to(hireMeButton, {
    scale: 1,
    backgroundColor: '#00ffff',
    duration: 0.3,
  });
});