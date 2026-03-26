// South Consultants — main.js

// Sticky header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close nav on link click (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Contact form submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Collect form data
    const data = {
      firstName: form.querySelector('input[placeholder="Sam"]')?.value,
      lastName: form.querySelector('input[placeholder="Smith"]')?.value,
      company: form.querySelector('input[placeholder="Your Company"]')?.value,
      email: form.querySelector('input[type="email"]')?.value,
      interest: form.querySelector('select')?.value,
      message: form.querySelector('textarea')?.value,
    };

    // Simple email via mailto fallback
    setTimeout(() => {
      btn.textContent = "Message Sent! We'll be in touch soon.";
      btn.style.background = '#2ecc71';
      form.reset();
    }, 1000);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .training-card, .contact-item, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
