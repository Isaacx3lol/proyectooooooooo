
// Contadores del header
let totalTareas = 6;
let tareasCompletas = 0;

const tareaInput = document.getElementById("tarea-form");
const listaTareas = document.getElementById("lista-tareas");
const tareasTotal = document.getElementById("tareas-total");
const tareasCompletasElement = document.getElementById("tareas-completadas");
const tareasIncompletas = document.getElementById("tareas-incompletas");
const buscador = document.getElementById("buscador");
const botonAgregarTarea = document.getElementById("agregar-tareas");
const tareaForm = document.querySelector(".form");



function actualizarContadores() {
    tareasTotal.textContent = totalTareas;
    tareasCompletasElement.textContent = tareasCompletas;
    tareasIncompletas.textContent = totalTareas - tareasCompletas;
}



function filtrarTareas() {
    const busqueda = buscador.value.toLowerCase();
    const tareas = listaTareas.getElementsByTagName("li");
    for (let i = 0; i < tareas.length; i++) {
        const tareaTexto = tareas[i].textContent.toLowerCase();
        if (tareaTexto.includes(busqueda)) {
            tareas[i].style.display = "list-item";
        } 
        else {
            tareas[i].style.display = "none";
        }
    }
}



function showForm() {
    tareaForm.style.display = "block";
    botonAgregarTarea.style.display = "none";
}




function addTarea() {
    const nuevaTareaInput = tareaForm.querySelector(".formulario");
    const nuevaTarea = nuevaTareaInput.value.trim();
    if (nuevaTarea !== "") {
        const tareaElemento = document.createElement("li");
        tareaElemento.textContent = nuevaTarea;

        const checkIcon = document.createElement("span");
        checkIcon.innerHTML = "&#10004;";
        checkIcon.classList.add("verificar-icon");
        tareaElemento.appendChild(checkIcon);

        const deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "&#128465;";
        deleteIcon.classList.add("borrar-icon");
        tareaElemento.appendChild(deleteIcon);

        listaTareas.appendChild(tareaElemento);
        nuevaTareaInput.value = "";
        totalTareas++;
        cancelForm();
        actualizarContadores();
    }
}



function cancelForm() {
    tareaForm.style.display = "none";
    botonAgregarTarea.style.display = "block";
}




function marcarTareaCompleta(event) {
    const tarea = event.target.parentElement;
    tarea.classList.toggle("completada");
    if (tarea.classList.contains("completada")) {
        tareasCompletas++;
        tarea.style.backgroundColor = "#4CAF50";
        tarea.style.color = "#000000";
    } else {
        tareasCompletas--;
        tarea.style.backgroundColor = "";
        tarea.style.color = "";
    }
    actualizarContadores();
}



function eliminarTarea(event) {
    const tarea = event.target.parentElement;
    if (tarea.classList.contains("completada")) {
        tareasCompletas--;
    }
    tarea.remove();
    totalTareas--;
    actualizarContadores();
}






botonAgregarTarea.addEventListener("click", function() {
    const formulario = document.getElementById("tarea-form");
    formulario.style.display = "flex";
    formulario.querySelector(".formulario").focus();
    botonAgregarTarea.style.display = "none";
});




const botonBusqueda = document.getElementById("boton-buscar");
botonBusqueda.addEventListener("click", filtrarTareas);



listaTareas.addEventListener("click", function (event) {
    if (event.target.classList.contains("verificar-icon")) {
        marcarTareaCompleta(event);
    } else if (event.target.classList.contains("borrar-icon")) {
        eliminarTarea(event);
    }
});


actualizarContadores();























