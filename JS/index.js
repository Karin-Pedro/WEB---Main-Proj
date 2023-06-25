// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        alert ('Campos vazios!');
      } else {
        let campoNumerico = $('.numero');
        let campoTexto = $('.apenas-letras');
        let carecteresEspeciais = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        
        for (let i = 0; i < campoNumerico.length; i++) {
          console.log ('sim')
          let valorCampoNumerico = campoNumerico[i].value;

          if (!/^\d+$/.test(valorCampoNumerico)) { // confere se existe apenas numeros
            event.preventDefault(); // Impede o envio do formulário
            event.stopPropagation(); // Impede que o evento se propague para elementos pai
      
            // Adicione uma mensagem de feedback personalizada
            let msgNumero = campoNumerico[i].nextElementSibling;
            msgNumero.innerHTML = 'Por favor, insira apenas números neste campo.';
            msgNumero.style.display = 'block';
          } else { // apaga msg de erro quando o usuario corrige o dado
            let msgNumero = campoNumerico[i].nextElementSibling;
            msgNumero.innerHTML = '';
            msgNumero.style.display = 'block';
          }
        }

        for (let i = 0; i < campoTexto.length; i++) {
          console.log("oi")
          let valorCampoTexto = campoTexto[i].value;

          if (carecteresEspeciais.test(valorCampoTexto)) {
            event.preventDefault(); // Impede o envio do formulário
            event.stopPropagation(); // Impede que o evento se propague para elementos pai
      
            // Adicione uma mensagem de feedback personalizada
            let msgCampoTexto = campoTexto[i].nextElementSibling;
            msgCampoTexto.innerHTML = 'Não é possível usar numeros ou caracteres especiais.';
            msgCampoTexto.style.display = 'block';
          } else { // apaga msg de erro quando o usuario corrige o dado
            let msgCampoTexto = campoTexto[i].nextElementSibling;
            msgCampoTexto.innerHTML = '';
            msgCampoTexto.style.display = 'block';
          }
        }
      }
    }, false)
  })
})()