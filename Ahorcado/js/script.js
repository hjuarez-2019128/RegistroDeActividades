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
    conteo = 0
    var palabra = new Array(palabraSeleccionada.length)

    for(var l in palabraSeleccionada){
        conteo = conteo +1
        if(x == palabraSeleccionada[l]){
        } else {
        }
    }

}