export function formatearHora(iso) {
  return new Date(iso).toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function formatearFechaCorta(iso) {
  const fecha = new Date(iso);
  const hoy = new Date();
  const ayer = new Date();
  ayer.setDate(hoy.getDate() - 1);

  const mismoDia = (a, b) => a.toDateString() === b.toDateString();

  if (mismoDia(fecha, hoy)) return formatearHora(iso);
  if (mismoDia(fecha, ayer)) return 'Ayer';
  return fecha.toLocaleDateString('es-AR');
}

export function formatearFechaLarga(iso) {
  return new Date(iso).toLocaleString('es-AR', {
    dateStyle: 'long',
    timeStyle: 'short',
    hour12: false,
  });
}

export function normalizar(texto = '') {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function obtenerIniciales(nombre = '') {
  const palabras = nombre
    .trim()
    .split(/\s+/)
    .filter((p) => /\p{L}/u.test(p[0] ?? ''));

  if (palabras.length === 0) return '?';
  if (palabras.length === 1) return palabras[0].slice(0, 2).toUpperCase();
  return (palabras[0][0] + palabras[1][0]).toUpperCase();
}
