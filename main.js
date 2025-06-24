const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email.includes('@') || !mensaje) {
      alert('Por favor completá todos los campos correctamente.');
      e.preventDefault();
    }
  });
}
