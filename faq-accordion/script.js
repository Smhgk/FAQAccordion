document.querySelectorAll('.faq-title').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('i');
      const isActive = content.classList.contains('active');

      document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.faq-title i').forEach(s => {
        s.classList.remove('fa-circle-minus')
        s.classList.add('fa-circle-plus')
      });

      if (!isActive) {
        content.classList.add('active');
        icon.className = ('fa-solid fa-circle-minus');
      }
    });
  });