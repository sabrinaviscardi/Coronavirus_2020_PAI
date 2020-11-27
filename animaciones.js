// Primera Página

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
