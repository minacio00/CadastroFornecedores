// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('cep').addEventListener('blur', function () {
        var cep = this.value;
        console.log("funciono");
        if (cep.length === 8) {
            fetch('https://viacep.com.br/ws/' + cep + '/json/')
                .then(response => response.json())
                .then(data => {
                    // Concatene os valores de logradouro, bairro, localidade e uf
                    var enderecoCompleto = data.logradouro + ', ' + data.bairro + ', ' + data.localidade + ' - ' + data.uf;

                    // Preencha o campo de endereço com o valor concatenado
                    document.getElementById('endereco').value = enderecoCompleto;
                })
                .catch(error => {
                    console.error('Erro ao buscar o endereço: ' + error);
                });
        }
    });

})

// Write your JavaScript code.
