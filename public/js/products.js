window.addEventListener('load', function (){

    let name = document.querySelector('#name')
    let nameError = document.querySelector('#name-error')
    let anno = document.querySelector('#anno')
    let annoError = document.querySelector('#anno-error')
    let varietal = document.querySelector('#varietal')
    let varietalError = document.querySelector('#varietal-error')
    let tipoVino = document.querySelector('#tipoVino')
    let tipoVinoError = document.querySelector('#tipoVino-error')
    let bodega = document.querySelector('#bodega')
    let bodegaError = document.querySelector('#bodega-error')
    let notasCata = document.querySelector('#notasCata')
    let notasCataError = document.querySelector('#notasCata-error')
    let maridaje = document.querySelector('#maridaje')
    let maridajeError = document.querySelector('#maridaje-error')
    let price = document.querySelector('#price')
    let priceError = document.querySelector('#price-error')

  
    let textarea = document.querySelector('#textarea')
    let textareaError = document.querySelector('#textarea-error')
 
 


    let formulario = document.querySelector('#formulario')
    let formularioError = document.querySelector('#formulario-error')

    name.focus();

    name.addEventListener('change', function (e){
        if (name.value.length < 2){
            nameError.classList.remove('display-errores')
            nameError.classList.add('errores')
            nameError.innerText = 'Debe escribir al menos 2 caracteres'
        } else {
            nameError.classList.add('display-errores')
            nameError.classList.remove('errores')
            
        }        
    })

    anno.addEventListener('change', function (e){
        if (anno.value.length !== 4){
            annoError.classList.remove('display-errores')
            annoError.classList.add('errores')
            annoError.innerText = 'Debes escribir un año'
        } else {
            annoError.classList.add('display-errores')
            annoError.classList.remove('errores')
            
        }        
    })

    price.addEventListener('change', function (e){
        if (price.value < 100){
            priceError.classList.remove('display-errores')
            priceError.classList.add('errores')
            priceError.innerText = 'Debes escribir un precio de 3 digitos'
        } else {
            priceError.classList.add('display-errores')
            priceError.classList.remove('errores')
            
        }        
    })

    varietal.addEventListener('change', function (e){
        if (varietal.value == "NULL"){
            varietalError.classList.remove('display-errores')
            varietalError.classList.add('errores')
            varietalError.innerText = 'Debe seleccionar una opcion'
        } else {
            varietalError.classList.add('display-errores')
            varietalError.classList.remove('errores')            
        }        
    })

    tipoVino.addEventListener('change', function (e){
        if (tipoVino.value == "NULL"){
            tipoVinoError.classList.remove('display-errores')
            tipoVinoError.classList.add('errores')
            tipoVinoError.innerText = 'Debe seleccionar una opcion'
        } else {
            tipoVinoError.classList.add('display-errores')
            tipoVinoError.classList.remove('errores')            
        }        
    })

    bodega.addEventListener('change', function (e){
        if (bodega.value == "NULL"){
            bodegaError.classList.remove('display-errores')
            bodegaError.classList.add('errores')
            bodegaError.innerText = 'Debe seleccionar una opcion'
        } else {
            bodegaError.classList.add('display-errores')
            bodegaError.classList.remove('errores')            
        }        
    })

    notasCata.addEventListener('blur', function (e){
        if (notasCata.value.length < 20){
            notasCataError.classList.remove('display-errores')
            notasCataError.classList.add('errores')
            notasCataError.innerText = 'Debe escribir al menos 20 caracteres'
        } else {
            notasCataError.classList.add('display-errores')
            notasCataError.classList.remove('errores')            
        }        
    })

    maridaje.addEventListener('blur', function (e){
        if (maridaje.value.length < 20){
            maridajeError.classList.remove('display-errores')
            maridajeError.classList.add('errores')
            maridajeError.innerText = 'Debe escribir al menos 20 caracteres'
        } else {
            maridajeError.classList.add('display-errores')
            maridajeError.classList.remove('errores')            
        }        
    })



    
    // .addEventListener('change', function (e){
    //     if (.value.length < 2){
    //         Error.classList.remove('display-errores')
    //         Error.classList.add('errores')
    //         Error.innerText = 'Debe escribir al menos 2 caracteres'
    //     } else {
    //         Error.classList.add('display-errores')
    //         Error.classList.remove('errores')
            
    //     }        
    // })

    // formulario.addEventListener('submit', function (e){
    //     let listaErrores = document.querySelector('.errores')
    //     console.log(listaErrores);
    // if (listaErrores != null) {
    //     e.preventDefault();
    // }

    //  }) 

    // })
})