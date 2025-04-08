let preguntas = [
    { pregunta: "¿Cuál es el Ríoooo más largo de Colombia?", opciones: ["A. Río Magdalena", "B. Río Orinoco", "C. Río Cauca", "D. Río Bogotá"], respuesta: "A. Río Magdalena" },
    { pregunta: "¿En qué año ganó Colombia la Copa América?", opciones: ["A. 1999", "B. 2001", "C. 2003", "D. 2005"], respuesta: "B. 2001" },
    { pregunta: "¿Qué océanos rodean a Colombia?", opciones: ["A. Atlántico y Ártico", "B. Pacífico y Atlántico", "C. Índico y Atlántico", "D. Solo el Pacífico"], respuesta: "B. Pacífico y Atlántico" },
    { pregunta: "¿Qué escritor colombiano ganó el Premio Nobel de Literatura en 1982?", opciones: ["A. Álvaro Mutis", "B. Jorge Isaacs", "C. Gabriel García Márquez", "D. William Ospina"], respuesta: "C. Gabriel García Márquez" },
    {pregunta: "¿Cuál es el carnaval más importante de Colombia?", opciones: ["A. Carnaval de Barranquilla", "B. Carnaval de Negros y Blancos", "C. Feria de Cali", "D. Festival Vallenato"], respuesta: "A. Carnaval de Barranquilla" },
    {pregunta: "¿Cuál es el departamento más grande de Colombia en extensión?", opciones:["A. Antioquia", "B. Vichada", "C. Amazonas", "D. Meta"], respuesta: "C. Amazonas"},
    {pregunta:"¿Cuál es el ave nacional", opciones: ["A. Cóndor de los Andes", "B. Águila Harpia", "C. Buhó Real", "D. Tucán"], respuesta: "A. Cóndor de los Andes"},
    {pregunta:"Cuál de estas es una de las Siete Maravillas de Colombia", opciones: ["A. Catedra de Sal de Zipaquira", "B. Torre Complatría", "C. Teatro Colón", "D. Desierto de la Tatacoa"], respuesta: "A. Catedra de Sal de Zipaquira"},
    {pregunta: "¿Qué héroe de la independencia es conocido como 'El Hombre de las Leyes'?", opciones: ["A. Simon Bolivar", "B. Francisco de Paula Santander", "C. Antonio Nariño", "D. Camilo Torres"], respuesta:"B. Francisco de Paula Santander"},
    {pregunta: "¿En qué ciudad colombiana se encuentra la escultura 'El Gato del Río'?", opciones: ["A. Medellín", "B. Bogotá", "C. Cali", "D. Barranquilla"], respuesta: "C. Cali"}

];

let indicePregunta = 0;
let nombreUsuario = "";
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

function iniciarTrivia() {
    document.getElementById("pantallaInicio").classList.add("hidden");
    document.getElementById("pantallaNombre").classList.remove("hidden");
}

function guardarNombre() {
    nombreUsuario = document.getElementById("nombreUsuario").value.trim();
    if (nombreUsuario !== "") {
        document.getElementById("pantallaNombre").classList.add("hidden");
        document.getElementById("pantallaTrivia").classList.remove("hidden");
        mostrarPregunta();
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

function mostrarPregunta() {
    if (indicePregunta < preguntas.length) {
        let preguntaActual = preguntas[indicePregunta];
        document.getElementById("preguntaTexto").innerText = preguntaActual.pregunta;

        let opcionesHTML = "";
        preguntaActual.opciones.forEach(opcion => {
            opcionesHTML += `<button class="opcion" onclick="verificarRespuesta('${opcion}')">${opcion}</button>`;
        });

        document.getElementById("opciones").innerHTML = opcionesHTML;
        document.getElementById("mensaje").classList.add("hidden");
    } else {
        mostrarResultados();
    }
}

function verificarRespuesta(opcionSeleccionada) {
    let preguntaActual = preguntas[indicePregunta];
    let botones = document.querySelectorAll(".opcion");

    botones.forEach(btn => {
        if (btn.innerText === preguntaActual.respuesta) {
            btn.classList.add("correcto");
        } else if (btn.innerText === opcionSeleccionada) {
            btn.classList.add("incorrecto");
        }
        btn.disabled = true;
    });

    if (opcionSeleccionada === preguntaActual.respuesta) {
        respuestasCorrectas++;
    } else {
        respuestasIncorrectas++;
    }

    setTimeout(() => {
        indicePregunta++;
        mostrarPregunta();
    }, 1500);
}

function mostrarResultados() {
    document.getElementById("pantallaTrivia").classList.add("hidden");
    document.getElementById("pantallaResultados").classList.remove("hidden");

    document.getElementById("resultadoTexto").innerHTML = `
        <p>${nombreUsuario}, terminaste la trivia.</p>
        <p>✅ Correctas: <strong>${respuestasCorrectas}</strong></p>
        <p>❌ Incorrectas: <strong>${respuestasIncorrectas}</strong></p>
    `;
}

function reiniciarTrivia() {
    indicePregunta = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;

    document.getElementById("pantallaResultados").classList.add("hidden");
    document.getElementById("pantallaInicio").classList.remove("hidden");
}
