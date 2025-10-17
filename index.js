document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECIONAR OS ELEMENTOS
    // Pega todos os seus cards (elementos com a classe 'principal')
    const cards = document.querySelectorAll('.principal');
    
    // Pega os botões de navegação
    const botaoEsquerdo = document.querySelector('.botao.esquerda');
    const botaoDireito = document.querySelector('.botao.direita');

    // 2. CONFIGURAÇÃO INICIAL
    let indiceAtual = 0; // Começa com o primeiro card (índice 0)

    // Função para mostrar o card correto e esconder os outros
    function mostrarCard(indice) {
        // Percorre todos os cards
        cards.forEach((card, i) => {
            // Remove a classe 'ativo' de todos os cards
            card.classList.remove('ativo');
            
            // Adiciona a classe 'ativo' APENAS ao card do índice desejado
            if (i === indice) {
                card.classList.add('ativo');
            }
        });
    }

    // Mostra o primeiro card assim que a página carrega
    mostrarCard(indiceAtual);


    // 3. ADICIONAR FUNCIONALIDADE AOS BOTÕES

    // Botão Direito (Próximo)
    botaoDireito.addEventListener('click', () => {
        // Incrementa o índice
        indiceAtual++;

        // Se o índice passar do último card, volta para o primeiro (índice 0)
        if (indiceAtual >= cards.length) {
            indiceAtual = 0;
        }

        // Mostra o novo card
        mostrarCard(indiceAtual);
    });

    // Botão Esquerdo (Anterior)
    botaoEsquerdo.addEventListener('click', () => {
        // Decrementa o índice
        indiceAtual--;

        // Se o índice for menor que o primeiro, vai para o último
        if (indiceAtual < 0) {
            indiceAtual = cards.length - 1;
        }

        // Mostra o novo card
        mostrarCard(indiceAtual);
    });
});