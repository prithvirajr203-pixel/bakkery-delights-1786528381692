
  const ctaButton = document.querySelector('.cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
    });
  }
