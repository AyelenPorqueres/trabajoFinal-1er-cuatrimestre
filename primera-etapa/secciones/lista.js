
document.getElementById("botoninputs").addEventListener("click", () => {
    const tarea = document.getElementById("input")


    const contenedor = document.getElementsByClassName("contenedorlista2")[0]
    
   

    plantillaTarea = 
    ` <div class="contenedortareas1" >

       
       <input type= "checkbox" id="checkbox1" class="casillaverificacion listatarea"  onchange="cambiarColorLi(this) " onclick="agregarAtributoCheck(event)"> 
      
       <label class="tareas">${tarea.value}  </label>
       
       <button class="botoneliminar botoneliminartareacont" onclick="eliminarTarea(event)" ><i class="fa-solid fa-trash-can" style="color: #ea1010;"></i></button>
    </div>`

    if(tarea.value==""){
        document.getElementById("error-tareavacia").innerHTML = "Se debe ingresar una tarea";
       
    }else{
        contenedor.innerHTML += plantillaTarea
        document.getElementById("error-tareavacia").innerHTML = "";
        tarea.value = "";
    }

    
    

})

function eliminarTarea (event){
    let botoneliminar = event.target;
    botoneliminar.parentElement.parentElement.remove();
}

function cambiarColorLi(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
      li.style.backgroundColor = ' rgb(88, 165, 88)'; // Cambiar a color verde cuando está marcado
    } else {
      li.style.backgroundColor = 'white'; // Restaurar el color por defecto cuando está desmarcado
    }
  }

  const agregarAtributoCheck = (event) => {
    const checkbox = event.target;
    if (checkbox.hasAttribute("checked") == false) {
        checkbox.setAttribute("checked","true");
    } else {
        checkbox.removeAttibute("checked");
    }
}
  

        
    








