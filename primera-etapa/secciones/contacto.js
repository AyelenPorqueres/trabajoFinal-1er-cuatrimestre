const botonenviar = document.getElementById ("boton-enviar")
const contacto = document.getElementById("contactos")
const nombre = document.getElementById ("nombre")
const apellido = document.getElementById ("apellido")
const email = document.getElementById ("email")


function campoNombre(){
    const valorNombre = nombre.value.trim() ;
    if(valorNombre == ""){
        document.getElementById("error-nombre").innerHTML = "El campo nombre es requerido";
        nombre.classList.add('is-invalid');
    }else if(valorNombre.length < 6 ){
        document.getElementById ("error-nombre").innerHTML = "El campo nombre debe tener más de 6 caracteres";
        nombre.classList.add('is-invalid');
    }else{
        document.getElementById ("error-nombre").innerHTML = "";
        nombre.classList.remove('is-invalid');
    }
}

function campoApellido(){
    const valorApellido = apellido.value.trim() ;
    if(valorApellido == ""){
        document.getElementById("error-apellido").innerHTML = "El campo apellido es requerido";
        apellido.classList.add('is-invalid');
    }else{
        document.getElementById ("error-apellido").innerHTML = "";
        apellido.classList.remove('is-invalid');
    }
}

function campoEmail(){
    const valorEmail = email.value. trim();
    if(valorEmail == ""){
        document.getElementById("error-email").innerHTML = "El campo email es requerido";
        email.classList.add('is-invalid');
    }else{
        document.getElementById ("error-email").innerHTML = "";
        email.classList.remove('is-invalid');
    }
}

contacto.addEventListener ("click", validarFormulario);
botonenviar.addEventListener ("click", resetearFormulario);

function validarFormulario (e){
     e.preventDefault();
    
    campoNombre();
    campoApellido();
    campoEmail();
    
}


function resetearFormulario(){
    console.log("formulario enviado")
    contacto.reset();
}




  
    


