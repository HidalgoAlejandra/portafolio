/* Tooltips en boton de sección Contacto */
var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
/* Al hacer click en boton enviarContacto de seccion Contacto ,nos aparecera un alert */
$("#enviarcontacto").click(function (e) {
	e.preventDefault();
	alert("El Contacto fue enviado correctamente...");
});
/* Al hacer doble click en parrafo de seccion Quienes Somos, se convierte en rojo*/
$(".quien").dblclick(function(){
    $(this).css({
    "color": "red",
    });
    });
/* Toggle, al hacer click en titulo de las card de la sección Destacados, desaparece y aparece la descripcion */
$(".card-title").click(function () {
	$(".card-text").toggle();
});
/* Efecto de smooth scrolling al hacer clic sobre nav-link, del menu, el desplazamiento es retardado*/
$(".nav-link").click(function (event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$("html, body").animate({
			scrollTop: $(hash).offset().top
		}, 1000); // primero probar con 0 y aumente de 1000 en 1000 para ver diferencia
	}
});