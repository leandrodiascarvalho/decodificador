botaoCriptografar = document.querySelector('#btn-cripto');
botaoDescriptografar= document.querySelector('#btn-descripto');
botaoCopiar = document.querySelector('#btn-copy');

// Função Criptografar 
botaoCriptografar.addEventListener("click", function criptografar(event) {

event.preventDefault();

form = document.querySelector('#form-entrada');
let textoCapturado = form.inputTexto.value;
let  textoMinusculo = textoCapturado.toLowerCase();

if (!textoCapturado.match(/enter|imes|ober|ufat/)) {

   textoCapturado = textoMinusculo.replaceAll('e','enter');    
    textoCapturado = textoCapturado.replaceAll('i', 'imes');
    textoCapturado = textoCapturado.replaceAll('a','ai'); 
    textoCapturado = textoCapturado.replaceAll('o','ober'); 
    textoCapturado = textoCapturado.replaceAll('u','ufat');
   
    textoCapturado = textoCapturado.replace(/[^a-z ]/gi,'');
    
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
       textoCapturado = textoCapturado.replaceAll(/[^a-z ]/gi,'');
      document.querySelector('#msg').value = textoCriptografado;

    form.reset();
});

/*Função Copiar*/

botaoCopiar.addEventListener("click", function copiar(){
  navigator.clipboard.writeText(document.querySelector('#msg').value); 

  form.reset();
    
});

//Você pode criar um pop-up com js e html css , para quando no campo tiver texto.lenght == 0 ele faça essa operação.

// textoCapturado = textoCapturado.replaceAll(/^[A-Z-À-ü\W]/g, '')