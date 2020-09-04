//pocurar o botao
documento.querySelector("add-time")

//quando clicar no botao
.addEventListener('click', cloneField)


//executar uma açao
function cloneField() {
   //duplicar os campos Que campo?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou falso
  
     //pegar os campos. que campos?
     const fields = newFieldContainer.querySelectorAll('input')
     
     //para cada campo limpar
     fields.forEach(function(fields) {
        fields.value = ""
     }

 //colocar na pagina: onde??
  document.querySelector('#schedule-items').appendChild(newFieldContainer)



}
