function circulo(){
    let figura=document.getElementById("figura");
    figura.classList = "";
    figura.classList.toggle("circulo");
   
}
function rectangulo(){
    let figura=document.getElementById("figura");
    figura.classList = "";
    figura.classList.toggle("rectangulo");   
}
function triangulo() {
    let figura = document.getElementById("figura");
    figura.classList = "";
    figura.classList.toggle("triangulo");
}
function girarFigura() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("girando");
  }
  function moverArriba() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("mover-arriba");
  }
  function moverAbajo() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("mover-abajo");
  }
  function moverIzquierda() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("mover-izquierda");
  }
  function moverDerecha() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("mover-derecha");
  }
 
  function ocultarFigura() {
    var figura = document.getElementById("figura");
    if (figura.style.display === "none") {
      figura.style.display = "block";
    } else {
      figura.style.display = "none";
    }
  }
  function mostrarGif() {
    var figura = document.getElementById("figura");
    figura.classList.toggle("figura");
    if (figura.classList.contains("figura")) {
      figura.style.backgroundImage = 'url("video/iori.gif")';
    } else {
      figura.style.backgroundImage = "none";
    }
  }
  function degrade() {
    var figura = document.getElementById('figura');
    
    if (figura.style.background === 'linear-gradient(to right, #ff0000, #00ff00)') {
      figura.style.background = ''; // Elimina el fondo degradado
    } else {
      figura.style.background = 'linear-gradient(to right, #ff0000, #00ff00)'; // Cambia los colores según tus necesidades
    }
}
function panelIzquierdo() {
  const panel = document.querySelector(".panelIzquierdo");
  panel.classList.toggle("activo");
}
  
function panelSuperior() {
  const panelS = document.querySelector(".panelSuperior");
  panelS.classList.toggle("activo");
  }