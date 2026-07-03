// --- 1. Global Page Preloader (Optimized for instant layout detection) ---
// Switched from 'load' to 'DOMContentLoaded' so the loader fades out as soon as text/layout 
// structure is ready, instead of waiting for heavy luxury images to finish downloading.
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // Matches normal opacity CSS transition times
  }
});

// --- 2. Scroll Reveal Animation (Intersection Observer) ---
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

// --- 3. Interactive 3D Card Hover Effect ---
document.querySelectorAll('.collection-card, .product-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;

    card.style.transform = `perspective(1000px) translateY(-8px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

// --- 4. Private Preview Email Validation ---
const emailInput = document.getElementById('email');
const note = document.getElementById('signupNote');
const joinButton = document.getElementById('joinBtn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleSignup() {
  if (!emailInput || !note) return; // Guard clause to prevent undefined crashes
  
  const value = emailInput.value.trim();

  if (!emailPattern.test(value)) {
    note.textContent = 'Enter a valid email address to preview the request confirmation.';
    note.style.color = '#edd08c';
    return;
  }

  note.textContent = 'Preview request received. DOUG AVEIGO will follow up with a private collection invitation.';
  note.style.color = '#d8b56d';
}

// Only attach event listeners if elements exist safely on the current DOM
if (joinButton && emailInput) {
  joinButton.addEventListener('click', handleSignup);

  emailInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSignup();
    }
  });
}

// --- 5. New Arrival Popup Trigger ---
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("customPopup");
  const closeBtn = document.querySelector(".popup-close-btn");

  if (popup) {
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1500);

    function closePopup() {
      popup.style.display = "none";
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }

    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  }
});