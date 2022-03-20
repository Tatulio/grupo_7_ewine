window.addEventListener('load', function (){

    let nombre = document.querySelector('#nombre')
    let nombreError = document.querySelector('#nombre-error')
    let apellido = document.querySelector('#apellido')
    let apellidoError = document.querySelector('#apellido-error')
    let email = document.querySelector('#email')
    let emailError = document.querySelector('#email-error')

    nombre.focus();

    let errores = []

    nombre.addEventListener('change', function (e){
        if (nombre.value.length < 3){
            nombreError.classList.remove('display-errores')
            nombre.classList.add('errores')
            nombreError.innerText = 'Debe escribir al menos 3 caracteres'
            errores
        } else {
            nombreError.classList.add('display-errores')
            nombre.classList.remove('errores')
            
        }
    })

    apellido.addEventListener('change', function (e){
        if (apellido.value.length < 3){
            apellidoError.classList.remove('display-errores')
            apellido.classList.add('errores')
            apellidoError.innerText = 'Debe escribir al menos 3 caracteres';
        } else {
            apellidoError.classList.add('display-errores')
            apellido.classList.remove('errores')    
        }
    })

    email.addEventListener('change', function (e){
        let valor = email.value  

        let regex = /^[_a-zA-Z0-9-]+((\.[_a-zA-Z0-9-]+)*|(\+[_a-zA-Z0-9-]+)*)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;

        if (!regex.test(valor)) {
            emailError.classList.remove('display-errores')
            email.classList.add('errores')
            emailError.innerText = 'Ingrese un email valido'
            console.log(valor.value)
            if (valor.length < 1){
                emailError.innerText = 'No puede dejar el campo vacio';
            } 
        } else {
            emailError.classList.add('display-errores')
            email.classList.remove('errores')       
        }

       
    })


})