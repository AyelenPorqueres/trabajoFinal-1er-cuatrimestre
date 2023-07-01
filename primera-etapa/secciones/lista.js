
document.getElementById("botoninputs").addEventListener("click", () => {
    const tarea = document.getElementById("input")


    const contenedor = document.getElementsByClassName("contenedorlista2")[0]
    
   

    plantillaTarea = `<div class="contenedortareas1">
    <div class="contenedortareas2">
        <input type="checkbox" class="casillaverificacion">
        <p class="tareas"> ${tarea.value}</p>
    </div>
    <div class="botoneliminartareacont">
        <button class="botoneliminar"><i class="fa-solid fa-trash-can"
                style="color: #ea1010;"></i></button>

    </div>

</div>`
    contenedor.innerHTML += plantillaTarea
    tarea.value = ""

})


function eliminarTarea (event){
    let botoneliminar = event.target;
    botoneliminar.parentElement.parentElement.remove();
}

