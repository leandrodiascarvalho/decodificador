botaoCriptografar = document.querySelector('#btn-cripto');
botaoDescriptografar= document.querySelector('#btn-descripto');
botaoCopiar = document.querySelector('#btn-copy');

// Função Criptografar 
botaoCriptografar.addEventListener("click", function criptografar(event) {

event.preventDefault();

form = document.querySelector('#form-entrada');
let textoCapturado = form.inputTexto.value;

if (!textoCapturado.match(/enter|imes|ober|ufat/)) {

   textoCapturado = textoCapturado.replaceAll('e','enter');    
    textoCapturado = textoCapturado.replaceAll('i', 'imes');
    textoCapturado = textoCapturado.replaceAll('a','ai'); 
    textoCapturado = textoCapturado.replaceAll('o','ober'); 
    textoCapturado = textoCapturado.replaceAll('u','ufat');
    textoCapturado = textoCapturado.replaceAll(/[0-9]/g, '');
    textoCapturado = textoCapturado.replaceAll(/^[A-Z-À-ü\W]/g, '') 
    
    document.querySelector('#msg').value = textoCapturado;
}

form.reset();

})

//Função Descriptografar 
botaoDescriptografar.addEventListener("click", function descriptografar(event){

  event.preventDefault();

  let textoCriptografado = form.inputTexto.value;    
      textoCriptografado = textoCriptografado.replaceAll('enter','e'); 
      textoCriptografado = textoCriptografado.replaceAll('imes', 'i');
      textoCriptografado = textoCriptografado.replaceAll('ai','a');
      textoCriptografado = textoCriptografado.replaceAll('ober','o'); 
      textoCriptografado = textoCriptografado.replaceAll('ufat','u'); 
       textoCapturado = textoCapturado.replaceAll(/^[A-Z-À-ü\W]/g, '')
      document.querySelector('#msg').value = textoCriptografado;

    form.reset();
});

/*Função Copiar*/

botaoCopiar.addEventListener("click", function copiar(){
  navigator.clipboard.writeText(document.querySelector('#msg').value); 

  form.reset();
    
});