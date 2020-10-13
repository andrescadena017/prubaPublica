/*EJEMPLO DE GEOLOCALIZACION*/

function iniciar() {
	var boton = document.getElementById("Obtener");
	boton.addEventListener('click', obtenerPos, false);
}

function obtenerPos () {
		navigator.geolocation.getCurrentPosition(mostar, errores);
}

function mostar(posicion) {
	var ubicacion = document.getElementById('ubicacion');
	var datos = '';
	datos = "Latitud: " + posicion.coords.latitude + '<br>' ;
	datos += "Longitud " + posicion.coords.longitude + '<br>' ;
	datos += "Exactitud " + posicion.coords.accuracy + 'mts <br>' ;
	ubicacion.innerHTML = datos;

}
 function errores(error) {
 	alert ("error: " +error.code + ' ' + error.message);
 }

window.addEventListener('load', iniciar, false);