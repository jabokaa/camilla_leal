

function copiarNumero(element) {
    const numero = element.textContent; // Pega o texto do botão que foi clicado
    const input = document.createElement('input'); // Cria um input
    document.body.appendChild(input); // Adiciona ao corpo do documento
    input.value = numero; // Define o valor para o número
    input.select(); // Seleciona o texto no input
    navigator.clipboard.writeText(numero);
    document.body.removeChild(input); // Remove o input do corpo do documento

}
