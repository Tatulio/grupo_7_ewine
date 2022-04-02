window.addEventListener('load', function (){

    let email = document.querySelector('#email');
    let emailError = document.querySelector('#email-error');
    let password = document.querySelector('#password');
    let passwordError = document.querySelector('#password-error');
    

    let errores = [];               
    
    email.addEventListener('change', function (e){
        let valor = email.value  

        let regex = /^[_a-zA-Z0-9-]+((\.[_a-zA-Z0-9-]+)*|(\+[_a-zA-Z0-9-]+)*)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;

        if (!regex.test(valor)) {
            emailError.classList.remove('display-errores')
            emailError.classList.add('errores')
            emailError.innerText = 'Ingrese un email valido'
            console.log(valor.value)
            if (valor.length < 1){
                emailError.innerText = 'No puede dejar el campo vacio';
            } 
        } else {
            emailError.classList.add('display-errores')
            emailError.classList.remove('errores')       
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
    })  }

)