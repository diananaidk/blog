// Pequeña interacción para el blog: al cargar, se marca la sección visitada.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(item => item.style.color = '');
    link.style.color = '#f0cf82';
  });
});
