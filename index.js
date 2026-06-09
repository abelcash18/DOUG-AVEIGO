const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

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
document.getElementById('joinBtn').addEventListener('click', () => {
  const value = email.value.trim();
  if (!value || !value.includes('@')) {
    note.textContent = 'Enter an email address to preview the request confirmation.';
    note.style.color = '#f1d9a2';
    return;
  }
  note.textContent = 'Preview request received — DOUG AVEIGO would follow up with a private collection invitation.';
  note.style.color = '#d8b56d';
});
