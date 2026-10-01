const hace = (minutos) => new Date(Date.now() - minutos * 60 * 1000).toISOString();

export const COLORES_AVATAR = [
  '#8a2b3f',
  '#1f5f8b',
  '#2e6b3d',
  '#6a3d9a',
  '#15616d',
  '#9c4221',
  '#8a5a00',
];

export const CONTACTOS = [
  { id: 'c1', nombre: 'Sofí', estado: 'En línea', color: COLORES_AVATAR[0] },
  { id: 'c2', nombre: 'Marto', estado: 'Últ. vez hoy 11:04', color: COLORES_AVATAR[1] },
  { id: 'c3', nombre: 'Grupo Facultad', estado: '5 participantes', color: COLORES_AVATAR[2] },
  { id: 'c4', nombre: 'Lu', estado: 'Escribiendo...', color: COLORES_AVATAR[3] },
  { id: 'c5', nombre: 'Pa', estado: 'Últ. vez ayer 21:30', color: COLORES_AVATAR[4] },
  { id: 'c6', nombre: 'Valen', estado: 'En línea', color: COLORES_AVATAR[5] },
  { id: 'c7', nombre: 'Trabajo', estado: '3 participantes', color: COLORES_AVATAR[6] },
];

export const MENSAJES_INICIALES = {
  c1: [
    { id: 'c1-1', autor: 'contacto', texto: '¡Hola! ¿Cómo venís con el trabajo práctico?', hora: hace(320), leido: true },
    { id: 'c1-2', autor: 'yo', texto: 'Hola Sofi esta complicado mati nos complica', hora: hace(316), leido: true },
    { id: 'c1-3', autor: 'contacto', texto: 'Genial. Yo todavía estoy peleando con el responsive', hora: hace(300), leido: true },
    { id: 'c1-4', autor: 'contacto', texto: 'nos juntamos para terminarlo?', hora: hace(12), leido: false },
  ],
  c2: [
    { id: 'c2-1', autor: 'yo', texto: 'Hola amigooo', hora: hace(260), leido: true },
    { id: 'c2-2', autor: 'contacto', texto: 'como estas todo bien?', hora: hace(255), leido: true },
    { id: 'c2-3', autor: 'contacto', texto: 'si, vos?', hora: hace(254), leido: true },
    { id: 'c2-4', autor: 'yo', texto: 'Perfecto, gracias!', hora: hace(250), leido: true },
  ],
  c3: [
    { id: 'c3-1', autor: 'contacto', texto: 'Chicos, la entrega se pasa al lunes', hora: hace(180), leido: true },
    { id: 'c3-2', autor: 'yo', texto: 'vamoooo', hora: hace(175), leido: true },
    { id: 'c3-3', autor: 'contacto', texto: 'Acuérdense de subir todo', hora: hace(40), leido: false },
    { id: 'c3-4', autor: 'contacto', texto: 'Y de termilarlo ajjaja', hora: hace(38), leido: false },
  ],
  c4: [
    { id: 'c4-1', autor: 'contacto', texto: 'holaa', hora: hace(150), leido: true },
    { id: 'c4-2', autor: 'yo', texto: 'hola lu vas a ir hoy?', hora: hace(148), leido: true },
    { id: 'c4-3', autor: 'contacto', texto: 'sip, obvio', hora: hace(146), leido: true },
    { id: 'c4-4', autor: 'yo', texto: 'listo vamos entonces', hora: hace(145), leido: true },
  ],
  c5: [
    { id: 'c5-1', autor: 'contacto', texto: 'donde andas?', hora: hace(1400), leido: true },
    { id: 'c5-2', autor: 'yo', texto: 'en casa por?', hora: hace(1390), leido: true },
    { id: 'c5-3', autor: 'contacto', texto: 'ah nada listo entonces', hora: hace(1385), leido: true },
  ],
  c6: [
    { id: 'c6-1', autor: 'yo', texto: 'Valen, ¿arrancamos el informe mañana?', hora: hace(95), leido: true },
    { id: 'c6-2', autor: 'contacto', texto: 'Dale, a las 10 en la biblioteca', hora: hace(90), leido: true },
    { id: 'c6-3', autor: 'contacto', texto: 'no te olvides!', hora: hace(5), leido: false },
  ],
  c7: [
    { id: 'c7-1', autor: 'contacto', texto: 'acuerdense de cargar todo', hora: hace(600), leido: true },
    { id: 'c7-2', autor: 'yo', texto: 'sisi estoy en eso', hora: hace(590), leido: true },
    { id: 'c7-3', autor: 'contacto', texto: 'joya', hora: hace(580), leido: true },
  ],
};
