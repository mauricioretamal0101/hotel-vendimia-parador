# Hotel Vendimia Parador — sitio web propio

Reconstrucción inicial para [Hotel Vendimia Parador](https://www.hotelvendimiaparador.cl/) en Santa Cruz, Región de O’Higgins, Chile.

## Estado (noviembre 2026): prototipo navegable listo para probar, NO sitio definitivo

El proyecto contiene 12 páginas HTML:

- `index.html`: portada
- `habitaciones.html`: listado
- `habitacion-doble-estandar.html`
- `habitacion-doble-superior.html`
- `habitacion-triple.html`
- `habitacion-familiar-con-vistas-al-jardin.html`
- `habitacion-deluxe-doble-con-vistas-al-jardin.html`
- `instalaciones.html`
- `galeria.html`
- `promociones.html`
- `contactos.html`
- `gracias.html`

También incluye `styles.css` (diseño adaptable), `site.js` (contenido y navegación), `netlify.toml`, `robots.txt`, `favicon.svg` y un formulario preparado para Netlify Forms.

## Cómo publicar en Netlify

1. Importa el repositorio `mauricioretamal0101/hotel-vendimia-parador` en Netlify.
2. Selecciona la rama `main`.
3. No es necesario comando de compilación.
4. Directorio de publicación: `.` (raíz). También está especificado en `netlify.toml`.
5. Publica primero en un subdominio temporal `*.netlify.app`.
6. Verifica fotos, enlaces, menú móvil, galería y formularios.

## Antes de conectar el dominio oficial

- **Fotografías y logo:** el prototipo usa recursos de `https://www.hotelvendimiaparador.cl/images/`, alojados en la web antigua. Debemos almacenar nuestros archivos de imagen propios en GitHub o en un servicio de almacenamiento controlado antes de retirar el proveedor anterior.
- **Imágenes correctas:** revisar visualmente que cada archivo corresponda a Parador, no a Boutique, especialmente instalaciones y habitaciones nuevas.
- **Motor de reservas:** todavía no se integra el nuevo motor del channel manager. Los CTA actuales sirven para consultar por WhatsApp. NO usar Reservatio.
- **Formulario:** probar Netlify Forms y confirmar recepción real de consultas. Hasta entonces usar WhatsApp, teléfono o correo.
- **Características:** confirmar que las cinco categorías y características publicadas continúen vigentes; la web antigua todavía declara siete habitaciones en su texto principal.
- **Promociones:** no se muestran tarifas ni descuentos sin confirmar vigencia.
- **SEO:** `noindex` está activado en HTML, headers y `robots.txt`; retirar al lanzamiento, después de revisar canonical y redirecciones.
- **Dominio y correo:** NO modificar `hotelvendimiaparador.cl` o DNS, MX, SPF, DKIM, DMARC hasta comprobar la nueva web y reservas.

## Trabajo futuro en Boutique

Existe otro repositorio, `hotel-vendimia-boutique`. El usuario enviará **su logo definitivo** cuando retome los ajustes. También hay dos fotografías mal asignadas: piscina del Parador usada en el Boutique y piscina del Boutique usada como estacionamiento. El recordatorio está guardado además en el README del Boutique.

**No subir aquí contraseñas, tokens, credenciales ni información de huéspedes.**
