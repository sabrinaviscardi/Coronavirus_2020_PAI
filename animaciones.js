// Primera Página
function startDrag(e) {
				// determine event object
        console.log("moviendo");
				if (!e) {
					var e = window.event;
			  }
          if(e.preventDefault) e.preventDefault();

				// IE uses srcElement, others use target
				targ = e.target ? e.target : e.srcElement;

				if (targ.className != 'ilu_1') {return};
				// calculate event X, Y coordinates
					offsetX = e.clientX;
					offsetY = e.clientY;

				// assign default values for top and left properties
				if(!targ.style.left) { targ.style.left='0px'};
				if (!targ.style.top) { targ.style.top='0px'};

				// calculate integer values for top and left
				// properties
				coordX = parseInt(targ.style.left);
				coordY = parseInt(targ.style.top);
				drag = true;
				// move div element
				document.ontouchmove=dragDiv;
					document.onmousemove=dragDiv;
          return false;
	}
			function dragDiv(e) {

				if (!drag) {return};
				if (!e) { var e= window.event};
				// var targ=e.target?e.target:e.srcElement;
				// move div element
				targ.style.left=coordX+e.clientX-offsetX+'px';
				targ.style.top=coordY+e.clientY-offsetY+'px';
				return false;
			}

			function stopDrag() {
				//event.preventDefault();
				//console.log("no ta entrando");
				drag=false;
        return false;
			}

       window.onload = function() {
			// 	document.onmousedown = startDrag;
			 	document.onmouseup = stopDrag;
			 }

function PutMask1() {
  document.getElementById("persona1").src = "ilustraciones/ilustraciones-12.svg";
  Protected();
}
function PutMask2() {
  document.getElementById("persona2").src = "ilustraciones/ilustraciones-13.svg";
  Protected();
}
function Protected() {
  let per1 = document.getElementById("persona1").src.slice(-6,) == "12.svg";
  let per2 = document.getElementById("persona2").src.slice(-6,) == "13.svg";
  //console.log(document.getElementById("persona1").src.slice(-6,));
  if (per1 && per2){
    document.getElementById("clickmask").style.display = "none";
  }
  else {
    document.getElementById("clickmask").style.display = "block";
  }
}

// Segunda Página

function Pagina2(){
  let pib1 = document.getElementById('pibe1');
  pib1.classList.add("animation_1");
  pib1.classList.remove("hoveranimation");
  let pib2 = document.getElementById('pibe2');
  pib2.classList.add("animation_2");
  pib2.classList.remove("hoveranimation");
  document.getElementById("metroymedio").style.display = "block";
  document.getElementById("boton").style.display = "none";
}

// Tercera página

function gel() {
  document.getElementById("oculto_3").style.display = "block";
  document.getElementById("clickgel").style.display = "none";
}

function desactivate_gel() {
  document.getElementById("oculto_3").style.display = "none";
  document.getElementById("clickgel").style.display = "block";
  return false;
}
