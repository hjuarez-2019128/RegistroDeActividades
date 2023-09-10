String.prototype.replaceAt = function (index, character) { 
    return this.substring(0, index) + character + this.substring(index + character.length); 
}

var listaPalabras = [
    "ANIMAL",
    "ESCUELA",
    "PINGUINO",
    "ESTUDIANTE",
    "COMPUTADORA",
    "ZAPATO",
    "CIUDAD",
    "BOSQUE",
    "FUTBOL",
    "TALLER",
    "PLATAFORMA",
    "TECLADO",
    "CASA",
    "HERMANO"
]

var intentos = 7
var palabraSeleccionada;

function iniciar(){
    //Selecciona una palabra aleatoria de la lista para iniciar el juego
    alert("Juego iniciado");
    const aleatorio = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    //Se almacena la palabra aleatoria en variable global
    palabraSeleccionada = aleatorio;
    //Crear una caja por cada letra de la palabra aleatoria
    for(var inicial=1;inicial<=aleatorio.length;inicial++){
        const caja = document.createElement("div");
        caja.classList.add('cajaStyle');
        caja.setAttribute("id","p"+inicial)
        const elemento = document.getElementById("palabra");
        elemento.appendChild(caja);
        document.getElementById("p"+inicial).innerHTML =  aleatorio[inicial-1];
    }
    //deshabilitar el boton de inicio al iniciar la partida
    const bInicio = document.getElementById("inicio");
    bInicio.disabled = true;
    alert(palabraSeleccionada)
}

function seleccionLetra(x){
    var showAlert = false;
    var conteo = 0
    var palabra = new Array(palabraSeleccionada.length)
    for(var l in palabraSeleccionada){
        conteo = conteo +1
        if(x == palabraSeleccionada[l]){
            const letraResaltada = document.getElementById("p" + conteo);
            letraResaltada.classList.add('letraResaltada');
            desactivarBoton(x);
        } else {
            desactivarBoton(x);

            intentos = intentos -1

            alert(intentos)


            //Pendiente validar intentos fallidos
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            //primero = movimiento horizontal
            //segundo = movimiento vertical
            ctx.moveTo(10,10);
            ctx.lineTo(10,1000);
            // Segundo Elemento linea horizontal
            ctx.moveTo(150,20);
            ctx.lineTo(10,20);
            // Tercera linea  ahorcado
            ctx.moveTo(150,20);
            ctx.lineTo(150,90);
            // Circulo
            ctx.arc(150, 130, 40, 5, 5 * Math.PI);
            // Cuerpo
            // Primera Linea
            ctx.moveTo(150, 270);
            ctx.lineTo(150, 170);
            // Primer Brazo
            ctx.moveTo(90, 250);
            ctx.lineTo(150, 200);

            ctx.stroke();

        }
    }
}

// Función para deshabilitar un botón por su letra
function desactivarBoton(letra) {
    const botones = document.querySelectorAll('.boton-letra');
    botones.forEach(boton => {
        if (boton.textContent === letra) {
            boton.disabled = true; // Deshabilita el botón
        }
    });
}


document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};




