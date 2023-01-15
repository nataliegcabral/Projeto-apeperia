var campoCEP = document.querySelector('#cep')

campoCEP.oninvalid = function() {
    this.setCustomValidity('');

    if (!this.validity.valid) {
        this.setCustomValidity('Este CEP está inválido!');
        this.parentNode.classList.add('contatoCampo--erro')
    }
}

