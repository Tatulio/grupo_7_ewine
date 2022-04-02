window.addEventListener('load', function (){
    let form = document.querySelectorAll('.form')
console.log(form)
    form.addEventListener('submit', function(e){
      //e.preventDefault()
      //console.log("saras")
        confirm('Desea eliminar el producto?') == false ? e.preventDefault() : null ;
      })
})