// LUCKY365 / LUCKY FAST SERVICE - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Default is White Theme as requested)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  // Check saved theme, default to white (light)
  const savedTheme = localStorage.getItem('lucky_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Light';
  } else {
    document.body.classList.remove('dark-mode');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Dark';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      if (isDark) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
        localStorage.setItem('lucky_theme', 'dark');
      } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
        localStorage.setItem('lucky_theme', 'light');
      }
    });
  }

  // 2. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other accordion items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // 3. Click effect / Tracking helper for WhatsApp
  const waUrl = 'https://wha.life/luckey';
  const trackedLinks = document.querySelectorAll('a[href="' + waUrl + '"]');
  
  trackedLinks.forEach((link) => {
    link.addEventListener('click', () => {
      console.log('Routing to Lucky365 WhatsApp:', waUrl);
    });
  });

  // 4. Subtle entrance animation for the fixed WhatsApp button
  const fixedBtn = document.getElementById('fixedWhatsAppBtn');
  if (fixedBtn) {
    fixedBtn.style.opacity = '0';
    fixedBtn.style.transform = 'translateX(-50%) translateY(30px)';
    setTimeout(() => {
      fixedBtn.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      fixedBtn.style.opacity = '1';
      fixedBtn.style.transform = 'translateX(-50%) translateY(0)';
    }, 300);
  }
});
