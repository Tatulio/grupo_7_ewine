window.addEventListener('load', function (){

    let nombre = document.querySelector('#nombre')
    let nombreError = document.querySelector('#nombre-error')
    let apellido = document.querySelector('#apellido')
    let apellidoError = document.querySelector('#apellido-error')
    let email = document.querySelector('#email')
    let emailError = document.querySelector('#email-error')
    let password = document.querySelector('#password')
    let passwordError = document.querySelector('#password-error')
    let password2 = document.querySelector('#password2')
    let password2Error = document.querySelector('#password2-error')
    let form = document.querySelector('#form')


    nombre.focus();

    let errores = []

    nombre.addEventListener('change', function (e){
        if (nombre.value.length < 3){
            nombreError.classList.remove('display-errores')
            nombreError.classList.add('errores')
            nombreError.innerText = 'Debe escribir al menos 3 caracteres'
        } else {
            nombreError.classList.add('display-errores')
            nombreError.classList.remove('errores')
            
        }
    })

    apellido.addEventListener('change', function (e){
        if (apellido.value.length < 3){
            apellidoError.classList.remove('display-errores')
            apellidoError.classList.add('errores')
            apellidoError.innerText = 'Debe escribir al menos 3 caracteres';
        } else {
            apellidoError.classList.add('display-errores')
            apellidoError.classList.remove('errores')    
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

    password.addEventListener('change', function (e){
        if (password.value.length < 8){
            passwordError.classList.remove('display-errores')
            passwordError.classList.add('errores')
            passwordError.innerText = 'Debe escribir al menos 8 caracteres';
        } else {
            passwordError.classList.add('display-errores')
            passwordError.classList.remove('errores')

        }
    })
    password2.addEventListener('change', function (e){
        if (password2.value != password.value){
            password2Error.classList.remove('display-errores')
            password2Error.classList.add('errores')
            password2Error.innerText = 'Las contraseñas deben coincidir';
        } else {
            password2Error.classList.add('display-errores')
            password2Error.classList.remove('errores')

        }
    })
    

    form.addEventListener('submit', function (e){
        let listaErrores = document.querySelector('.errores')
        console.log(listaErrores);
    if (listaErrores != null) {
        e.preventDefault();
    }
    
    })


})