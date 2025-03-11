const preguntas = [
    {
        pregunta: "¿Cuál de las siguientes festividades es considerada la más importante del Carnaval de Barranquilla?",
        opciones: ["La Batalla de Flores", "El Desfile de Silleteros", "La Feria de Cali", "El Festival Vallenato"],
        respuesta: "La Batalla de Flores"
    }
];

let preguntaActual = 0;
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");

function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.pregunta;
    opcionesDiv.innerHTML = "";
    mensaje.textContent = "";

    pregunta.opciones.forEach((opcion) => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(button, opcion, pregunta.respuesta);
        opcionesDiv.appendChild(button);
    });
}

function verificarRespuesta(boton, seleccion, respuestaCorrecta) {
    if (seleccion === respuestaCorrecta) {
        boton.classList.add("correcto");
        mensaje.textContent = "✅ ¡Respuesta correcta!";
        mensaje.style.color = "green";
    } else {
        boton.classList.add("incorrecto");
        mensaje.textContent = "❌ Respuesta incorrecta. Inténtalo de nuevo.";
        mensaje.style.color = "red";
    }
}

cargarPregunta();
