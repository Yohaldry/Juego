document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 40;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*1000);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 40) {
   	alert("Felicidades has Ganado");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("Que pena por ti, debes mejorar para ganar en la siguiente ronda");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);