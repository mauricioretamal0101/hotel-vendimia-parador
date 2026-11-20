/* Hotel Vendimia Parador · primera versión de prueba
   Los recursos fotográficos se cargan del sitio original hasta migrarlos.
   NO hay motor de reservas: solo consultas por WhatsApp hasta validar el nuevo proveedor. */
(function(){
  "use strict";
  var host = "https://www.hotelvendimiaparador.cl/images/";
  var email = "contacto@hotelvendimia.cl";
  var phone = "+56 9 9449 2225";
  var phone2 = "+56 72 282 2464";
  var phone3 = "+56 9 6839 1678";
  var address = "Camino a Los Boldos s/n, Santa Cruz, Región de O’Higgins, Chile";
  var whatsapp = "56994492225";
  var imgUrl = function(file){ return host + file; };
  var inquiry = function(subject){ return "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent("Hola, quisiera consultar disponibilidad en Hotel Vendimia Parador" + (subject ? " para " + subject : "") + ". Gracias."); };
  var photo = function(file,alt,classes,loading){ return '<img src="' + imgUrl(file) + '" loading="' + (loading || "lazy") + '" alt="' + alt + '" class="' + (classes || "") + '" onerror="this.onerror=null;this.style.visibility=\'hidden\';">'; };
  var consult = function(title,subject,extra){return '<a class="btn ' + (extra||"") + '" href="' + inquiry(subject||"") + '" target="_blank" rel="noopener noreferrer">' + title + '</a>';};
  var rooms = [
    {
      path:"habitacion-doble-estandar.html", title:"Habitación Doble Estándar",
      file:"img-habitacion-doble-estandar01.jpg",
      imgs:["img-habitacion-doble-estandar01.jpg","img-habitacion-doble-estandar02.jpg","img-habitacion-doble-estandar03.jpg","img-habitacion-doble-estandar04.jpg","img-habitacion-doble-estandar05.jpg"],
      summary:"País, Pinot Noir, Semillón y Moscatel. Habitaciones íntimas decoradas con objetos de antiguas casonas chilenas.",
      text:"Habitaciones 1 País, 2 Pinot Noir, 3 Semillón y 4 Moscatel. Decoradas con piezas tradicionales recuperadas de antiguas casonas, ofrecen un ambiente acogedor de inspiración campestre.",
      amenities:["2 huéspedes; opción de una persona adicional con costo","1 cama king","Baño privado","Wi-Fi","TV por cable","Aire acondicionado","Minibar"]
    },
    {
      path:"habitacion-doble-superior.html",title:"Habitación Doble Superior",
      file:"img-habitacion-doble-superior01.jpg",
      imgs:["img-habitacion-doble-superior01.jpg","img-habitacion-doble-superior02.jpg","img-habitacion-doble-superior03.jpg","img-habitacion-doble-superior04.jpg","img-habitacion-doble-superior05.jpg"],
      summary:"Carmenere y Cabernet Sauvignon. Espacios amplios que conservan detalles del estilo tradicional chileno.",
      text:"Habitación 6 Carmenere y habitación 7 Cabernet Sauvignon. Su mobiliario y objetos de época ofrecen ambientes cálidos para descansar en Santa Cruz.",
      amenities:["Habitación 6: capacidad base de 2, hasta 2 huéspedes extra con costo","Habitación 7: capacidad base de 2, máximo 3 según configuración","1 cama king","Baño privado","Wi-Fi","TV por cable","Aire acondicionado","Minibar"]
    },
    {
      path:"habitacion-triple.html",title:"Habitación Triple",
      file:"img-habitacion-triple01.jpg",
      imgs:["img-habitacion-triple01.jpg","img-habitacion-triple02.jpg","img-habitacion-triple03.jpg","img-habitacion-triple04.jpg","img-habitacion-triple05.jpg"],
      summary:"Habitación 5 Malbec. Descanso familiar con muebles de época y auténtico carácter campestre.",
      text:"La habitación 5 Malbec conserva el encanto de las casonas antiguas: madera, detalles de época y una atmósfera íntima, pensada para compartir y descansar.",
      amenities:["3 huéspedes; máximo 4 con costo adicional","1 cama king y cama complementaria según configuración","Baño privado","Wi-Fi","TV por cable","Aire acondicionado","Minibar"]
    },
    {
      path:"habitacion-familiar-con-vistas-al-jardin.html",title:"Habitación Familiar con Vistas al Jardín",
      file:"img-habitacion-familiar-con-vistas-al-jardin01.jpg",
      imgs:["img-habitacion-familiar-con-vistas-al-jardin01.jpg","img-habitacion-familiar-con-vistas-al-jardin02.jpg","img-habitacion-familiar-con-vistas-al-jardin03.jpg"],
      summary:"Para grupos o familias, con cama queen, cama individual y vista al jardín.",
      text:"Un espacio preparado para descansar en familia, con vistas a los jardines y una distribución práctica de una cama queen y una cama individual.",
      amenities:["1 cama queen y 1 cama individual","Vistas al jardín","Baño privado","Wi-Fi","TV por cable","Aire acondicionado","Minibar"]
    },
    {
      path:"habitacion-deluxe-doble-con-vistas-al-jardin.html",title:"Deluxe Double con Vistas al Jardín",
      file:"img-habitacion-deluxe-doble-con-vistas-al-jardin01.jpg",
      imgs:["img-habitacion-deluxe-doble-con-vistas-al-jardin01.jpg","img-habitacion-deluxe-doble-con-vistas-al-jardin02.jpg","img-habitacion-deluxe-doble-con-vistas-al-jardin03.jpg","img-habitacion-deluxe-doble-con-vistas-al-jardin04.jpg","img-habitacion-deluxe-doble-con-vistas-al-jardin05.jpg","img-habitacion-deluxe-doble-con-vistas-al-jardin06.jpg"],
      summary:"Una propuesta especial para parejas: cama king, comodidad y vistas hacia nuestros jardines.",
      text:"Habitación de categoría Deluxe Double, orientada al jardín. Cuenta con cama king y una atmósfera tranquila para una estadía en pareja, con climatización e insonorización según las características publicadas por el hotel.",
      amenities:["1 cama king","Vistas al jardín","Insonorización","Baño privado","Wi-Fi","TV por cable","Aire acondicionado","Minibar"]
    }
  ];
  var facilities = [
    {title:"Piscina", file:"img-instalaciones05.jpg", desc:"Disfruta de un momento de descanso rodeado de áreas verdes."},
    {title:"Terraza", file:"img-instalaciones02.jpg", desc:"Un lugar para compartir junto al aire fresco de Colchagua."},
    {title:"Salones", file:"img-instalaciones03.jpg", desc:"Ambientes de inspiración campestre para conversar y relajarse."},
    {title:"Estacionamiento", file:"img-instalaciones04.jpg", desc:"Espacio de estacionamiento para nuestros huéspedes."}
  ];
  var galleryFiles = ["img-galeria022.jpg","img-galeria023.jpg","img-galeria024.jpg","img-galeria01.jpg","img-galeria02.jpg","img-galeria03.jpg","img-galeria04.jpg","img-galeria05.jpg","img-galeria06.jpg","img-galeria07.jpg","img-galeria08.jpg","img-galeria09.jpg","img-galeria010.jpg","img-galeria011.jpg","img-galeria012.jpg","img-galeria013.jpg","img-galeria014.jpg","img-galeria015.jpg","img-galeria016.jpg","img-galeria017.jpg","img-galeria018.jpg","img-galeria019.jpg","img-galeria020.jpg","img-galeria021.jpg"];
  function head(kicker,title,desc){return '<div class="section-head"><span class="kicker">' + kicker + '</span><h2>' + title + '</h2><div class="separator"></div>' + (desc?'<p>'+desc+'</p>':'') + '</div>';}
  function banner(title,crumb){return '<section class="page-hero" style="background-image:linear-gradient(110deg,rgba(24,43,30,.87),rgba(26,42,27,.45)),url(\''+imgUrl("slider-4.jpg")+'\')"><div><p class="eyebrow">Hotel Vendimia Parador · Santa Cruz</p><h1>'+title+'</h1><div class="crumb"><a href="index.html">Inicio</a> / '+(crumb||title)+'</div></div></section>';}
  function card(r){return '<article class="card">'+photo(r.file,r.title+' de Hotel Vendimia Parador','card-photo')+'<div class="card-body"><h3>'+r.title+'</h3><p>'+r.summary+'</p><a class="text-link" href="'+r.path+'">Ver habitación →</a></div></article>';}
  function benefits(){var x=[["☕","Desayuno buffet","Incluido en la estadía"],["◷","Check-in","Desde las 16:00 horas"],["⌂","Check-out","Hasta las 12:00 horas"],["✓","Confirmación","Consulta las condiciones vigentes"]];return '<div class="benefits">'+x.map(function(a){return '<div class="benefit"><div class="benefit-icon" aria-hidden="true">'+a[0]+'</div><h4>'+a[1]+'</h4><p>'+a[2]+'</p></div>';}).join('')+'</div>';}
  function facilityTiles(list){return '<div class="facilities">'+list.map(function(f){return '<a href="instalaciones.html" class="facility">'+photo(f.file,f.title+' en Hotel Vendimia Parador')+'<h3>'+f.title+'</h3></a>';}).join('')+'</div>';}
  function cta(){return '<section class="cta-band"><div class="wrap"><span class="eyebrow">Descubre Santa Cruz y el Valle de Colchagua</span><h2>Vive la experiencia Vendimia Parador</h2><p>Hospitalidad, jardines y un descanso con identidad local.</p>'+consult("Consultar disponibilidad","","btn-light")+'</div></section>';}
  function home(){return '<section class="hero">'+photo("slider-4.jpg","Jardín y áreas verdes de Hotel Vendimia Parador","hero-bg","eager")+'<div class="wrap hero-content"><span class="eyebrow">Santa Cruz · Valle de Colchagua</span><h1>Hotel Vendimia<br><span>Parador</span></h1><p>Un refugio campestre entre jardines, tradición y hospitalidad. Descansa y descubre la esencia de Colchagua.</p><div class="hero-actions"><a class="btn btn-light" href="habitaciones.html">Conoce nuestras habitaciones</a>'+consult("Consultar disponibilidad")+'</div></div></section>'+
  '<section class="section"><div class="wrap intro-split"><div class="intro-images">'+photo("img-home01.jpg","Acceso de Hotel Vendimia Parador en Santa Cruz")+'</div><div class="intro-copy"><div class="property-ribbon">Nuestra esencia</div><h2>Una casa de campo para desconectarse</h2><p>Ubicado aproximadamente a 1,5 km del centro de Santa Cruz, Hotel Vendimia Parador es una casa de campo adaptada como hotel, con cómodas habitaciones y atención personalizada.</p><p>El patrimonio local, los jardines y la tranquilidad nos acompañan en cada estadía.</p><a class="text-link" href="instalaciones.html">Descubre nuestros espacios →</a></div></div></section>'+
  '<section class="section alt"><div class="wrap">'+head("Reserva directa","Beneficios de hospedarse con nosotros","Conoce algunos detalles importantes antes de tu visita.")+benefits()+'<div class="center">'+consult("Consultar una estadía")+'</div></div></section>'+
  '<section class="section"><div class="wrap">'+head("Un rincón especial","Instalaciones","Espacios para disfrutar de la calma y la naturaleza.")+facilityTiles(facilities.slice(0,4))+'</div></section>'+
  '<section class="section alt"><div class="wrap">'+head("Descanso campestre","Nuestras habitaciones","Cada habitación conserva una atmósfera propia y detalles que evocan la tradición del valle.")+'<div class="room-grid">'+rooms.map(card).join('')+'</div></div></section>'+
  '<section class="section"><div class="wrap">'+head("A pocos minutos","Descubre Santa Cruz","Museos, gastronomía y viñas que hacen único al Valle de Colchagua.")+'<div class="interest-grid"><div class="interest"><span aria-hidden="true">⌂</span><strong>Museos</strong><p class="muted">Historia y cultura local</p></div><div class="interest"><span aria-hidden="true">♧</span><strong>Viñas y enoturismo</strong><p class="muted">Tradiciones del vino</p></div><div class="interest"><span aria-hidden="true">☼</span><strong>Gastronomía</strong><p class="muted">Sabores de Colchagua</p></div></div></div></section>'+cta();}
  function roomsPage(){return banner("Habitaciones")+'<section class="section"><div class="wrap">'+head("Acogedoras y únicas","Nuestras habitaciones","Explora las cinco categorías actualmente publicadas para Hotel Vendimia Parador.")+'<div class="room-grid">'+rooms.map(card).join('')+'</div><p class="notice" style="margin-top:34px">Las capacidades y equipamientos se basan en la información pública del hotel y deben confirmarse al realizar la reserva.</p></div></section>'+cta();}
  function roomPage(room){
    var more=rooms.filter(function(r){return r.path!==room.path;}).slice(0,3);
    return banner(room.title,'<a href="habitaciones.html">Habitaciones</a> / '+room.title)+
      '<section class="section"><div class="wrap room-detail"><div class="room-images">'+room.imgs.map(function(file,i){return photo(file,room.title+', fotografía '+(i+1),'zoomable');}).join('')+'</div><div><span class="kicker">Habitaciones con personalidad</span><h2>'+room.title+'</h2><p class="muted">'+room.text+'</p><h3>Servicios y características</h3><ul class="amenities">'+room.amenities.map(function(item){return '<li>'+item+'</li>';}).join('')+'</ul>'+consult("Consultar esta habitación",room.title)+'<p class="muted" style="font-size:.85rem;margin-top:15px">Consulta disponibilidad y valores. El nuevo motor de reservas será integrado cuando esté confirmado.</p></div></div></section>'+
      '<section class="section alt"><div class="wrap">'+head("Otras alternativas","Más habitaciones","")+'<div class="room-grid">'+more.map(card).join('')+'</div></div></section>';
  }
  function facilitiesPage(){return banner("Instalaciones")+'<section class="section"><div class="wrap">'+head("Nuestra casa de campo","Espacios para disfrutar","Conoce las instalaciones y la naturaleza que rodean Hotel Vendimia Parador.")+facilityTiles(facilities)+'</div></section>'+cta();}
  function galleryPage(){return banner("Galería")+'<section class="section"><div class="wrap">'+head("Conoce el Parador","Galería fotográfica","Un recorrido por los jardines, las habitaciones y las instalaciones del hotel.")+'<div class="gallery">'+galleryFiles.map(function(f,i){return photo(f,"Hotel Vendimia Parador, fotografía "+(i+1),"zoomable");}).join('')+'</div></div></section>';}
  function promotionsPage(){var all=["Promoción especial","Disfrute en familia","Último minuto","Escapada romántica","Plan fin de semana","Estadía larga"];return banner("Promociones")+'<section class="section"><div class="wrap">'+head("Momentos para disfrutar","Promociones","Contáctanos para conocer las promociones vigentes y sus condiciones.")+'<div class="promos">'+all.map(function(p){return '<div class="promo"><span class="kicker">Hotel Vendimia Parador</span><h3>'+p+'</h3><p>Consulta directamente condiciones, fechas y disponibilidad.</p><a class="text-link" target="_blank" rel="noopener noreferrer" href="'+inquiry(p)+'">Consultar promoción →</a></div>';}).join('')+'</div><p class="notice" style="margin-top:30px">No se publican descuentos ni tarifas sin validar su vigencia con la administración.</p></div></section>';}
  function contactPage(){return banner("Contacto")+'<section class="section"><div class="wrap">'+head("Estamos para ayudarte","Hablemos","Respondemos consultas de alojamiento, eventos y estadías en Santa Cruz.")+'<div class="contact-layout"><div><h3>Escríbenos</h3><form name="contacto-parador" method="POST" action="/gracias.html" data-netlify="true" netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contacto-parador"><p class="hide"><label>No completar <input name="bot-field"></label></p><label class="field"><span>Nombre</span><input name="nombre" autocomplete="name" maxlength="100" required></label><label class="field"><span>Correo electrónico</span><input name="email" type="email" autocomplete="email" maxlength="160" required></label><label class="field"><span>Asunto</span><input name="asunto" maxlength="160" required></label><label class="field"><span>Mensaje</span><textarea name="mensaje" maxlength="3000" required></textarea></label><button type="submit" class="btn">Enviar consulta</button></form><p class="muted" style="font-size:.82rem">Formulario pendiente de prueba en Netlify Forms: utiliza WhatsApp o correo hasta que se confirme su funcionamiento.</p></div><div><h3>Información de contacto</h3><p>Queremos ayudarte a organizar tu próxima visita.</p><div class="contact-block"><h4>Dirección</h4><p>'+address+'</p></div><div class="contact-block"><h4>WhatsApp</h4><p><a href="'+inquiry('')+'" target="_blank" rel="noopener noreferrer">'+phone+'</a></p></div><div class="contact-block"><h4>Otros teléfonos</h4><p>'+phone2+' / '+phone3+'</p></div><div class="contact-block"><h4>Correo</h4><p><a href="mailto:'+email+'">'+email+'</a></p></div><h3>Ubicación</h3><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Hotel+Vendimia+Parador+Camino+a+Los+Boldos+Santa+Cruz+Chile" target="_blank" rel="noopener noreferrer">Ver en Google Maps →</a></div></div></div></section>';}
  function thanksPage(){return banner("Gracias")+'<section class="section"><div class="wrap center"><h2>Gracias por tu mensaje</h2><p>Tu consulta se ha enviado a través del formulario del sitio. Si necesitas respuesta inmediata, contáctanos por WhatsApp.</p>'+consult("Abrir WhatsApp")+' <a class="btn" href="index.html">Volver al inicio</a></div></section>';}
  function header(path){
    var nav=[["Inicio","index.html"],["Habitaciones","habitaciones.html"],["Instalaciones","instalaciones.html"],["Galería","galeria.html"],["Promociones","promociones.html"],["Contacto","contactos.html"]];
    return '<div class="top-strip"><div class="wrap"><span><a href="tel:+56994492225">'+phone+'</a> &nbsp; · &nbsp; <a href="mailto:'+email+'">'+email+'</a></span><span>Camino a Los Boldos · Santa Cruz, Chile</span></div></div><header class="main-header"><div class="wrap nav-wrap"><a href="index.html" class="brand" aria-label="Hotel Vendimia Parador, ir al inicio"><span class="brand-symbol" aria-hidden="true">❦</span><span class="brand-copy"><strong>Vendimia</strong><small>Parador · Santa Cruz</small></span></a><button class="menu-toggle" aria-label="Abrir menú" aria-controls="primary-nav" aria-expanded="false">☰</button><nav class="nav" id="primary-nav" aria-label="Navegación principal">'+nav.map(function(n){return '<a href="'+n[1]+'" class="'+(path===n[1]||(path.indexOf("habitacion-")===0&&n[1]==="habitaciones.html")?"active":"")+'">'+n[0]+'</a>';}).join('')+'<a class="btn btn-sm" target="_blank" rel="noopener noreferrer" href="'+inquiry("")+'">Consultar reserva</a></nav></div></header>';
  }
  function footer(){
    return '<footer class="footer"><div class="wrap"><div class="footer-grid"><div><h3>Hotel Vendimia Parador</h3><p>Patrimonio, naturaleza y hospitalidad en el Valle de Colchagua.</p><p>'+address+'</p></div><div><h3>Explorar</h3><ul><li><a href="habitaciones.html">Habitaciones</a></li><li><a href="instalaciones.html">Instalaciones</a></li><li><a href="galeria.html">Galería</a></li><li><a href="promociones.html">Promociones</a></li><li><a href="contactos.html">Contacto</a></li></ul></div><div><h3>Contáctanos</h3><p><a href="tel:+56994492225">'+phone+'</a></p><p><a href="mailto:'+email+'">'+email+'</a></p><p><a href="'+inquiry("")+'" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a></p></div></div><div class="footer-bottom">© '+new Date().getFullYear()+' Hotel Vendimia Parador · Santa Cruz, Chile</div></div></footer><a href="'+inquiry("")+'" class="float-wa" target="_blank" rel="noopener noreferrer" aria-label="Consultar Hotel Vendimia Parador por WhatsApp">W</a>';
  }
  function lightbox(url,alt){
    var overlay=document.createElement("div");overlay.className="lightbox";overlay.setAttribute("role","dialog");overlay.setAttribute("aria-modal","true");overlay.setAttribute("aria-label","Vista ampliada de fotografía");
    var img=document.createElement("img");img.src=url;img.alt=alt||"Fotografía ampliada";
    var close=document.createElement("button");close.type="button";close.setAttribute("aria-label","Cerrar fotografía");close.textContent="×";
    overlay.appendChild(img);overlay.appendChild(close);document.body.appendChild(overlay);close.focus();
    var remove=function(){overlay.remove();document.removeEventListener("keydown",esc);};var esc=function(e){if(e.key==="Escape")remove();};
    overlay.addEventListener("click",function(e){if(e.target!==img)remove();});document.addEventListener("keydown",esc);
  }
  function main(){
    var path=location.pathname.split("/").pop()||"index.html";
    var fn={"index.html":home,"habitaciones.html":roomsPage,"instalaciones.html":facilitiesPage,"galeria.html":galleryPage,"promociones.html":promotionsPage,"contactos.html":contactPage,"gracias.html":thanksPage}[path];
    var room=rooms.filter(function(r){return r.path===path;})[0];
    var output=room?roomPage(room):(fn||home)();
    document.getElementById("site-header").innerHTML=header(path);
    document.getElementById("content").innerHTML=output;
    document.getElementById("site-footer").innerHTML=footer();
    var toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
    toggle.addEventListener("click",function(){var open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰";});
    document.querySelectorAll(".zoomable").forEach(function(img){img.tabIndex=0;img.setAttribute("role","button");img.setAttribute("aria-label","Ampliar imagen");img.addEventListener("click",function(){lightbox(img.src,img.alt);});img.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();lightbox(img.src,img.alt);}});});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",main);else main();
})();