window.addEventListener('load', function (){

    let form = document.querySelector('#form')

    form.addEventListener('submit', function(e){
        confirm('Desea eliminar el producto?') == false ? e.preventDefault() : null ;
      })
})