const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

document.querySelectorAll('.collection-card, .product-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;

    card.style.transform = `translateY(-8px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

const email = document.getElementById('email');
const note = document.getElementById('signupNote');
const joinButton = document.getElementById('joinBtn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

joinButton.addEventListener('click', () => {
  const value = email.value.trim();

  if (!emailPattern.test(value)) {
    note.textContent = 'Enter an email address to preview the request confirmation.';
    note.style.color = '#edd08c';
    return;
  }

  note.textContent = 'Preview request received. DOUG AVEIGO would follow up with a private collection invitation.';
  note.style.color = '#d8b56d';
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = 'none', 3500);
});