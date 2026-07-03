// --- 1. Scroll Reveal Animation (Intersection Observer) ---
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
  // Fallback for older browsers
  revealItems.forEach((item) => item.classList.add('visible'));
}

// --- 2. Interactive 3D Card Hover Effect ---
document.querySelectorAll('.collection-card, .product-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;

    // Added perspective to keep the 3D element rendering smoothly across modern devices
    card.style.transform = `perspective(1000px) translateY(-8px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

// --- 3. Private Preview Email Validation ---
const emailInput = document.getElementById('email');
const note = document.getElementById('signupNote');
const joinButton = document.getElementById('joinBtn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleSignup() {
  const value = emailInput.value.trim();

  if (!emailPattern.test(value)) {
    note.textContent = 'Enter a valid email address to preview the request confirmation.';
    note.style.color = '#edd08c';
    return;
  }

  note.textContent = 'Preview request received. DOUG AVEIGO will follow up with a private collection invitation.';
  note.style.color = '#d8b56d';
}

// Click Trigger
joinButton.addEventListener('click', handleSignup);

// Enter Key Press Trigger
emailInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSignup();
  }
});

// --- 4. Global Page Preloader ---
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = 0;
    // Lowered timeout from 7500ms to 500ms to match normal opacity transitions 
    // and prevent an invisible container from trapping background click events.
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

// --- 5. New Arrival Popup Trigger ---
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("customPopup");
  const closeBtn = document.querySelector(".popup-close-btn");

  if (popup) {
    // Automatically trigger popup 1.5 seconds after loading the layout structure
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1500);

    function closePopup() {
      popup.style.display = "none";
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }

    // Closes if background overlay is clicked (but not the white card itself)
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  }
});