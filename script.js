
function formatarDataParaPtBr(dataString) {
    // Verifica se a string está no formato YYYY-MM-DD
    if (dataString) {
        // Separa a string em ano, mês e dia
        const partes = dataString.split('-'); // ["2003", "11", "12"]
        if (partes.length === 3) {
            // Retorna no formato DD-MM-YYYY
            return `${partes[2]}-${partes[1]}-${partes[0]}`; // "12-11-2003"
        }
    }
    return dataString; // Retorna o original se não for válido
}

// Função principal de validação e submissão
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
                
                // APLICA A FORMATAÇÃO AQUI
                DataNascimento: formatarDataParaPtBr(dataNascimentoBruta),
                
                Curso: form.querySelector('#curso option:checked').textContent, 
                
                // APLICA A FORMATAÇÃO AQUI
                DataIngresso: formatarDataParaPtBr(dataIngressoBruta),
                
                Filiacao: document.getElementById('filiacao').value,
                Genero: document.getElementById('genero').value,
                NomeSocial: document.getElementById('nomeSocial').value || "Não informado",
                Endereco: document.getElementById('endereco').value
            };

            // 3. Exibe os dados coletados
            dadosSubmetidosPre.textContent = JSON.stringify(dados, null, 2);
            resultadoDiv.style.display = 'block';
        }

    }, false);
})();