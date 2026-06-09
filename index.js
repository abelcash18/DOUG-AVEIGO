    Const observer = new IntersectionObserver((entries) => {
      Entries.forEach((entry) => {
        If (entry.isIntersecting) {
          Entry.target.classList.add(‘visible’);
          Observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    Document.querySelectorAll(‘.reveal’).forEach((el) => observer.observe(el));

    Document.querySelectorAll(‘.collection-card, .product-card’).forEach((card) => {
      Card.addEventListener(‘pointermove’, (event) => {
        Const rect = card.getBoundingClientRect();
        Const x = ((event.clientX – rect.left) / rect.width – 0.5) * 8;
        Const y = ((event.clientY – rect.top) / rect.height – 0.5) * -8;
        Card.style.transform = `translateY(-8px) rotateX(${y}deg) rotateY(${x}deg)`;
      });
      Card.addEventListener(‘pointerleave’, () => {
        Card.style.transform = ‘’;
      });
    });

    Const email = document.getElementById(‘email’);
    Const note = document.getElementById(‘signupNote’);
    Document.getElementById(‘joinBtn’).addEventListener(‘click’, () => {
      Const value = email.value.trim();
      If (!value || !value.includes(‘@’)) {
        Note.textContent = ‘Enter an email address to preview the request confirmation.’;
        Note.style.color = ‘#f1d9a2’;
        Return;
      }
      Note.textContent = ‘Preview request received — DOUG AVEIGO would follow up with a private collection invitation.’;
      Note.style.color = ‘#d8b56d’;
    });