(function () {
    'use strict';
    const form = document.getElementById('cadastroForm');
    const resultadoDiv = document.getElementById('resultado');
    const dadosSubmetidosPre = document.getElementById('dadosSubmetidos');

    form.addEventListener('submit', function (event) {
        
        if (!form.checkValidity()) {
            event.preventDefault(); 
            event.stopPropagation(); 
        }
        
        form.classList.add('was-validated');

        if (form.checkValidity()) {
            event.preventDefault(); 

            const dataNascimentoBruta = document.getElementById('dataNascimento').value;
            const dataIngressoBruta = document.getElementById('dataIngresso').value;

            const dados = {
                Nome: document.getElementById('nome').value,
                Matricula: document.getElementById('matricula').value,
                
                // Formata a data
                DataNascimento: formatarData(dataNascimentoBruta),
                
                Curso: form.querySelector('#curso option:checked').textContent, 
                
                DataIngresso: formatarData(dataIngressoBruta),
                
                Filiacao: document.getElementById('filiacao').value,
                Genero: document.getElementById('genero').value,
                NomeSocial: document.getElementById('nomeSocial').value || "Não informado",
                Endereco: document.getElementById('endereco').value
            };

            // mostra os dados
            dadosSubmetidosPre.textContent = JSON.stringify(dados, null, 2);
            resultadoDiv.style.display = 'block';
        }

    }, false);
})();

function formatarData(dataString) {
    if (dataString) {
        const partes = dataString.split('-'); 
        if (partes.length === 3) {
            return `${partes[2]}-${partes[1]}-${partes[0]}`; 
        }
    }
    return dataString; 
}
