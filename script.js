// LUCKY FAST SERVICE - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (question) {
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
    }
  });

  // 2. Click effect / Tracking helper for WhatsApp
  const waUrl = 'https://wha.life/luckey';
  const trackedLinks = document.querySelectorAll('a[href="' + waUrl + '"]');
  
  trackedLinks.forEach((link) => {
    link.addEventListener('click', () => {
      console.log('Routing to Lucky Fast Service WhatsApp:', waUrl);
    });
  });

  // 3. Floating entrance animation for the fixed WhatsApp button
  const fixedBtn = document.getElementById('fixedWhatsAppBtn');
  if (fixedBtn) {
    fixedBtn.style.opacity = '0';
    fixedBtn.style.transform = 'translateX(-50%) translateY(30px)';
    setTimeout(() => {
      fixedBtn.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      fixedBtn.style.opacity = '1';
      fixedBtn.style.transform = 'translateX(-50%) translateY(0)';
    }, 250);
  }
});
