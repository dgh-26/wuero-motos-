function enviarFormulario() {

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const email = document.getElementById('email').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre) {
    alert('⚠️ Por favor ingresa tu nombre.');
    return;
  }

  if (!telefono || !/^\d{7,15}$/.test(telefono.replace(/[\s\-]/g, ''))) {
    alert('⚠️ Ingresa un número de teléfono válido.');
    return;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('⚠️ Ingresa un correo electrónico válido.');
    return;
  }

  if (!servicio) {
    alert('⚠️ Selecciona el servicio de tu interés.');
    return;
  }

  if (!mensaje) {
    alert('⚠️ Escribe un mensaje antes de enviar.');
    return;
  }

  const texto =
    '🏍️ *Nuevo mensaje - Wuero-Motos*\n\n' +
    '👤 *Nombre:* ' + nombre + '\n' +
    '📞 *Teléfono:* ' + telefono + '\n' +
    '✉️ *Correo:* ' + email + '\n' +
    '🔧 *Servicio:* ' + servicio + '\n' +
    '💬 *Mensaje:* ' + mensaje;

  const url =
    'https://wa.me/528311306063?text=' +
    encodeURIComponent(texto);

  document.getElementById('nombre').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('email').value = '';
  document.getElementById('servicio').value = '';
  document.getElementById('mensaje').value = '';

  const msg = document.getElementById('msg-exito');

  msg.style.display = 'block';

  setTimeout(function () {
    msg.style.display = 'none';
    window.location.href = url;
  }, 800);
}
